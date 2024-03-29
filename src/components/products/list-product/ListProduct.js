import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

// import styles from './ListProduct.module.css';
import baseUrlObj from './../../shared/baseUrl'

const ListProduct = () => {
    const [products, setProducts] = useState();

    let token = useSelector(state => {
        return state.auth?.userAuthData?.token;
    })

    async function getProducts() {
        // -----------------http methods using asios-------------
        const response = await axios.get('http://localhost:3000/api/product/all', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            params: {
                page:1,
                size:500,
            }
        })
        setProducts(response.data.products);

        //--------------http methods using fetch-------------
        // const response = await fetch(`${baseUrlObj.baseUrl}/api/product/all?page=1&size=500`, {
        //     method: 'GET',
        //     headers: {
        //         'Content-type': 'application/json',
        //         'Authorization': 'Bearer ' + token
        //     }
        // });

        // if (!response.ok) {
        //     console.log('Please login to load products!');
        //     return;
        // }

        // const resData = await response.json();
        // setProducts(resData.data.products)
    }

    useEffect(() => {
        getProducts().catch((err) => {
            console.log('get err', err.response?.data);
        });  // need to handle gracefull api call err

        return () => {
            console.log('cleanup bode here');
        }
    }, []);

    const deleteHandler = (product) => {
        const deleteProduct = async () => {
            const response = await fetch(`${baseUrlObj.baseUrl}/api/product/${product.id}`, {
                method: 'Delete',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });

            if (!response.ok) {
                console.log('Please login to delete products!');
                return;
            }

            let index = products.findIndex(prod => prod.id === product.id);
            products.splice(index, 1);
            setProducts([...products]);
        }

        deleteProduct().catch((err) => {
            console.log('del err', err.response?.data);
        });
    }

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
                                <button onClick={() => deleteHandler(product)} disabled={!token}>Delete</button>
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
//         console.log('Failed to load products!')
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