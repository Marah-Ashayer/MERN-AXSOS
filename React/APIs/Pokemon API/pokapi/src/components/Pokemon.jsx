import React, { useState, useEffect } from "react";

const Pokemon = (props) => {
    const [pok, setPok] = useState([]);
    const [clicker, setClicker] = useState(false)
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => setPok(response.results))
            .catch(err => console.log("Thers an errotsin", err))
    }, []);
    const fetchPok = () => {
        setClicker(!clicker)
    }
    return (
        <div>
            <button onClick={fetchPok}>Fetch Pokemon</button>
            {clicker ?
                pok.map((pokemon, index) => {
                    return (<div key={index}>{pokemon.name}</div>)
                }) : ""}

        </div>

    );

}















export default Pokemon;