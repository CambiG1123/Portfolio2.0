import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About/About";
import Port from "./components/Port/Port";
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Port />
    </>
  );
}

export default App;
