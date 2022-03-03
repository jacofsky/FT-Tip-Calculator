import React from "react";
import OpcionesPago from "./components/OpcionesPago";
import Total from "./components/Total";


const CalculatorApp = () => {
  return (
    <div className="calculato-app">
      <OpcionesPago />
      <Total />
    </div>
  );
};

export default CalculatorApp;
