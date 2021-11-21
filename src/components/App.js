import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import User from './User';

const App = () => {
  return (
    <div>
   
        <Routes>
          <Route 
            path='/'
            element={
              <div><Header/> <Main/> <Footer/> </div>
            }
            />
            <Route 
              path="/showEmail"
              element={<User/>}
            />
        </Routes>
        
    </div>
  )
}

export default App
