// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import {Link} from '@reach/router';
// import { navigate } from '@reach/router';
    
// const Detail = (props) => {
//     const [product, setProduct] = useState({})
//     // const { id } = useParams();
    
//     useEffect(() => {
//         axios.get('http://localhost:8000/api/product/' + props.id)
//             .then(res => setProduct(res.data))
//             .catch(err => console.error(err));
//     }, []);

//     const deleteProduct = (productId) => {
//         axios.delete('http://localhost:8000/api/product/' + productId)
//             .then(navigate('/product'))
//             .catch(err => console.error(err));
//     }

    
//     return (
//         <div>
//             <p>Title: {product.title}</p>
//             <p>Price : {product.price}</p>
//             <p>Description : {product.description}</p>
        
//         <Link to={"/product/" + product._id + "/edit"}>Edit</Link>
//         <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
//         </div>
    
    
//     )
// }
    
// export default Detail;

