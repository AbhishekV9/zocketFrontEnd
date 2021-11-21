import React,{useState} from 'react'
import Alert from '@mui/material/Alert';

import DontMiss from "../../assets/Group 12459.png";
import Men from "../../assets/Group 16750.png";
import Ads from "../../assets/Facebook Ads In 30 Seconds.png"
import Vector from "../../assets/Vector.png";
import Grow from "../../assets/grow.png";
import Group from "../../assets/Group88.png";
import Vector2 from "../../assets/Vector-2.png";
import Vector1 from "../../assets/Vector-1.png";

const Register = () => {

    const [Email, setEmail] = useState("");
    const [alertClass,setAlertClass] =useState("");
    const [showToaster,setToaster] = useState(false);
    const [mess,setMessage]= useState("");

    const handlechange=(e)=>{
        setEmail(e.target.value);
    }

    const handleRegister=async ()=>{
        let formBody=[];
        let encodedKey=encodeURIComponent("email");
        let encodedValue=encodeURIComponent(Email);
        formBody.push(encodedKey+'=' + encodedValue);

        const url="http://localhost:8000/register";
        await fetch(url,{
            method:'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body:formBody
        }).then(res => res.json())
        .then((data)=>{
            const {isPresent,notValid,registered,message}=data;
            setMessage(message);
            if(isPresent){
                setAlertClass("info");
                handletoaster();
            }else if(notValid){
                setAlertClass("error");
                handletoaster();
            }else if(registered){
                setAlertClass("success");
                handletoaster();
            }
        });
        setEmail("");
    }

    const handletoaster=()=>{
        setToaster(true);
        setTimeout(()=>{
            setToaster(false);
        },2000)
    }

    return (
        <div>
            <div className="alert">
                { showToaster && <Alert severity={alertClass}>
                    {mess}
                </Alert>
                }
            </div>
            <img className="dont"src={DontMiss} alt="Don't Miss"></img>
            <img src={Men} className="men" alt="detail"/>
            <img src={Ads} className="ads" alt="heading"/>
            <img src={Vector} className="vector" alt="vector"/>
            <img src={Grow} className="grow" alt="Grow Your Buisness"/>
            <input type="email" value={Email} placeholder="&nbsp;&nbsp;&nbsp;Your Email ID" className="ip" onChange={handlechange}/>
            <img src={Group} className="b" alt="button" onClick={ handleRegister}/>
            <img src={Vector2} className="vector2" alt="arrow" />
            <img src={Vector1} className="vector1" alt="circle" />
        </div>
    )
}

export default Register
