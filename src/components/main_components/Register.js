import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

import DontMiss from '../../assets/Group 12459.png';
import Men from '../../assets/Group 16750.png';
import Vector from '../../assets/Vector.png';
import Vector2 from '../../assets/Vector-2.png';
import Vector1 from '../../assets/Vector-1.png';

const Register = (props) => {
  let navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [alertClass, setAlertClass] = useState('');
  const [showToaster, setToaster] = useState(false);
  const [mess, setMessage] = useState('');

  const handlechange = (e) => {
    setEmail(e.target.value);
  };

  const handleRegister = async () => {
    let formBody = [];
    let encodedKey = encodeURIComponent('email');
    let encodedValue = encodeURIComponent(Email);
    formBody.push(encodedKey + '=' + encodedValue);

    const url = 'https://zocket99.herokuapp.com/register';
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formBody,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { isPresent, notValid, registered, path, message } = data;
        setMessage(message);
        if (isPresent) {
          setAlertClass('info');
          handletoaster(path);
        } else if (notValid) {
          setAlertClass('error');
          handletoaster('');
        } else if (registered) {
          setAlertClass('success');
          handletoaster(path);
        }
      });
    setEmail('');
  };

  const handletoaster = (path) => {
    setToaster(true);
    setTimeout(() => {
      setToaster(false);
      if (path.length !== 0) {
        props.getUrl(path);
        navigate('/showEmail');
      }
    }, 1000);
  };
  let handleDown = () => {
    // code for down navigation
  };
  return (
    <div>
      <div className="alert">
        {showToaster && <Alert severity={alertClass}>{mess}</Alert>}
      </div>

      <img className="dont" src={DontMiss} alt="Don't Miss"></img>
      <img src={Men} className="men" alt="detail" />
      <h1 className="ads">Facebook Ads In 30 Seconds</h1>
      <img src={Vector} className="vector" alt="vector" />
      <h4 className="grow">
        Grow your business by setting up ads instantly.
        <br />
        no expertise needed
      </h4>
      <input
        type="email"
        value={Email}
        placeholder="&nbsp;&nbsp;&nbsp;Your Email ID"
        className="ip"
        onChange={handlechange}
      />
      <button type="button" className="btn btn-primary b" onClick={handleRegister} >Get early access</button>
      <div onClick={handleDown}>
        <img src={Vector2} className="vector2" alt="arrow" />
        <img src={Vector1} className="vector1" alt="circle" />
      </div>
    </div>
  );
};

export default Register;
