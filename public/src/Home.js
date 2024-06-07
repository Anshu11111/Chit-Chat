import React from "react";
import image from './home.png';
import image1 from './chat.png';
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
    
      <div className="container-fluid">
        <div className="row home">
          <div className="col-7">
              <h1>Let's Connect</h1>
              <h1>with Your Customer</h1>
              <h1>in Real Time</h1>
              <p>lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              <Link to="/login" className='nav-link'><button>Start Chatting here &rarr;</button></Link> 
             
          </div>
          <div className="col-5 image">
              <img src={image} className="first"/>
              <img src={image1} className="second"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
