import React, { useState } from "react";
import styled from "styled-components";
import "./Signin.css";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { UseAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100wh;
  height: 100vh;

  justify-content: center;
  align-items: center;

  @media (max-width:400px){
   .logincard{
    width: 90%;
   
    height: 80%;
   }

  }
`;

function SigninCompo() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {user, GoogleSignIn, error, setError, SignIn } = UseAuth();
console.log(user)
  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await SignIn(email, password);
      navigate("/explore");
    } catch (error) {
      setError(error.message);
    }
  };

  const HandleGoogle = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await GoogleSignIn();
      navigate("/explore");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <LoginWrapper>
        <div className="logincard">
          <h1>Sign In</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <input
            className="inputs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email..."
          />
          <input
            className="inputs"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password..."
          />

          <GoogleButton
            type="dark"
            className="g-btn"
            onClick={HandleGoogle}
            style={{
              marginTop: "20px",
              width: "80%",
              border: "none",
              borderRadius: "0.5rem",
            }}
          />
          <button type="submit" onClick={HandleSubmit} className="navButton">
            Sign In{" "}
          </button>
          <input className="checkbox" type="checkbox" />
          <p className="p">Remeber me</p>
          <br />
          <p>
            New to Netflix? <Link to="/Netflix/Signup">Sign up</Link>
          </p>
        </div>
      </LoginWrapper>
    </>
  );
}

export default SigninCompo;
