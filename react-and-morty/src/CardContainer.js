import Card from "./Card";
import { useCharacters, useLocations } from "./api/useData";
import { useEffect, useState } from "react";

export default function CardContainer ({content, setPage, page}){

    
    const characters = useCharacters(page);
    const locations = useLocations(page);
    console.log("page loaded is: " + page);
    
    // const [characters, setCharacters] = useState(useCharacters(1));
    // const [locations, setLocations] = useState(useLocations(1));
    useEffect(() => {
        setPage(1);
    }, [content])
    

    function fillCards(){
        try {
            if(content == "characters"){
                return characters.results.map(x => {
                    return <Card content={content} data={x} page={page}/>
                })
            } else if (content == "locations"){
                return locations.results.map(x => {
                    return <Card content={content} data={x} page={page}/>
                })
            } else {
                console.log("Card container is empty");
            }
        } catch (error) {
            console.log("hibára futott!");
            setPage(1)
        }
}

return fillCards(content);
}