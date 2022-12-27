import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import { navigate } from '@reach/router';
import {Link} from '@reach/router';
    
const Update = (props) => {

    // const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    const [authors, setAuthors] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/author/show/' + props.id)
            .then(res => { setAuthor(res.data); setLoaded(true); })
    }, [])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/edit/' + props.id, author)
            .then(res => {setAuthors([...authors, res.data] ,navigate('/'))})
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
            <Link to="/">Home Page</Link>
            {loaded && (<Form onSubmitProp={updateAuthor}  initialName={author.name} errors={errors} />)}
            
        </div>
    )
}
    
export default Update;


