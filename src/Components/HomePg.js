import React, { useEffect } from "react";
import { Link, useLocation , useNavigate} from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Navbar from "../Components/Navbar";
import TemplateForm from "./Templates/TemplateHome";
import "../Css/Homepage.css"
import Footer from "./Templates/Footer";


const Home = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("User's display name:", props.name || location.state?.name);
  }, [props.name, location.state]);

  
  return (
   <div className="homepagebody">
    
      <Navbar name={props.name || location.state?.name}/>
      <h1 className="homepage-h1">Welcome to  Legal Compass</h1>
      
      <TemplateForm />

      {props.name || location.state?.name ? (
        <>
          <h1>{`Welcome ${props.name || location.state?.name}`}</h1>
          <button>  <Link to="https://hrrakesh.pythonanywhere.com/">ChatBot</Link> </button>
          
          
        </>
      ) : (
        <>
          <p>Welcome</p>
          <Link to="/login">Login</Link>
          <br />
          <Link to="/signup">SignUp</Link> <br />

          <Link to="/lawyersignin">Lawyer Login</Link> <br />
    
          <Link to="/lawyersignup"> Lawyer SignUp</Link> <br />
        </>
      )}
    <Footer/>
   </div>
  );
};

export default Home;
