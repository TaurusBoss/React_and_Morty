import React from "react";
import "./App.css";

import { useState } from "react";
import DisplayInfo from "./DisplayInfo";

function App() {
  
  const [display, setDisplay] = useState("landingpage")

  

  // console.log("Characters data: ");
  // console.log(characters);
  // console.log("Locations data: ");
  // console.log(locations);

  return (
      <DisplayInfo display={display} setDisplay={setDisplay}/>
  )
  
}

export default App;
