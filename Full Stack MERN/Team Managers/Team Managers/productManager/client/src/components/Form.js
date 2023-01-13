import React, { useState } from 'react'
// import axios from 'axios';
import { navigate } from '@reach/router';
import { Button } from '@material-ui/core';
import TextField from '@mui/material/TextField';

export default (props) => {

    const { initialName,initialPosition, onSubmitProp,errors } = props;
    const [name, setName] = useState(initialName); 
    const [position, setPosition] = useState(initialPosition);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name,position});
    }
    const cancel = e => {
        navigate('/')}
    return (
        <>
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                {/* <label>Name :</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/> */}
                <TextField label="Name" variant="standard" id="outlined-size-small" defaultValue="Name" size="small" onChange={(e)=>setName(e.target.value)} value={name} />
            </p>
            <p>
                {/* <label>Position :</label><br/>
                <input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/> */}
                <TextField label="Position" variant="standard" id="outlined-size-small" defaultValue="Position" size="small" onChange={(e)=>setPosition(e.target.value)} value={position} />

            </p>
            <input type="submit"/>
            <p><Button  variant="contained" color="success" onClick={cancel}>List</Button></p>
        </form>
        
        </>
    )
}

