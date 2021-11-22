import React,{useState} from 'react';
import { Route, Routes} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import User from './User';

const App = () => {
  
  const [Path, setPath] = useState("");

  const getUrl=(url)=>{
    setPath(url);
  }

  return (
    <div>
   
        <Routes>
          <Route 
            path='/'
            element={
              <div><Header/> <Main getUrl={getUrl} /> <Footer/> </div>
            }
            />
            <Route 
              path="/showEmail"
              element={<User path={Path}/>}
            />
        </Routes>
        
    </div>
  )
}

export default App
