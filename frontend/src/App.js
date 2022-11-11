import React from 'react'
import './App.css';
import SignIn from './pages/login';
import SignUp from './pages/register';
import Home from './pages/home';


import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/login' element={< SignIn/>} />
        </Routes>
    </div>
  );
}

export default App;
