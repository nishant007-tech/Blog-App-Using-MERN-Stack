import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//{} in these parenthesis we can write js code
//${`process.env.PUBLIC_URL/images`} this will work as well.



function Nav() {
    const logoutHandler = (e) => {
        localStorage.removeItem('token');
    }
    const [state, setState] = useState("topnav");

    let token = localStorage.getItem('token');

    const menubarHandler = () => {
        if (state === "topnav") {
            setState("topnav responsive");
        } else {
            setState("topnav");
        }
    }
    const hidePopup = () => {
        setState("topnav");
    }



    if (token) {
        return (
            <div className="navBar">
                <ul className={state}>
                    <Link onClick={hidePopup} to='/'>
                        <li> WEB BLOGGER HOME</li>
                    </Link>

                    <a href="/">
                        <li onClick={logoutHandler} >Logout</li>
                    </a>
                    <Link onClick={hidePopup} to="/profile">
                        <li>Profile</li>
                    </Link>
                    <Link onClick={hidePopup} to="/yourpost">
                        <li>My Posts</li>
                    </Link>
                    <Link onClick={hidePopup} to="/allposts">
                        <li>All Posts</li>
                    </Link>

                    <i onClick={menubarHandler} className=" menuicon fa fa-bars"></i>
                </ul>

            </div>
        );
    }//end if
    else {

        return (

            <div className="navBar">
                <ul className={state}>
                    <Link onClick={hidePopup} to='/'>
                        <li>WEB HOME</li>
                    </Link>
                    <Link onClick={hidePopup} to='/register'>
                        <li>Register</li>
                    </Link>
                    <Link onClick={hidePopup} to='/login'>
                        <li>Login</li>
                    </Link>
                    <i onClick={menubarHandler} className=" menuicon fa fa-bars"></i>
                </ul>

            </div>
        );
    }//end if

}

export default Nav;