import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
import { ReactDOM } from 'react';

test("information shows up from character", () => {
    const content = "characters";
    const dataJSON = {"id":19,"name":"Antenna Rick","status":"unknown","species":"Human","type":"Human with antennae","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"unknown","url":""},"image":"https://rickandmortyapi.com/api/character/avatar/19.jpeg","episode":["https://rickandmortyapi.com/api/episode/10"],"url":"https://rickandmortyapi.com/api/character/19","created":"2017-11-04T22:28:13.756Z"};
    const data = JSON.parse(dataJSON)
    const page = 1;

    const { getByText } = ReactDOM.render(<Card content={content} data={data} page={page}/>);
    const characterName = data.name;
    const characterSpecies = data.species;
    const characterStatus = data.status;
    const characterGender = data.gender;
    const characterLocation = data.location.name;

    const locationName = data.name;
    const locationType = data.type;
    const locationDimension = data.dimension;
    const locationCreated = data.created;

    if(content == "characters"){
        const charName = screen.getByText(/Antenna Rick/i);
        //const charSpec = screen.getByText(/)
        //expect(charName).toHaveTextContent(characterName);
        expect(charName.toLowerCase()).toEqual(characterName.toLowerCase);
        //expect().toHaveTextContent(characterSpecies)
    } else if (content == "locations"){
        
    }
    //click-re a kártya tartalmazni fog egy "Status", egy "Gender" és egy "Location" szöveges elemet

})