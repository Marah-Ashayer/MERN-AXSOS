import React, { useEffect, useState } from 'react'
// import Form from '../components/Form';
import AuthorList from '../components/AuthorsList';
import axios from 'axios';
    
const Main = (props) => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/author')
            .then(res=>{ setAuthor(res.data); setLoaded(true); })
            .catch(err => console.error(err));
    },[author]);
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id != authorId));
    }
    // const createAuthor = author => {
    //     axios.post('http://localhost:8000/api/author/new', author)
    //         .then(res=>{
    //             setAuthor([...author, res.data]);
    //         })
    // }
    

    return (
        <div>
           {/* <Form  onSubmitProp={createAuthor} initialName=""/> */}
           {loaded && <AuthorList author={author} removeFromDom={removeFromDom}/>}
        </div>
    )
}
    
export default Main;


