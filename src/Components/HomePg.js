import React, { useEffect } from "react";
import { Link, useLocation , useNavigate} from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Home = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

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
      <h1>Welcome to  Legal Compass</h1>

      {props.name || location.state?.name ? (
        <>
          <h1>{`Welcome ${props.name || location.state?.name}`}</h1>
          <Link to="https://hrrakesh.pythonanywhere.com/">ChatBot</Link>
          
          <button onClick={handleSignOut}>Logout</button>
        </>
      ) : (
        <>
          <p>Welcome</p>
          <Link to="/login">Login</Link>
          <br />
          <Link to="/signup">SignUp</Link>
        </>
      )}
    </>
  );
};

export default Home;
