import React from 'react';
import { useEffect,useState } from 'react';
import Header from './Header';

const User_info = (props) => {
    const {url}=props;
    const [user,setUser] = useState({});
    useEffect(()=>{
        fetch(url,{
            method:'GET',
        })
        .then(res => res.json())
        .then((data)=>{
            setUser(data.user);
        })
    },[url])

    return (        
        <div>
            <Header/>
            <h1>{user.email}</h1>
        </div>
    )
}

export default User_info
