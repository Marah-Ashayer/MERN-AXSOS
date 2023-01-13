import React from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
export default props => {
    
    const {playerName, playerId, successCallback } = props;
    
    const deletePlayer = e => {
        if(window.confirm(`Are you sure you want to delete ${playerName}?`)){
                axios.delete('http://localhost:8000/api/player/delete/' + playerId)
                .then(res=>{successCallback();})}
    }
    return (
        <Button  variant="outlined" color="error" size="small"  onClick={deletePlayer}>Delete</Button>
    )
}
