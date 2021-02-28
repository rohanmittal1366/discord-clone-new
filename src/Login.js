import React from "react";
import "./login.css";
import IMG from "./download.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);

    });
  };

  return (
    <div className="login">
      <h2>I am the login page</h2>
      <div className="login__logo">
        <img src={IMG} alt="logo" />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;