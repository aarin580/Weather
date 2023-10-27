import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">About Weather App</h2>
          <p className="card-text">
            Welcome to the Weather App! This application provides you with current weather
            information for different locations around the world.
          </p>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Features:</h5>
          <ul className="list-group">
            <li className="list-group-item">Get real-time weather updates</li>
            <li className="list-group-item">Search for weather information by location</li>
            <li className="list-group-item">View detailed weather forecasts</li>
          </ul>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <p className="card-text">
            This app uses data from a reliable weather API to ensure accurate and up-to-date
            information. Enjoy exploring the weather conditions in your favorite places!
          </p>
        </div>
      </div>
      <div className="mt-3">
        <video width="1000" height="500" controls>
          <source src="vid.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default About;
