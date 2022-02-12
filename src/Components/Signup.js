import { Alert } from "react-bootstrap";
import React, { useState } from "react";
import { UseAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LoginWrapper } from "./SigninCompo";
function SignupCompo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, setError, SignUp } = UseAuth();
 const navigate=useNavigate()
  const HandleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await SignUp(email, password);
      navigate("/Netflix/signin")
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <LoginWrapper>
        <div className="logincard">
          <h1>Sign Up</h1>
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
          <button type="submit" onClick={HandleSignUp} className="navButton">
            Sign Up
          </button>
        </div>
      </LoginWrapper>
    </>
  );
}

export default SignupCompo;
