import React, { useState } from "react";

function CalculatorForm({ calculateBMI }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI(Number(height), Number(weight));
  };

  return (
    <div className="content">
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="height">Age</label>
          <input
            type="text"
            className="text-input"
            id="age"
            autocomplete="off"
            required
          />
        </div>

        <div className="gender">
          <label className="container">
            <input type="radio" name="radio" id="m" />
            <p className="text">Male</p>
            <span className="checkmark"></span>
          </label>

          <label className="container">
            <input type="radio" name="radio" id="f" />
            <p className="text">Female</p>
            <span className="checkmark"></span>
          </label>
        </div>

        <div className="containerHW">
          <div className="inputH">
            <label htmlFor="height">Height(inches)</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>

          <div className="inputW">
            <label htmlFor="weight">Weight(kg)</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
        </div>

        <button className="calculate" id="submit" type="submit">
          Calculate BMI
        </button>
      </form>
    </div>
  );
}

export default CalculatorForm;
