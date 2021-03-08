import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState({
    'lbs': null,
    'grams': null,
    'kilograms': null,
    'ounces': null
  });
  const [isVisible, setIsVisible] = useState(false);
  const handleChange = (e) => {
    let lbs = e.target.value;
    let grams = lbs / 0.0022046;
    let kiloGrams = lbs / 2.2046;
    let ounces = lbs * 16;

    setWeight({
      'lbs': lbs,
      'grams': grams,
      'kilograms': kiloGrams,
      'ounces': ounces
    })
    if (!isVisible) {
      setIsVisible(true)
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="display-4 text-center mb-3">
            Weight Converter
          </h1>
          <div className="form-group">
            <input value={weight['lbs']} onChange={handleChange} type="number" className="form-control form-control-lg" id="lbsInput" placeholder="Enter pounds.." required />
          </div>
          {
            !isVisible
              ? <></>
              : (
                <div id="output">
                  <div className="card bg-primary mb-2">
                    <div className="card-block">
                      <h4>Grams: {weight['grams']}</h4>
                    </div>
                  </div>

                  <div className="card bg-success mb-2">
                    <div className="card-block">
                      <h4>Kilograms: {weight['kilograms']}</h4>
                    </div>
                  </div>

                  <div className="card bg-danger mb-2">
                    <div className="card-block">
                      <h4>Ounces: {weight['ounces']}</h4>
                    </div>
                  </div>
                </div>
              )}
        </div>
      </div>
    </div>
  );
}

export default App;
