import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SigninCompo from "./SigninCompo";
import { UseAuth } from "../Context/AuthContext";

const UpperSection = styled.div`
  width: 100%;
  height: 110vh;
  background-image: url("images/netflixHome.jpg");
  background-repeat: no-repeat;
  object-fit: contain;
  background-size: cover;
  position: relative;
  border-bottom: 10px solid grey;

  @media (max-width: 400px) {

    body{
      width: 100%;
    }
    .homenav {
      margin-top: 10px;
    }
    .HomeBrandName {
      width: 70px;
      margin-left: 10px;
    }
    .navButton {
      padding: 5px 20px;

      font-weight: 500;
    margin-right: 5px;
      color: #fff;
    }
    .titlehome{
    font-size: 3.1rem;
    text-align: center;
}
.inputsection>input{
    padding: 8px 10px;
    border: none;
    width: 50%;
    
    font-weight: 500;
    font-size: 15px;
}
.titlesection>h2,.titlesection>h3{
display: none;
}

.inputbtn{
padding: 12px 40px;
background-color: rgb(211, 11, 11);
color: #fff;

font-size: 09px;
border: none;
cursor: pointer;
}
  }
`;

function Home1Compo() {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const { SignIn } = UseAuth();
  const handleShow = () => {
    setShow(true);
  };

  const HandleSignIn = async (e) => {
    e.preventDefault();
    try {
      await SignIn(email);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <UpperSection id="uppersection">
        <nav className="homenav">
          <img
            className="HomeBrandName"
            src="images/netflix.png"
            alt="netflix logo"
          />

          <Link onClick={handleShow} to="/Netflix/signin">
            <button className="navButton">Sign In </button>
          </Link>
        </nav>

        <div className="titlesection">
          <h1 className="titlehome">
            Unlimited movies, TV <br /> shows and more.
          </h1>
          <h2 style={{ lineHeight: "1.8" }}>Watch anywhere. Cancel anytime.</h2>

          <h3 style={{ lineHeight: "2", marginTop: "20px", fontSize: "25px" }}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <div className="inputsection">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email address"
            />
            <Link to="/Netflix/signin">
              <button type="submit" onClick={HandleSignIn} className="inputbtn">
                Get started
              </button>
            </Link>
          </div>
        </div>

        {show ? <SigninCompo /> : null}
      </UpperSection>
    </>
  );
}

export default Home1Compo;
