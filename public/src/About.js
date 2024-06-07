import React from "react";
import image from "./about.png";
import icon1 from "./Instagram.png";
import icon2 from "./Linkdein.png";
import icon3 from "./Twitter.png";
import icon4 from "./Youtube.png";
import icon5 from "./game.png";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row about">
          <div className="col-5">
            <img src={image} />
          </div>
          <div className="col-7" id="app">
            <h1>About the App</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="play">
              <a href="" className="cta">
              <img src={icon5}/>
                <span>Get the App from PlayStore</span>
              
              </a>
            </div>
            <div className="social-icons">
              <img src={icon1} />
              <img src={icon2} />
              <img src={icon3} />
              <img src={icon4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
