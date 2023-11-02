import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Config";

const LawyerLogin = () => {
  const navigate = useNavigate();
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleLogIn = (e) => {
    e.preventDefault();
    setSubmitDisabled(true);

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        console.log(res);
        setSubmitDisabled(false);

        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });

        navigate("/lawyerhome");
      })
      .catch((err) => {
        console.log(err);
        setSubmitDisabled(false);
      });
  };

  return (
    <>
      <h1>Lawyer Login</h1>
      <form action="">
        <input
          type="text"
          placeholder="enter your email"
          onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
        />

        <input
          type="password"
          placeholder="enter password"
          onChange={(e) => setValues((prev) => ({ ...prev, password: e.target.value }))}
        />

        <button onClick={handleLogIn} disabled={submitDisabled}>Login</button>
      </form>

      <p>Don't have an account? <Link to="/lawyersignup">Sign Up</Link></p>
    </>
  );
};

export default LawyerLogin