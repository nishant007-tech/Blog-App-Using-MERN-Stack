const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
//we don't actually need body-parser in new version of node js just do that below:
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
//import Routes
const authRoutes = require('./routes/auth');

//Routes Middlewares
app.use('/api/user', authRoutes);


//connect to db
mongoose.connect('mongodb+srv://nishant007-tech:nishanti69@cluster0.jmjrn.mongodb.net/nishant?retryWrites=true&w=majority', { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('We Are Connected to DB');
});
// mongodb://localhost/nishant
// 'mongodb+srv://nishant007-tech:nishanti69@cluster0.jmjrn.mongodb.net/nishant?retryWrites=true&w=majority'

if (process.env.NODE_ENV == "production") {
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});