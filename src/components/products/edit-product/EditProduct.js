import { useState, useEffect} from "react";
import { useParams,  Link, useNavigate } from "react-router-dom";
// import { Link, useNavigate } from 'react-router-dom';

import styles from './EditProduct.module.css';
const initialState = {
    id: '',
    name: '',
    description: '',
    originalPrice: '',
    discount: '',
    category: '',
    imagePath: '',
    status: ''
}

const EditProduct = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setimageFile] = useState(null);

    const [editForm, setEditForm] = useState(initialState)

    let firstEffectRun = true;

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
            const editFormData = resData.product;
            setEditForm(editFormData);
            setImagePreview(editFormData.imagePath)
            console.log('single product', resData);
        }

        if(firstEffectRun) {
            firstEffectRun = false;
            return;
        }
        getProducts();

    }, [])


    const onInputChangeHandler = (event)=> {
        setEditForm({ ...editForm, [event.target.id]: event.target.value })
    }

    function onImagePicked(event1) {
        const target = event1.target;
        let file = (target.files)[0];
        setimageFile(file);
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    }

    const updateProductHandler = async (event) => {
        event.preventDefault();
        const tokenLocal = localStorage.getItem('token');
        let token = tokenLocal.slice(1, tokenLocal.length - 1);

        const formData = new FormData();

        for(let productProp in editForm) {
            formData.append(`${productProp}`, editForm[productProp]);
        }
        formData.append('imagePath', imageFile);
        // formData.forEach(v=> {
        //     console.log('vvvvvvvvvvvvvvvvv', v);
        // })

        try {
            const res = await fetch('http://localhost:3000/api/product/'+ params.id, {
                method: 'PUT',
                headers: { 
                    'Authorization': 'Bearer ' + token
                },
                body: formData
            })
            const addNewProductRes = await res.json();

            if (!res.ok) {
                throw new Error(addNewProductRes.message);
            }
            navigate('/products');
        } catch (err) {
            console.log('err.message', err);
            alert(err);
        }
    }

    return <div className="container-fluid py-3">
        <div className="card">
            <h5 className="card-header bg-info">Add new product</h5>
            <div className="card-body">
                <form onSubmit={updateProductHandler}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label htmlFor="name" className="mb-1">Name:</label>
                                <input type="text" value={editForm && editForm.name} onChange={onInputChangeHandler} id="name" className="form-control" placeholder="Enter name" />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="description" className="mb-1">Description:</label>
                                <input type="text" value={editForm && editForm.description} onChange={onInputChangeHandler} id="description" className="form-control" placeholder="Enter description" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label htmlFor="originalPrice" className="mb-1">Original Price:</label>
                                <input type="text" value={editForm && editForm.originalPrice} onChange={onInputChangeHandler} id="originalPrice" className="form-control" placeholder="Enter original price" />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="discount" className="mb-1">Discount:</label>
                                <input type="text" value={editForm && editForm.discount} onChange={onInputChangeHandler} id="discount" className="form-control" placeholder="Enter discount" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label htmlFor="category" className="mb-1">Category:</label>
                                <input type="text" value={editForm && editForm.category} onChange={onInputChangeHandler} id="category" className="form-control" placeholder="Enter category" />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="imagePath" className="mb-1">Select Image</label>
                                <input type="file" onChange={onImagePicked} id="imagePath" className="form-control" />
                                <img src={imagePreview} value={editForm && editForm.imagePath} className={`${styles['imgStyle']}`} alt="selected img" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label htmlFor="status" className="mb-1">Status:</label>
                                <input type="text" value={editForm && editForm.status} onChange={onInputChangeHandler} id="status" className="form-control" placeholder="Enter status" />
                            </div>
                        </div>

                        <div className="mt-3">
                            <button type='submit' className={`btn btn-info ${styles['add_product']}`}>update Product</button>
                            <button className='btn btn-secondary'><Link className='text-light' to="/products">Back</Link></button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    </div >
}

export default EditProduct;