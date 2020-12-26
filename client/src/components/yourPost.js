import React, { useEffect, useState } from 'react';
// import img from '../static/images/rana.jpg';
import axios from 'axios';
import DefaultImage from '../static/images/default-user.png';
import Default from '../static/images/defaultimage.jpeg';


function YourPost() {
    const [postDetail, setPostDetails] = useState({
        posts: []
    })
    const [currentUser, setCurrentuser] = useState();


    const [userphoto, setPhoto] = useState({
        photo: '',
        name: ''
    })
    useEffect(() => {
        async function fetchUser() {
            try {
                let token = JSON.parse(localStorage.getItem('token'));
                const response = await axios.get('/api/user/getpost',
                    {
                        headers: {
                            "x-auth-token": token,

                        }
                    }
                );
                const res = await axios.get('/api/user/profile',
                    {
                        headers: {
                            "x-auth-token": token,

                        }
                    }
                );
                // console.log(response.data);
                setCurrentuser(res.data.user._id);
                setPhoto({
                    photo: res.data.user.photo,
                    name: res.data.user.name
                });
                setPostDetails({
                    posts: response.data.post
                }
                );
                // console.log(postDetail);
            } catch (err) {
                console.log(err.data);
            }
        }
        fetchUser();

    }, [])

    const deletePostHandler = async (postId) => {
        await axios.delete(`/api/user/deletepost/${postId}`);
        window.location.reload();
    }
    //like and dislike handlers
    const likeHandler = async (postId) => {
        try {
            let token = JSON.parse(localStorage.getItem('token'));
            let response = await axios.put('/api/user/likes', { id: postId },
                { headers: { "x-auth-token": token } }
            );
            //this is for re-render, we actually dont need that
            const newData = postDetail.posts.map((data) => {
                if (data._id === response.data._id) {
                    return response.data
                } else {
                    return data
                }
            })
            setPostDetails({
                posts: newData
            });
        } catch (error) {
            console.log(error);
        }
    }

    const dislikeHandler = async (postId) => {
        try {
            let token = JSON.parse(localStorage.getItem('token'));
            let response = await axios.put('/api/user/dislikes', { id: postId },
                { headers: { "x-auth-token": token } }
            );
            const newData = postDetail.posts.map((data) => {
                if (data._id === response.data._id) {
                    return response.data
                } else {
                    return data
                }
            })
            setPostDetails({
                posts: newData
            });
        } catch (error) {
            console.log(error);
        }

    }


    if (userphoto.photo) {
        var profilepic = userphoto.photo;
    } else {
        profilepic = DefaultImage;
    }

    //return Statements
    if (postDetail.posts.length > 0) {
        return (
            <div className="myPost-container">
                <div className="headPost">
                    <h2>My <span className="badge">Blog Posts</span></h2>
                    <hr></hr>
                </div>

                {
                    postDetail.posts.map((data, index) => (

                        <div key={index} className="blog-cards">
                            <div className="HeaderContent">
                                <div>
                                    <img
                                        src={profilepic}
                                        alt="UserIMG"
                                    />
                                    <span>{userphoto.name} </span>
                                </div>
                                <strong id="Date"> {data.date} </strong>
                                {/* <p id="Date"> {Date(data.date)} </p> */}
                            </div>

                            <div className="image">
                                <img
                                    src={data.postimage ? data.postimage : Default}
                                    alt="PostIMG"
                                />
                            </div>

                            <div className="blog-content">
                                <b> {data.title}</b>
                                <p>{data.description}</p>
                                <hr id="hr2"></hr>
                                <div className="icons">
                                    <div>
                                        {data.likes.includes(currentUser)
                                            ?
                                            <i onClick={() => dislikeHandler(data._id)} id="heart" className="fa fa-heart redheart"></i>
                                            :
                                            <i onClick={() => likeHandler(data._id)} id="heart" className="fa fa-heart-o"></i>
                                        }

                                        <i id="showlikes">
                                            {data.likes.length > 1
                                                ?
                                                `${data.likes.length} Likes`
                                                :
                                                `${data.likes.length} Like`
                                            }
                                        </i>
                                    </div>
                                    <i id="trash" onClick={() => deletePostHandler(data._id)} className="fa fa-trash-o"></i>
                                </div>

                            </div>
                        </div>
                    ))
                }

            </div>
        );
    }
    else {
        return (
            <div className="myPost-container">
                <div className="headPost">
                    <h2>My <span className="badge">Blog Posts</span></h2>
                    <hr></hr>
                </div>
                <div className="blog-cards">
                    <div className="blog-content">
                        <b>You Haven't Created Any Blog Post Yet!</b>
                    </div>
                </div>
            </div>
        );
    }

}

export default YourPost;