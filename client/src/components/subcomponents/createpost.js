import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CreatePost() {
    const [post, setPost] = useState({
        title: '',
        description: '',
        postImage: null,
        userId: ''
    })
    const titleHandler = (e) => {
        setPost({
            ...post, title: e.target.value
        })
    }
    const descHandler = (e) => {
        setPost({
            ...post, description: e.target.value
        })
    }
    const postImageHandler = (e) => {
        setPost({
            ...post, postImage: e.target.files[0]
        })
    }

    const postSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', post.title);
        formData.append('desc', post.description);
        formData.append('postImage', post.postImage);
        formData.append('id', post.userId);
        try {
            let response = await axios.post('/api/user/posts', formData,
                { headers: { 'content-type': 'multipart/form-data' } }
            );
            console.log(response);
            window.location = "/yourpost";
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        async function fetchDetails() {
            try {
                let token = JSON.parse(localStorage.getItem('token'));
                const response = await axios.get('/api/user/profile',
                    { headers: { "x-auth-token": token } }
                );
                // console.log(response.data);
                setPost({
                    userId: response.data.user._id
                })
            } catch (err) {
                console.log(err);
            }
        }
        fetchDetails();
    }, []);

    return (
        <div className="post-container">
            <div className="blankContainer">
                <b>Say Something....</b>
            </div>
            <div className="post-content">
                <form onSubmit={postSubmitHandler} encType="multipart/form-data" >
                    <label ><b>Title</b></label>
                    <input className="postinput" placeholder="Title of your post..." onChange={titleHandler} name="title" type="text" required={true}  ></input>

                    <label ><b>Image</b></label>
                    <input onChange={postImageHandler} className="postinput" name="postImage" type="file"></input>
                    <label ><b>Description</b></label>
                    <textarea rows="5" id="textInput" placeholder="Write Something..." onChange={descHandler} name="desc" type="text" required={true}  ></textarea>
                    <button id="postButton"><b>Post</b></button>
                </form>
            </div >
        </div >

    );
}

export default CreatePost;