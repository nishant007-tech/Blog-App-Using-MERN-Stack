import React, { useState, createContext } from 'react';
export const myContext = createContext();

export function Context(props) {
    const [getuser, setUser] = useState({
        user: []
    });
    const [state, setState] = useState({
        name: '',
        email: '',
        id: '',
        photo: '',
        uploadPhoto: null
    });

    // const [img, setImg] = useState(
    //     {
    //         photo: 'https://res.cloudinary.com/geekysrm/image/upload/v1542221619/default-user.png',
    //     }
    // );

    return (
        <myContext.Provider value={[getuser, setUser, state, setState]}>
            {props.children}
        </myContext.Provider >

    );
}