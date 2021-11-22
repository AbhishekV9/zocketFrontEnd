import React from 'react';
import { useEffect,useState } from 'react';
import Header from './Header';

const User_info = (props) => {
    const {path}=props;
    const [user,setUser] = useState({});
    useEffect(()=>{
        fetch(path,{
            method:'GET',
        })
        .then(res => res.json())
        .then((data)=>{
            setUser(data.user);
        })
    },[path])

    return (        
        <div>
            <Header/>
            <h1 className="userInfo1">Email:-</h1>
            <h1 className="userEmail">{user.email}</h1>
        </div>
    )
}

export default User_info
