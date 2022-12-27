import React, { useState } from 'react'
// import axios from 'axios';
import { navigate } from '@reach/router';
import { Button } from '@material-ui/core';
export default (props) => {

    const { initialName, onSubmitProp,errors } = props;
    const [name, setName] = useState(initialName); 
    
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
    }
    const cancel = e => {
        navigate('/')}
    return (
        <>
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Name :</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <input type="submit"/>
        </form>
        <Button  variant="contained" size="medium" onClick={cancel}>Cancel</Button>
        </>
    )
}

