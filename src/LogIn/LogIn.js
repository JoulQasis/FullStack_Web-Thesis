import React, { Component } from "react";
import LoginCss from "./LogIn.module.css";
import { useNavigate } from "react-router-dom";

function LogIn() {
  
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    // 👇️ navigate to /contacts
    navigate("/SignUp");
  };

  return (
    <main className={LoginCss.main}>
      <div className={LoginCss.container}>
        <div>
          <form>
            <h1>Login</h1>
            <input
              className={LoginCss.input}
              type="email"
              placeholder="Email or Username"
            ></input>
            <input
              className={LoginCss.input}
              type="password"
              placeholder="Password"
            />
            <button className={LoginCss.loginbutton2} type="submit">Login</button>
          </form>
        </div>
        <div className="overlay-panel">
          <p className={LoginCss.p}> You haven't tried our games yet!?</p>
          <button className={LoginCss.loginbutton3} onClick={navigateToSignUp}>
            Go Sign Up!
          </button>
        </div>
      </div>
    </main>
  );
}

export default LogIn;
