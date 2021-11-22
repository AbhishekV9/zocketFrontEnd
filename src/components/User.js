import React from 'react';
import Alert from '@mui/material/Alert';
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
        }).catch((err)=>{
            console.log("hi")
            
            console.log(err);
        })
    },[path])

    return (        
        <div>
            <div className="alert-user">
                <Alert severity={"success"}> A Notification Email is Sent To {user.email}</Alert>
            </div>
            <Header/>
            <h1 className="userInfo1">Email:-</h1>
            <h1 className="userEmail">{user.email}</h1>
        </div>
    )
}

export default User_info
