import { OurCard } from "./Flippy"

export default function Card({content, data, page}){    
    console.log("ez a data: " + JSON.stringify(data))
    return <OurCard content={content} data={data} page={page}/>

}