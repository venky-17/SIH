import React from "react";
import {  useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import {  toast } from 'react-toastify';
import "../../Css/LawyerHome.css"



import Navbar from "../Navbar"




const LawyerHome = (props)=>{
    const location = useLocation();

 
    return (
        <div className="lawyerContainer">
        <Navbar name={props?.name || location.state?.name}/>

         {
            getAuth().currentUser && <>
            <h1>saul goodman</h1>
        <img src="https://www.postavy.cz/foto/saul-goodman-foto.jpg" alt="" />
            </>
         }

       </div>
        )
}

export default LawyerHome