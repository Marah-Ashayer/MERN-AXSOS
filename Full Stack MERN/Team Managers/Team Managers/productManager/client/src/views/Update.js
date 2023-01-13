import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import { navigate } from '@reach/router';
    
const Update = (props) => {

    // const { id } = props;
    const [player, setPlayer] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    const [players, setPlayers] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/player/show/' + props.id)
            .then(res => { setPlayer(res.data); setLoaded(true); })
    }, [])

    const updatePlayer = player => {
        axios.put('http://localhost:8000/api/player/edit/' + props.id, player)
            .then(res => {setPlayers([...players, res.data] ,navigate('/'))})
            .catch(err =>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })  
    }

    return (
        <div>
            {loaded && (<Form onSubmitProp={updatePlayer}  initialName={player.name} initialPosition={player.position} errors={errors} />)}
            
        </div>
    )
}
    
export default Update;


