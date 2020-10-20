import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Intro />
      <Form />
    </div>
  );
}

export default App;
