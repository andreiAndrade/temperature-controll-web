import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import useInterval from './useInterval';

function App() {
  const [beerContainers, setBeerContainers] = useState([]);

  function listBeerContainers() {
    axios.get('http://localhost:8080/beer-container').then(result => {
      setBeerContainers(result.data);
    });
  }

  useInterval(() => {
    listBeerContainers();
  }, 5000);

  useEffect(() => {
    listBeerContainers();
  }, []);

  return (
    <div className="App">
      {
        beerContainers.map((beerContainer, index) => (
          <div key={index} className={`beer-card ${beerContainer.outsideCorrectRange ? 'background-danger' : 'background-ok'}`}>
            <div className="title">
              <h2>{beerContainer.beerStyle}</h2>
            </div>
            <div className="temperature">
              {beerContainer.temperature}
            </div>
            <div className="range">
              <p>Máx: {beerContainer.minTemperature}</p>
              <p>Min: {beerContainer.maxTemperature}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default App;
