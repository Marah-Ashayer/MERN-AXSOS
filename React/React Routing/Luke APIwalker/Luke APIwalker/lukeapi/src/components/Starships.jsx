import React from 'react'
import axios from 'axios';
import { useEffect ,useState } from 'react';


const Starships = (props) => {
    const [responseData, setResponseData] = useState("");
    useEffect(() => {
    axios.get('https://swapi.dev/api/starships/'+props.id)
        .then(response => { setResponseData(response.data) })
        .catch( err => console.log(err));
}, [props.id]);

    return (
        <div>
            <h3>{responseData.name}</h3>
            <p>length : {responseData.length}</p>
            <p>starship_class : {responseData.starship_class}</p>
            <p>manufacturer : {responseData.manufacturer}</p>
            <p>passengers : {responseData.passengers}</p>

        </div>
)
}
export default Starships;