import Switch from "react-switch";
import { useState } from "react";


export default function DisplayButton({checked, handleChange}) {

return (
    <label className="switch" htmlFor="normal-switch">
    <Switch
    checked={checked}      
      id="normal-switch"
      onChange={() => handleChange()}
      offColor="#12b0c9"
      onColor="#12b0c9"
      checkedIcon={false}
      uncheckedIcon={false}
      
    />
  </label>
)
}

// offColor="#0FC1FF"
// onColor="#0FC1FF"