const router = require('express').Router();
const jwt = require('jsonwebtoken');
//users db Model
const userModel = require('../models/user');
const { registerValidationSchema, loginValidationSchema } = require('./validation');
//post db model
const postModel = require('../models/post');
//bcrypt
const bcrypt = require('bcryptjs');
const auth = require('./verify');
//Multer is used to Upload images in diskstorage with many features
const multer = require('multer');

const { CloudinaryStorage } = require('multer-storage-cloudinary');
//cloudinary
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'nishant007-tech-cloud',
    api_key: '556798487224165',
    api_secret: 'SNCx_gf_DmyblbnZuVIb3HyT31Y'
});

//path used to maintain the original extension name of image like, jpg, gif etc.
// cb(error: Error, destination: string)
var storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'blogimages',
        format: async () => "jpeg",
        public_id: (req, file) => file.filename,
    },
});

var upload = multer({ storage: storage });

//for normal multer
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './public/uploads');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + file.originalname);
//     }
// });
// var upload = multer({ storage: storage });

router.post('/register', async (req, res) => {
    //lets validate the data before creating User //joi will throw an object as return
    // const validation = Joi.validate(req.body, schema); //this i depricated in new verison of Joi
    const { error } = registerValidationSchema(req.body);
    if (error) {
        return res.status(400).send({ message: error.details[0].message });
    }
    //checking if user is already exists
    const emailExist = await userModel.findOne({ email: req.body.email });
    if (emailExist) {
        return res.status(400).json({ message: 'Email Already Exists' });
    }
    //bcrypt the password basically into hash format for security reasons
    const salt = await bcrypt.genSalt(10);
    const hassedPassword = await bcrypt.hash(req.body.password, salt);
    const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: hassedPassword
    });
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.status(400).json(err);
    }
});

//LOGIN Route
router.post('/login', async (req, res) => {
    //validation
    const { error } = loginValidationSchema(req.body);
    if (error) {
        return res.status(400).json(error.details[0]);
    }
    //checking if user is already exists
    let user = await userModel.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ message: 'Email or Password is Wrong' });
    }
    //if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
        return res.status(400).json({ message: 'Invalid Password or Email' });
    }
    const token = jwt.sign({ id: user._id }, 'secretkey');

    res.json({ token: token, user: user, message: "Login Successful" });
});



router.get('/profile', auth, async (req, res) => {
    const user = await userModel.findOne({ _id: req.user });
    res.json({
        user: user
    });
});

router.put('/updateProfile', upload.single('profileImage'), async (req, res) => {

    try {

        let profileUser = await userModel.findById({ _id: req.body.id });

        if (req.body.name < 6) {
            return res.status(400).json({ message: "Name should be at least 6 character long" });
        }
        // console.log(req.file);
        if (req.file) {
            profileUser.photo = req.file.path;
        }
        if (req.file == undefined && profileUser.name == req.body.name) {
            return res.status(400).json({ message: "Profile Already Updated!" });
        }
        profileUser.name = req.body.name;

        try {
            const savedUser = await profileUser.save();
            res.json({ savedUser, message: "Profile Updated Successfully!" });
        } catch (err) {
            res.status(400).json(err);
        }
    } catch (err) {
        res.json(err);
    }
});

router.post('/posts', upload.single('postImage'), async (req, res) => {
    try {
        if (req.file) {
            var imgPath = req.file.path;
        } else {
            imgPath = undefined;
        }
        const blogPost = new postModel({
            title: req.body.title,
            description: req.body.desc,
            postimage: imgPath,
            userId: req.body.id,
        });
        try {
            const savedPost = await blogPost.save();
            res.json({ savedPost, message: "Post Submitted Successfully!" });
        } catch (err) {
            res.status(400).json(err);
        }

    } catch (err) {
        res.status(400).json(err);
    }

});
router.get('/getpost', auth, async (req, res) => {
    const post = await postModel.find({ userId: req.user });
    res.json({
        post: post
    });
});
router.get('/getallpost', auth, async (req, res) => {
    const posts = await postModel.find({});
    res.json({
        posts: posts
    });
});
router.get('/allusers/:id', async (req, res) => {
    try {
        let user = await userModel.findById(req.params.id)
        res.json({ user: user })
    } catch (err) {
        res.status(400).json(err);
    }
});
router.delete('/deletepost/:id', async (req, res) => {
    try {
        await postModel.findByIdAndDelete(req.params.id);
        res.json({ message: "Post Deleted Successfully!" })
    } catch (err) {
        res.status(400).json(err);
    }
});
router.put('/likes', auth, (req, res) => {
    postModel.findByIdAndUpdate(req.body.id, {
        $push: { likes: req.user }
    }, {
        new: true
    }).exec((err, post) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(post);
        }
    });
});
router.put('/dislikes', auth, (req, res) => {
    postModel.findByIdAndUpdate(req.body.id, {
        $pull: { likes: req.user }
    }, {
        new: true
    }).exec((err, post) => {
        if (err) {
            return res.status(400).json(err);
        } else {
            res.json(post);
        }
    });
});
router.put('/comments', auth, async (req, res) => {
    const user = await userModel.findOne({ _id: req.user });
    postModel.findByIdAndUpdate(req.body.id, {
        $push: {
            comments: {
                text: req.body.text,
                postedBy: user._id,
                postedByName: user.name
            }
        }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(400).json(err);
        } else {
            res.json(result);
        }
    });
});
router.put('/deletecomment', auth, (req, res) => {
    // console.log(req.body.commentId, req.body.postId);
    postModel.findByIdAndUpdate(req.body.postId, {

        $pull: { comments: { _id: req.body.commentId } }

    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(400).json(err);
        } else {
            res.json(result);
        }
    });
});



module.exports = router;