import React from 'react'
import axios from 'axios';
import { useEffect ,useState } from 'react';


const Planets = (props) => {
    const [responseData, setResponseData] = useState("");
    useEffect(() => {
    axios.get('https://swapi.dev/api/planets/'+props.id)
        .then(response => { setResponseData(response.data) })
        .catch( err => console.log(err));
}, [props.id]);

    return (
        <div>
            <h3>{responseData.name}</h3>
            <p>climate : {responseData.climate}</p>
            <p>terrain : {responseData.terrain}</p>
            <p>surface_water : {responseData.surface_water}</p>
            <p>population : {responseData.population}</p>
            
        </div>
)
}
export default Planets;
