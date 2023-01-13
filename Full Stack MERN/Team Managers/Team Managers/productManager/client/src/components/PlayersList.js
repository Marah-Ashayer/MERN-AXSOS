import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';

const PlayersList = (props) => {
    const [player, setPlayer] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/[player]')
            .then(res => setPlayer(res.data));
    }, [])
    
    const removeFromDom = playerId => {
        setPlayer(player.filter(player => player._id != playerId))
    }


    const tableStyle ={
        textAligncenter :'center',
        marginLeft:'25%',
        marginTop : '5%',
        fontFamily:'cursive',
    }
    return (
        <div style={tableStyle}>
            <table border="2px" width="700px" height="200px">
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Actions</th>
                </tr>
            {props.player.map((player, i) =>{
                return(
                    <tr key={i}>
                        <td><Link to={"/player/"+player._id}>{player.name}</Link></td>
                        <td>{player.position}</td>
                        <td><Link to={"/edit/"+ player._id } style={{marginLeft:"15px",marginRight:"15px"}}>Edit</Link> 
                        <DeleteButton playerName={player.name} playerId={player._id} successCallback={()=>removeFromDom(player._id)}/></td>
                    </tr>
                )
            })}
            </table>
        </div>
    );
}
    
export default PlayersList;






