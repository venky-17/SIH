import "../Css/Navbar.css"
import React, { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Link, useLocation , useNavigate} from "react-router-dom";


const Navbar = (props) =>{
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        console.log("User's display name:", props.name || location.state?.name);
      }, [props.name, location.state]);

    const handleSignOut = () => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          signOut(auth)
            .then(() => {
              console.log("Sign-out successful.");
              navigate("/")
    
            })
            .catch((error) => {
              console.error("An error happened during sign-out:", error);
            });
        } else {
          console.log("No user is currently authenticated.");
        }
      };
    return (
        <>
        <nav>
            <div className="logo">
               <h1>Legal Compass</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><button className="logout-btn"  onClick={handleSignOut}>Logout</button></li>
                    <li><a href="">{` ${props.name || location.state?.name}`}</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default Navbar