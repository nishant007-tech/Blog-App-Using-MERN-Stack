import React, { useEffect, useState } from 'react';
import Default from '../static/images/defaultimage.jpeg';
import axios from 'axios';
import Info from './subcomponents/info';


function AllPosts() {

    const [allPost, setAllPosts] = useState({
        allPosts: []
    })
    const [currentUser, setCurrentuser] = useState();

    useEffect(() => {
        async function fetchposts() {
            try {
                let token = JSON.parse(localStorage.getItem('token'));
                const response = await axios.get('/api/user/getallpost',
                    { headers: { "x-auth-token": token } }
                );
                const res = await axios.get('/api/user/profile',
                    { headers: { "x-auth-token": token } }
                );
                setCurrentuser(res.data.user._id);
                setAllPosts({
                    allPosts: response.data.posts
                });

            } catch (err) {
                console.log(err.data);
            }
        }
        fetchposts();

    }, [])

    const likeHandler = async (postId) => {
        try {
            let token = JSON.parse(localStorage.getItem('token'));
            let response = await axios.put('/api/user/likes', { id: postId },
                { headers: { "x-auth-token": token } }
            );
            //this is for re-render, we actually dont need that
            const newData = allPost.allPosts.map((data) => {
                if (data._id === response.data._id) {
                    return response.data
                } else {
                    return data
                }
            })
            setAllPosts({
                allPosts: newData
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
            const newData = allPost.allPosts.map((data) => {
                if (data._id === response.data._id) {
                    return response.data
                } else {
                    return data
                }
            })
            setAllPosts({
                allPosts: newData
            });
        } catch (error) {
            console.log(error);
        }

    }

    const commentInputHandler = async (e, postId) => {
        try {
            e.preventDefault();
            let text = e.target[0].value;
            let token = JSON.parse(localStorage.getItem('token'));
            let response = await axios.put('/api/user/comments', {
                text: text,
                id: postId
            }, {
                headers: { "x-auth-token": token }
            });
            e.target[0].value = "";
            const newData = allPost.allPosts.map((data) => {
                if (data._id === response.data._id) {
                    return response.data
                } else {
                    return data
                }
            })
            setAllPosts({
                allPosts: newData
            });
        } catch (err) {
            console.log(err);
        }
    }
    const deleteCommentHandler = async (commentId, postId) => {
        try {
            let token = JSON.parse(localStorage.getItem('token'));
            let response = await axios.put('/api/user/deletecomment', { commentId: commentId, postId: postId },
                { headers: { "x-auth-token": token } }
            );
            const newData = allPost.allPosts.map((data) => {
                if (data._id === response.data._id) {
                    return response.data
                } else {
                    return data
                }
            })
            setAllPosts({
                allPosts: newData
            });
        } catch (error) {
            console.log(error);
        }

    }


    if (allPost.allPosts.length > 0) {
        return (
            <div className="myPost-container">
                <div className="headPost">
                    <h2>ALL <span className="badge">Blog Posts</span></h2>
                    <hr></hr>
                </div>
                {
                    allPost.allPosts.map((data, index) => (
                        <div key={index} className="blog-cards">
                            <div className="HeaderContent">
                                <div>
                                    <Info value={data.userId} />
                                </div>
                                <strong id="Date"> {data.date} </strong>
                            </div>

                            <div className="image">
                                <img
                                    src={data.postimage ? data.postimage : Default}
                                    alt="PostImg"
                                />
                            </div>

                            <div className="blog-content">

                                <b> {data.title}</b>

                                <p>{data.description}</p>

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

                                </div>
                                {
                                    data.comments.map((comment) => (
                                        <p key={comment._id} id="commentP">
                                            <b id="commentB">{comment.postedByName}</b>
                                            <span id="commentText">{comment.text}</span>
                                            {comment.postedBy === currentUser
                                                ?
                                                <i id="trashForComment" onClick={() => deleteCommentHandler(comment._id, data._id)} className="fa fa-trash-o"></i>
                                                :
                                                ''
                                            }
                                        </p>
                                    ))

                                }
                                <form onSubmit={(e) => {
                                    commentInputHandler(e, data._id)
                                }} className="comments">
                                    <input id="commentInput" type="commentText" placeholder="add a comment"></input>
                                </form>

                            </div>
                        </div>
                    ))

                }


            </div>
        );
    } else {
        return (
            <div className="myPost-container">
                <div className="headPost">
                    <h2>ALL <span className="badge">Blog Posts</span></h2>
                    <hr></hr>
                </div>
                <div className="blog-cards">
                    <div className="blog-content">
                        <b>No Post Yet!! Be The First One To Create Post.</b>
                    </div>
                </div>
            </div>
        );
    }

}
export default AllPosts;