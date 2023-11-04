import React from "react";
import {  useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";



import Navbar from "../Navbar"




const LawyerHome = (props)=>{
    const location = useLocation();

    const authenticated = getAuth()
    return (
        <div>
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