import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./Components/HomePg";

import NotFound from './Components/NotFound';
import { useEffect, useState } from 'react';
import { auth } from './Components/Firebase/Config';


import LawyerHome from './Components/Lawyer/LawyerHome';
import UserLogin from './Components/UserLogin';
import LawyerLogin from './Components/Lawyer/LawyerLoginn';
import UserSignUp from './Components/UserSignUp';
import LawyerSignUp from './Components/Lawyer/LawyerSignUp';


function App() {
  const [userName, setUsername] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
      } else {
        setUsername("");
      }
    });
  }, []); 
  return (
    <div className="App">
   
      <Router>
      <ToastContainer/>
        <Routes>
          <Route path='/' element={<Home name={userName} />} />
          <Route path='/login' element={<UserLogin />} />
          <Route path='/signup' element={<UserSignUp />} />
          <Route path='/lawyersignup' element={<LawyerSignUp />} />
          <Route path='/lawyersignin' element={<LawyerLogin />} />
          <Route path='/lawyerhome' element={<LawyerHome name={userName}/>} />


          
          <Route path='*' element={<NotFound />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
