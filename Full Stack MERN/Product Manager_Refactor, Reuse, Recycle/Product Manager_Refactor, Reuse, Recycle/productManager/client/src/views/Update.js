import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import { navigate } from '@reach/router';
// import DeleteButton from '../components/DeleteButton';
    
const Update = (props) => {

    // const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + props.id)
            .then(res => { setProduct(res.data); setLoaded(true); })
    }, [])

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/' + props.id, product)
            .then(navigate('/product'))
            .catch(err =>console.log(err));
    }
    
    return (
        <div>
            {loaded && (<ProductForm onSubmitProp={updateProduct}  initialTitle={product.title}  initialPrice={product.price}  initialDescription={product.description} />)}
        </div>
    )
}
    
export default Update;
