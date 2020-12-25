import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { myContext } from './contextApiForUserLoggedIn';
import DefaultImage from '../static/images/default-user.png';

function Profile() {
    const [msg, setmsg] = useState();
    const [error, setError] = useState();

    const [state, setState] = useContext(myContext);
    const updateNameHandler = (e) => {
        setState({
            ...state, name: e.target.value
        })

    }
    const updateEmailHandler = (e) => {
        setState({
            ...state, email: e.target.value
        })
    }

    const imageHandler = (e) => {
        // const objectURL = URL.createObjectURL(e.target.files[0])
        // console.log(objectURL);
        setState({
            ...state, uploadPhoto: e.target.files[0]
        })

    }
    const submitProfileHandler = async (e) => {
        e.preventDefault();
        if (error) {
            errorCloseButtonhandler();
        } else {
            successCloseButtonhandler();
        }
        const formData = new FormData();
        formData.append('name', state.name);
        formData.append('profileImage', state.uploadPhoto);
        formData.append('id', state.id);
        try {
            let response = await axios.put('/api/user/updateProfile', formData,
                { headers: { 'content-type': 'multipart/form-data' } }
            );
            setmsg(response.data.message);
            setState({
                name: response.data.savedUser.name,
                email: response.data.savedUser.email,
                id: response.data.savedUser._id,
                photo: response.data.savedUser.photo,
            });

        } catch (err) {
            console.log(err);
            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError("Already Updated!!");
            }
        }
    }

    useEffect(() => {
        async function fetchUser() {
            try {
                let token = JSON.parse(localStorage.getItem('token'));
                const response = await axios.get('/api/user/profile',
                    { headers: { "x-auth-token": token } }
                );
                // console.log(response.data);
                setState({
                    name: response.data.user.name,
                    email: response.data.user.email,
                    photo: response.data.user.photo,
                    id: response.data.user._id
                })
            } catch (err) {
                console.log(err.data);
            }
        }
        fetchUser();
    }, [setState]);

    const errorCloseButtonhandler = () => {
        setError('');
    }
    const successCloseButtonhandler = () => {
        setmsg('');

    }
    if (state.photo) {
        var str = state.photo;
        str = str.replace("public/", "");
        var profilepic = str;
    } else {
        profilepic = DefaultImage;
    }

    return (
        <div className="container2">
            <div className="content2" >
                <h2 style={{ textAlign: "center" }}>User Profile</h2>

                <div className="userImage">
                    <img
                        src={profilepic}
                        width={95}
                        height={95}
                        round="true"
                        alt="Loading..."
                        border={"2px solid skyblue"}
                    />
                </div>
                <form onSubmit={submitProfileHandler} encType='multipart/form-data'>
                    <div>
                        {msg &&
                            (
                                <div className="success-msg">
                                    <span>{msg}</span>
                                    <button onClick={successCloseButtonhandler}>X</button>
                                </div>
                            )
                        }
                        {error && (
                            <div className="error-msg">
                                <span>{error}</span>
                                <button onClick={errorCloseButtonhandler}>X</button>
                            </div>)
                        }
                        <label ><b>Name</b></label>
                        <input className="input" onChange={updateNameHandler} name="name" type="text" required={true} value={state.name || ''} ></input>
                        <label ><b>Email</b></label>
                        <input className="input" onChange={updateEmailHandler} readOnly name="email" type="text" required={true} value={state.email || ''} ></input>
                        <label ><b>Image</b></label>
                        <input onChange={imageHandler} className="input" name="profileImage" type="file"></input>
                        <button id="updateButton"><b>Update Profile</b></button>
                    </div>

                </form>
            </div>
        </div >
    );
}

export default Profile;