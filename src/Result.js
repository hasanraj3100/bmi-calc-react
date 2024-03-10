import React from "react";

function Result({ bmi, bmiResult }) {
  return (
    <div className="result">
      <p>Your BMI is</p>
      <div id="result">{!bmi ? "00.00" : bmi}</div>
      {bmiResult ? (
        <p className="comment">
          You are <span id="comment">{bmiResult}</span>
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Result;
