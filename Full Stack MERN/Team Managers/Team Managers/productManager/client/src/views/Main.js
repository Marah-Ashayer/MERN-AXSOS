import React, { useEffect, useState } from 'react'
import PlayersList from '../components/PlayersList';
import {Link} from '@reach/router';
import axios from 'axios';
    
const Main = (props) => {
    const [player, setPlayer] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/player')
            .then(res=>{ setPlayer(res.data); setLoaded(true); })
            .catch(err => console.error(err));
    },[player]);
    const removeFromDom = playerId => {
        setPlayer(player.filter(player => player._id != playerId));
    }
    // const createAuthor = author => {
    //     axios.post('http://localhost:8000/api/author/new', author)
    //         .then(res=>{
    //             setAuthor([...author, res.data]);
    //         })
    // }
    

    return (
        <div>

            {/* <Link to ={"/"}>Manage Players</Link>| <Link to={"/status"}>Manage Player Status</Link> */}
            {/* <p><Link to={"/"}>List</Link>|<Link to={"/new"}>Add Player</Link></p> */}
           {/* <Form  onSubmitProp={createAuthor} initialName=""/> */}
           {loaded && <PlayersList player={player} removeFromDom={removeFromDom}/>}
        </div>
    )
}
    
export default Main;


