import DisplayButton from "./DisplayButton"
import { useEffect, useState } from "react";
import Landingpage from "./Landingpage";
import Header from "./Header";
import CardContainer from "./CardContainer";

export default function DisplayInfo({display, setDisplay}){
    const [displayButton, setDisplayButton] = useState("characters");
    const [page, setPage] = useState(1)

    useEffect(() => {
        setPage(1);
    }, [display])

    console.log("ez a display: " + display + ", page: " + page);

    // function initDisplay(target){
    //         setDisplay(target);    
    // }


    function changePage(input){
        if(display == "characters"){
            if(input > 42 || input < 1){
                return
            } else {
                setPage(input)
            }
        } else if (display == "locations"){
            if(input > 7 || input < 1){
                return
            } else {
                setPage(input)
            }
        }
    }

    function Paginator({page}){
        return(<div className="paginator">
    <img id="prevbutton" className="pagebutton" src="portalgun-prev.png" onClick={() => changePage(page - 1)}/>
            <p className="pagetext">{display == "characters" ? `Page ${page} / 42` : `Page ${page} / 7`}</p>
            <img id="nextbutton" className="pagebutton" src="portalgun-next.png" onClick={() => changePage(page + 1)}/>
            </div>)
    }

    return (
        <div>
        <Header setDisplay={setDisplay} displayButton={displayButton} setDisplayButton={setDisplayButton} display={display} setPage={setPage}/>
        {display == "landingpage" ? <></> : <Paginator page={page}/>}
        <div className="container">
        <CardContainer content={display} page={page} setPage={setPage}/>
        </div>
        {display == "landingpage" ? <></> : <Paginator page={page}/>}
        </div>
    )
}

