import React, { useState } from 'react'
import { navigate } from '@reach/router';

const Luke = (props) => {
    const [id,setId]=useState();
    const type =['People','Planets','Starships'];
    const [selected, setSelected] = useState(type[0]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(selected==='People'){   navigate('/People/'+id)} 
        else if (selected==='Planets'){  navigate('/Planets/'+id)}
        else {       navigate('/Starships/'+id)}}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Serch For : </label>
                <select value={selected} onChange={e => setSelected(e.target.value)}>
                {type.map( (selType, index) =><option key={index} value={selType}>{selType}</option>)}
                </select>
                <label>ID :</label><input type="number" onChange={e => setId(e.target.value)}/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Luke;