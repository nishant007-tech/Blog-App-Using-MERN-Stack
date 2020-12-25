import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState();

    const nameHandler = (e) => {
        setState({
            ...state, name: e.target.value
        })
    }
    const emailHandler = (e) => {
        setState({
            ...state, email: e.target.value
        })
    };
    const passwordHandler = (e) => {
        setState({
            ...state, password: e.target.value
        })
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/user/register', state)
            console.log(response);
            window.location = '/login';
        } catch (err) {
            if (err.response && err.response.data) {
                // console.log(err.response.data.message) // some reason error message
                setError(err.response.data.message);
            }
        }
    }
    const closeButtonhandler = () => {
        setError(undefined);
    }
    return (
        <div className="RegisterContainer">
            <form onSubmit={(e) => submitHandler(e)} >
                <div className="RegisterContent">
                    <h1 style={{ color: "white" }}>Register</h1>
                    <p style={{ color: "white" }}>Please fill in this form to create an account.</p>
                    {error && (
                        <div className="error-msg">
                            <span>{error}</span>
                            <button onClick={closeButtonhandler}>X</button>
                        </div>)
                    }
                    <label style={{ color: "white" }} ><b>Name</b></label>
                    <input className="RegisterInput" onChange={(e) => nameHandler(e)} type="text" placeholder="Enter Name" id="email" required></input>

                    <label style={{ color: "white" }}><b>Email</b></label>
                    <input className="RegisterInput" onChange={(e) => emailHandler(e)} type="email" placeholder="Enter Email" name="psw" id="psw" required></input>

                    <label style={{ color: "white" }}><b>Password</b></label>
                    <input className="RegisterInput" onChange={(e) => passwordHandler(e)} type="password" placeholder="Password" name="psw-repeat" id="psw-repeat" required></input>
                    <button type="submit" className="registerbtn">Register</button>
                    <div className="container signin">
                        <p>Already have an account? <Link to='/login'>Sign in</Link>.</p>
                    </div>
                </div>

            </form>
        </div >
    );

}

export default Register;