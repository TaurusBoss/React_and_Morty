import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';

export function OurCard ({content, data, page}) {
    const [isFlipped, setState] = useState(false)
  
    function handleClick(e) {
        !isFlipped ? setState(true) : setState(false);
    }

    useEffect(() => {
        setState(false);
    }, [content, page])
    
    function TextContent({input}){
        console.log(input.name);
            if(content == "characters"){
        if(isFlipped){
            return <div className='cardtext'>
                <p>Status: {input.status}</p>
                <p>Gender: {input.gender}</p>
                <p>Location: {input.location.name}</p>
            </div>
        } else if(isFlipped == false){
            return <div className='cardtext-flipped'>
                <p>Name: {input.name}</p>
                <p>Species: {input.species}</p>
            </div>
        } else {
            console.log("itt bizony hiba történt");
        }
    } else {
        if(isFlipped){
            return <div className='cardtext'>
                <p>Dimension: {input.dimension}</p>
                <p>Type: {input.type}</p>
                <p>Created: {input.created}</p>
            </div>
        } else if(isFlipped == false){
            return <div className='cardtext-flipped'>
                <p>Name: {input.name}</p>
                <p>Type: {input.type}</p>
            </div>
        } else {
            console.log("itt bizony hiba történt");
        }
    }
}

    
      return (
        <div className='card'>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className='card card-container' onClick={e => {handleClick(e)}}>
            <img className="card-image" src={data.image != undefined ? data.image : "https://ichef.bbci.co.uk/news/976/cpsprodpb/40D9/production/_128410661_rick-and-morty-s4-image.jpg"} alt="photo of person" />
            <TextContent input={data}/>
        </div>
        <div className='card card-container card-back' onClick={handleClick}>
        <img className="card-image-back" src={data.image != undefined ? data.image : "https://ichef.bbci.co.uk/news/976/cpsprodpb/40D9/production/_128410661_rick-and-morty-s4-image.jpg"} alt="photo of person" />
        {/* <img className="card-image" src="MeeseeksHQ.webp" alt="photo of person" /> */}
        <TextContent input={data}/>
        </div>
        </ReactCardFlip>
        </div>
      )
    }
  



