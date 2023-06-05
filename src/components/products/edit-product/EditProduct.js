import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
    const params = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        async function getProducts() {
            const tokenLocal = localStorage.getItem('token');
            let token = tokenLocal.slice(1, tokenLocal.length - 1);
            const response = await fetch(`http://localhost:3000/api/product/${params.id}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });

            if (!response.ok) {
                alert('Failed to load product!')
            }

            const resData = await response.json();
            setProduct(resData);
            console.log('single product', resData);
        }
        getProducts();

    }, [params.id])

    console.log('ppppppppppppppp', params);
    return <div className="card">
        <div className="card-header">
            <h4>{product && product.product.name} Details</h4>
        </div>
        <div className="card-body">
            {product && <ul>
                <li>{product.product.id}</li>
                <li>{product.product.name}</li>
                <li>{product.product.description}</li>
                <li>{product.product.category}</li>
                <li>{product.product.originalPrice}</li>
                <li>{product.product.discount}</li>
                <li>{product.product.status ? 'Available' : 'Not Available'}</li>
            </ul>}
        </div>
    </div>
}

export default EditProduct;