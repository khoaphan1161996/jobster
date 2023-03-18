import React from "react";
import main from "../assets/images/main.svg";
import { Logo } from "../components/";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job<span>tracking</span>app
          </h1>
          <p>
            Chambray migas VHS, fingerstache vexillologist pok pok copper mug
            succulents hell of hammock marfa +1 fit. Etsy knausgaard
            asymmetrical pop-up synth 90's gochujang cred helvetica cliche 3
            wolf moon cronut meditation keffiyeh. Migas hell of vinyl vice,
            polaroid tattooed direct trade man bun echo park occupy. Franzen
            bicycle rights palo santo adaptogen yuccie banjo.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
