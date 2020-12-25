import React, { useState, useEffect } from 'react';
// import { myContext } from './contextApiForUserLoggedIn';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [userData, setuserData] = useState({
        name: ''
    });
    const token = localStorage.getItem('token');

    useEffect(() => {
        async function fetchUsers() {
            try {
                let token = JSON.parse(localStorage.getItem('token'));
                if (token) {
                    const response = await axios.get('/api/user/profile',
                        { headers: { "x-auth-token": token } }
                    );
                    setuserData({
                        name: response.data.user.name,
                    })
                }
            } catch (err) {
                console.log(err.data);
            }
        }
        fetchUsers();
    }, []);
    if (token) {

        return (
            <div className="container3">
                <div className="content3">
                    <div>
                        <b>WEB BLOGGER</b>
                        <p>Create an account and share your thoughts with others.</p>
                        <b>Welcome, {userData.name}</b>
                        <Link to='/createpost'>
                            Create Post
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="container3">
                <div className="content3">
                    <div>
                        <b>WEB BLOGGER</b>
                        <p>Create an account and share your thoughts with others.</p>
                        <Link to='/register'>
                            Register
                        </Link>
                        <b></b>
                        <Link to='/login'>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

}
export default Home;
