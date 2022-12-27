import React from 'react'
import axios from 'axios';
import {Link} from '@reach/router';
    
const ProductList = (props) => {
    return (
        // <div>
        //     {props.product.map( (product, i) =>
        //         <p key={i}>Title : {product.title}, Price : {product.price} , Description : {product.description}</p>
        //     )}
        // </div>
        <div>
            <p>Al Products</p>
            {props.product.map( (product, i) =>
            <p><Link to={"/product/"+product._id}>{product.title}</Link></p>
            )}
        </div>
    )
}
    
export default ProductList;

