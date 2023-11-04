import React, { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Css/Navbar.css"


const Navbar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpened, setIsOpened] = useState(false);
  const [listOpen, setListOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  const handleSignOut = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      signOut(auth)
        .then(() => {
          console.log("Sign-out successful.");
          navigate("/");
        })
        .catch((error) => {
          console.error("An error happened during sign-out:", error);
        });
    } else {
      console.log("No user is currently authenticated.");
    }
  };

  useEffect(() => {
    console.log("User's display name:", props.name || location.state?.name);
  }, [props.name, location.state]);

  

  

  const handleMenuclick = () => {
        setListOpen(!listOpen)
        if(listOpen){
            console.log('open');
        } else{
            console.log('closed');
        }
    
  }

  const handletogglebutton = () => {
    handleMenuclick()
    toggleMenu()

  }

  return (
    <>
      <nav>
        <div className="logo">
          <h1>Legal Compass</h1>
        </div>
        
        <button
          className={`menu ${isOpened ? 'opened' : ''}`}
          onClick={handletogglebutton}
          aria-label="Main Menu"
        >
          <svg width="30" height="30" viewBox="0 0 100 100">
            <path
              className={`line line1 ${isOpened ? 'opened' : ''}`}
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path
              className={`line line2 ${isOpened ? 'opened' : ''}`}
              d="M 20,50 H 80"
            />
            <path
              className={`line line3 ${isOpened ? 'opened' : ''}`}
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
        <div className="nav-items">
          <ul>   
                 {
                  getAuth()?.currentUser && <>  <li><a href="#">Home</a></li>  </>
                 }
               
          
            <li>
            {
  getAuth()?.currentUser ? (
    <button className="logout-btn" onClick={handleSignOut}>
      LogOut
    </button>
  ) : (
    <Link to="/login">
      <button className="logout-btn">
        SignIn
      </button>
    </Link>
  )
}


             
            </li>
            <li>
            {
                    getAuth()?.currentUser ? ( <a href="">{` ${props.name || location.state?.name}`}</a>) : (
                        <a href="">Guest</a>
                    )
                  }
            </li>
             {
              getAuth().currentUser && <> <li><a href="#">Profile</a></li></>
             }
          </ul>
        </div>

      </nav>
    <div className ={listOpen ?  "display-items "  : "hide-items" } >
    {
        listOpen && ( <div className="hamburger-nav-items">
          <ul>
          {
                  getAuth()?.currentUser && <>  <li><a href="#">Home</a></li>  </>
                 }
            <li>
                  {
                    getAuth()?.currentUser ? ( <a href="">{` ${props.name || location.state?.name}`}</a>) : (
                        <a href="">Guest</a>
                    )
                  }
             
            </li>
            {
              getAuth().currentUser && <> <li><a href="#">Profile</a></li></>
             }
            <li>
            {
                 getAuth().currentUser ? (
    <button className="logout-btn" onClick={handleSignOut}>
      LogOut
    </button>
  ) : (
    
    <Link to="/login">
  <button className="logout-btn">
    SignIn
  </button>
</Link>

  )
}

            </li>
            
        
          </ul>
        </div> )
     }
    </div>
    </>
  );
};

export default Navbar;
