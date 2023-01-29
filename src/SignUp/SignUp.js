import React from 'react'
import SignUpCss from "./SignUp.module.css"
import { useNavigate } from "react-router-dom";

function SignUp() {

  const navigate = useNavigate();
  const navigateToLogIn = () => {
    // 👇️ navigate to /LogIn button
    navigate("/LogIn");
  };

  return (
    <main className={SignUpCss.main}>
    <div className={SignUpCss.container}>
      <div>
        <form>
          <h1>Sign up!</h1>
          <input
            className={SignUpCss.input}
            type="email"
            placeholder="Email"
          ></input>
          <input
            className={SignUpCss.input}
            type="text"
            placeholder="Username"
          ></input>
          <input
            className={SignUpCss.input}
            type="password"
            placeholder="Password"
          />
          <button className={SignUpCss.loginbutton2} type="submit">Sign up</button>
        </form>
      </div>
      <div className="overlay-panel">
        <p className={SignUpCss.p}> You are a gamer?</p>
        <button className={SignUpCss.loginbutton3} onClick={navigateToLogIn}>
          Log in
        </button>
      </div>
    </div>
  </main>
  )
}

export default SignUp