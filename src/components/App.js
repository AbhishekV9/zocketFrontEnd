import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const App = () => {
  // const[email,setEmail]=useState("");
  // var headers = {}
  // const url="http://localhost:8000/register";
  // const handleClick=()=>{
  //   fetch(url,{
  //     method : "GET",
  //     mode: 'cors',
  //     header:headers
  //   })
  //   .then(res=>res.json())
  //   .then(data=>console.log(data))
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // }
  return (
    <div>
        <Header/>
        {/* <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={handleClick}>submit</button> */}
        <Main/>
        <Footer />
    </div>
  )
}

export default App
