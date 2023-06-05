// import styles from './ListProduct.module.css';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListProduct = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        async function getProducts() {
            const tokenLocal = localStorage.getItem('token');
            let token = tokenLocal.slice(1, tokenLocal.length - 1);
            const response = await fetch('http://localhost:3000/api/products?page=1&size=50', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });

            if (!response.ok) {
                alert('Failed to load products!')
            }

            const resData = await response.json();
            setProducts(resData.products)
            console.log('resData22222222222', resData);

        }
        getProducts();

    }, [])

    return <div className='card bg-info mt-1'>
        <div className='card-header'>
            <button><Link to="add">Add New Product</Link></button>
        </div>
        <div className='card-body'>
            <table className='table table-responsive'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Original Price</th>
                        <th>Discount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map(product => {
                        return <tr key={product.id}>
                            <td>{product && product.id}</td>
                            <td>{product && product.name}</td>
                            <td>{product && product.description}</td>
                            <td>{product && product.category}</td>
                            <td>{product && product.originalPrice}</td>
                            <td>{product && product.discount}</td>
                            <td>{product && product.status ? 'Available' : 'Not Available'}</td>
                            <td>
                                <button><Link to={`${product.id}`}>Edit</Link></button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>

            </table>
        </div>
    </div>
}

export default ListProduct;

// async function loadProducts() {
//     const tokenLocal = localStorage.getItem('token');
//     let token = tokenLocal.slice(1, tokenLocal.length - 1)
//     const response = await fetch('http://localhost:3000/api/products?page=1&size=5', {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json',
//             'Authorization': 'Bearer ' + token
//         }
//     });

//     if (!response.ok) {
//         alert('Failed to load products!')
//         throw json(
//             { message: 'Could not fetch products.' },
//             {
//                 status: 500,
//             }
//         );
//     } else {
//         const resData = await response.json();
//         console.log('resData', resData);
//         return resData;
//     }
// }

// export function loader() {
//     return defer({
//         products: loadProducts()
//     })
// }