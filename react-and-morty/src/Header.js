import { useState } from "react"
import DisplayButton from "./DisplayButton"
import Landingpage from "./Landingpage"

export default function Header({setDisplay, displayButton, setDisplayButton, display, setPage}){

    const [checked, setChecked] = useState(false);

    function handleChange(input){
        if(input == undefined){
            if (display == "characters") {
                input = "locations"
            } else {
                input = "characters";
            }
        } 
        if(input == "characters"){
            setChecked(false);
        } else {
            setChecked(true);
        }
        setDisplay(input);
        //initDisplay(input);
        setDisplayButton(displayButton);
}

    return <center><div>
        <Landingpage />
        <ContentButton innerT={"Characters"} setDisplay={setDisplay} handleChange={handleChange} setPage={setPage}/>
        {display !== "landingpage" ? <DisplayButton handleChange={handleChange} checked={checked}/> : <></>}
        <ContentButton innerT={"Locations"} setDisplay={setDisplay} handleChange={handleChange} setPage={setPage}/>
    </div></center>
}

function ContentButton({innerT, setDisplay, handleChange, setPage}){

function buttonClicked(input){
    setPage(1);
    handleChange(input.target.innerText.toLowerCase());
    //initDisplay(input.target.innerText.toLowerCase());
}
return <button onClick={e => {buttonClicked(e)}} className="landingButton">{innerT}</button>
}