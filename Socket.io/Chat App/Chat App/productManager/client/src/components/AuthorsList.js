import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';
    
const AuthorList = (props) => {

    const [author, setAuthor] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/[author]')
            .then(res => setAuthor(res.data));
    }, [])
    
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id != authorId))
    }
    
    return (
        <div>
            <p>Favourite Authors</p>
            <Link to={"/new"}>Add a New Author</Link>
            {props.author.map((author, i) =>{
                return(
                    <p key={i}>
                        <Link to={"/author/"+author._id}>{author.name}</Link>
                        <Link to={"/edit/"+ author._id } style={{marginLeft:"15px",marginRight:"15px"}}>Edit</Link> 
                        <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                    </p>
                )
            })}
        </div>
    );
}
    
export default AuthorList;
