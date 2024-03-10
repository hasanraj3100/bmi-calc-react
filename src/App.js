import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import CalculatorForm from "./CalculatorForm";
import Result from "./Result";

function App() {
  const [result, setResult] = useState(null);
  const [bmi, setBMI] = useState(null);

  const calculateBMI = (height, weight) => {
    if (!height || !weight) {
      alert("empty fields");
    }
    const bmi = ((weight / (height * height)) * 703).toFixed(2);
    setBMI(bmi);

    let bmiResult = "";

    if (bmi < 18.5) {
      bmiResult = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiResult = "Healthy";
    } else if (bmi >= 25 && bmi < 30) {
      bmiResult = "Overweight";
    } else if (bmi < 35) {
      bmiResult = "Obese";
    } else {
      bmiResult = "Extreme Obese";
    }

    setResult(bmiResult);
  };

  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <div class="container">
        <div class="box">
          <h1>BMI Calculator</h1>
          <CalculatorForm calculateBMI={calculateBMI} />
          <Result bmi={bmi} bmiResult={result}></Result>
        </div>
      </div>
    </div>
  );
}

export default App;
