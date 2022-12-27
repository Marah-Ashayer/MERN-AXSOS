import React from 'react'
import axios from 'axios';
import {Link} from '@reach/router';
    
const ProductList = (props) => {
    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {removeFromDom(productId)})
            .catch(err => console.error(err));
    }
    
//     return (
//         <div>
//             {props.product.map((product, idx) => {
//                 return <p key={idx}>
//                     <Link to={"/" + person._id}>{person.lastName}</Link>
//                     |
//                     <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
//                 </p>
//             })}
//         </div>
//     )
// }
    return (
        // <div>
        //     {props.product.map( (product, i) =>
        //         <p key={i}>Title : {product.title}, Price : {product.price} , Description : {product.description}</p>
        //     )}
        // </div>
        <div>
            <p>All Products</p>
            {props.product.map( (product, i) =>
            <p key={i}><Link to={"/product/"+product._id}>{product.title}</Link>
            <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button></p>
            )}
        </div>
    )
}
    
export default ProductList;

