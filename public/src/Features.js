import React from "react";
import image1 from "./smartphone.png";
import image2 from "./connect.png";
import image3 from "./headset.png";
import image4 from "./svg.png";
import './Features.css';
const Features = () => {
  return (
    <div>
      <div className="container-fluid" id="big">
        <div className="row head">
          <h1>Many Features of Chit-Chat</h1>
          
        </div>
        <div className="row row1">
          <div className="col-6 c" >
            <div>
              {" "}
              <h2>Mobile Friendly</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>

            <div>
              {" "}
              <img src={image1} className="img"/>
            </div>
          </div>
          <div className="col-6 c ">
            <div>
              {" "}
              <img src={image2}  className="img"/>
            </div>
            <div className="right">
              {" "}
              <h2>Fast Connection</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6 c">
            <div>
              {" "}
              <h2>Login/Sign Up</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>

            <div>
              {" "}
              <img src={image3}  className="img" />
            </div>
          </div>
          <div className="col-6 c">
            <div>
              <img src={image4}  className="img"/>
            </div>
            <div className="right">
              <h2>Emoji Support</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
