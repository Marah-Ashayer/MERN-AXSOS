import React, { useEffect, useState } from 'react';
import axios from 'axios';


const PokAxios = (props) => {
    const [responseData, setResponseData] = useState(null);
    const [loaded , setLoaded]=useState(false);
    const[clicked,setClicked]=useState(false);

    const handleClicked=()=>{
        setClicked(true);
    }
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response=>{setResponseData(response.data.results);setLoaded(true)})
    }, []); 
    return(
        <div>
            <button onClick={handleClicked}>Fetch Pokemons</button>
            {clicked?
            loaded && responseData.map((pokemon,index)=>{
                return (<div key={index}>{pokemon.name}</div>)}
            ): ""}
        </div>
    );
}

export default PokAxios;