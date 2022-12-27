import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';
    
const ProductList = (props) => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/[product]')
            .then(res => setProduct(res.data));
    }, [])
    
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId))
    }
    
    return (
        <div>
            <p>All Products</p>
            {props.product.map((product, i) =>{
                return(
                    <p key={i}>
                        <Link to={"/product/"+product._id}>{product.title}</Link>
                        <Link to={"/product/" + product._id + "/edit"} style={{marginLeft:"15px",marginRight:"15px"}}>Edit</Link> 
                        <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                    </p>
                )
            })}
        </div>
    );
}
    
export default ProductList;
