import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from '@reach/router';
import Form from '../components/Form';
import { navigate } from '@reach/router';
const Create = (props) => {
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]); 

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author/new', author)
            .then(res=>{setAuthors([...authors, res.data] , navigate('/'))
            })
            // navigate('/')
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
      <Form  onSubmitProp={createAuthor} initialName="" errors={errors}/>
     
    </div>
  )
}

export default Create;
