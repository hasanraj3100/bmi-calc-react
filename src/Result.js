import React from "react";

function Result({ bmi, bmiResult }) {
  return (
    <div className="result">
      <p>Your BMI is</p>
      <div id="result">{!bmi ? "00.00" : bmi}</div>
      <Comment bmiResult={bmiResult}></Comment>
    </div>
  );
}

function Comment({ bmiResult }) {
  return (
    <p className="comment">
      {/* Your are <span id="comment">{bmiResult}</span> */}
      heelo
    </p>
  );
}

export default Result;
