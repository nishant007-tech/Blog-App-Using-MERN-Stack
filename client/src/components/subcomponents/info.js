import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DefaultImage from '../../static/images/default-user.png';


function Info({ value }) {

    const [userDetail, setUserDetail] = useState({
        name: '',
        photo: ''
    })

    useEffect(() => {
        async function fetchData() {

            let response = await axios.get(`/api/user/allusers/${value}`, {
            });
            setUserDetail({
                name: response.data.user.name,
                photo: response.data.user.photo
            })
        }
        fetchData();
    }, [setUserDetail, value]);
    return (
        <>
            <img
                src={userDetail.photo ? userDetail.photo : DefaultImage}
                alt="UserIMG"
            />
            <span>{userDetail.name} </span>

        </>
    );

}

export default Info;