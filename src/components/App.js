import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import User_info from './User';

const App = () => {
  return (
    <div>
        <Routes>
          <Route 
            path='/'
            
            element={
              <div><User_info/> </div>
            }
            />
            <Route 
              path="footer"
              element={ 
              
              <Footer/>}
            />
        </Routes>
    </div>
  )
}

export default App
