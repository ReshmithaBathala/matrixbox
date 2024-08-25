import React from "react";
import Matrix from "./components/Matrix/Matrix";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="heading">Matrix Color Change</h1>
      <div className="matrix-main-container">
        <Matrix />
      </div>
    </div>
  );
}

export default App;
