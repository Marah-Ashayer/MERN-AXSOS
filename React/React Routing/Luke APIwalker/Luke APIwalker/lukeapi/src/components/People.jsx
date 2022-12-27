import React,{useState,useEffect} from 'react'
import axios  from 'axios';

const People = (props) => {
    const [responseData, setResponseData] = useState(null);

    useEffect(()=>{
        axios.get('https://swapi.dev/api/people/'+props.id)
            .then(response=>{setResponseData(response.data)})
            .catch( err => console.log(err));
    }, [props.id]); 
    return(
        <div>
            <h3>{responseData.name}</h3>
            <p>height : {responseData.height}</p>
            <p>mass : {responseData.mass}</p>
            <p>hair_color : {responseData.hair_color}</p>
            <p>skin_color : {responseData.skin_color}</p>
        </div>
    )
}

export default People;
