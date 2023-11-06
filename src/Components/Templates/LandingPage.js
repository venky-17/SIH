import React from 'react';
import "../../Css/LandingPage.css"
import { Link,} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';



const LandingPage = () => {
  return (
    <div className="App">
      <main className='landingmain'>
        <div className="intro-text-container">
        <input className='searchbar' type="text" placeholder="Search.."/>
        <button className='search-btn'><i className="fa fa-search" aria-hidden="true"></i></button>
        </div>
        <section className="landing-container">
          <div className="Scarecrow"></div>
          <div className="error-message-container">
            <p className="error-heading"> Legal Compass.</p>
            <p className="error-text">
            A one stop AI-driven platform for educating, harmonizing legal insights, resources, counsel,
                       and real-time legal updates all incorporated within a single platform.
            </p>
            <div className="getstarted-button">
             
           <button className='getStartedbtn'>   <Link className='a' to="/signup">Get Started</Link></button>

            </div>
          </div>
        </section>
      </main>
     
    </div>
  );
};

export default LandingPage;
