import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import react from "../assets/react.jpg";
import react1 from "../assets/react1.jpg";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am a react front-end developer.I create responsive secure websites
          for my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react} className="img" alt="true"  />
          </div>
          <div className="img-container">
            <div className="img-stack bottom">
              <img src={react1} className="img" alt="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
