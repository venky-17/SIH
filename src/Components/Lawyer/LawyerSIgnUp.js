import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Config";

const LawyerSignUp = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submitDisabled, setSubmitDisabled] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    setSubmitDisabled(true);

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        console.log(res);
        console.log(values);
        setSubmitDisabled(false);

        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });

        navigate("/lawyerhome", { state: { name: values.name } });
      })
      .catch((err) => {
        console.log(err);
        setSubmitDisabled(false);
      });
  };

  return (
    <>
      <h1>Lawyer SignUp</h1>

      <form action="">
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))}
        />

        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
        />

        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setValues((prev) => ({ ...prev, password: e.target.value }))}
        />

        <button onClick={handleSignUp} disabled={submitDisabled}>SignUp</button>
      </form>

      <p>Already have an account? <Link to="/lawyersignin">Login</Link></p>
    </>
  );
};

export default LawyerSignUp
