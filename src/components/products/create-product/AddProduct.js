import { useState, useRef } from 'react';

import styles from './AddProduct.module.css';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const nameInputRef = useRef();
    const descriptionInputRef = useRef();
    const originalPriceInputRef = useRef();
    const discountInputRef = useRef();
    const categoryInputRef = useRef();
    const statusInputRef = useRef();

    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setimageFile] = useState(null);

    function onImagePicked(event1) {
        const target= event1.target;
        let file = (target.files)[0];
        setimageFile(file);
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    
      const addProductHandler = (event)=> {
        event.preventDefault();
        
        const productDetails = {
            name: nameInputRef.current.value,
            description: descriptionInputRef.current.value,
            originalPrice: originalPriceInputRef.current.value,
            discount: discountInputRef.current.value,
            category: categoryInputRef.current.value,
            imagePath: imageFile,
            status: statusInputRef.current.value
        }
        console.log('productDetails', productDetails);
      }

    return <div className="container-fluid py-3">
        <div className="card">
            <h5 className="card-header bg-info">Add new product</h5>
            <div className="card-body">
                <form onSubmit={addProductHandler}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label htmlFor="name" className="mb-1">Name:</label>
                                <input type="text" ref={nameInputRef} id="name" className="form-control" placeholder="Enter name" />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="description" className="mb-1">Description:</label>
                                <input type="text" ref={descriptionInputRef} id="description" className="form-control" placeholder="Enter description" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label htmlFor="originalPrice" className="mb-1">Original Price:</label>
                                <input type="text" ref={originalPriceInputRef} id="originalPrice" className="form-control" placeholder="Enter original price" />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="discount" className="mb-1">Discount:</label>
                                <input type="text" ref={discountInputRef} id="discount" className="form-control" placeholder="Enter discount" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label htmlFor="category" className="mb-1">Category:</label>
                                <input type="text" ref={categoryInputRef} id="category" className="form-control" placeholder="Enter category" />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="imagePath" className="mb-1">Select Image</label>
                                <input type="file" onChange={onImagePicked} id="imagePath" className="form-control" />
                                <img src={imagePreview} className={`${styles['imgStyle']}`} alt="selected img" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label htmlFor="status" className="mb-1">Status:</label>
                                <input type="text" ref={statusInputRef} id="status" className="form-control" placeholder="Enter status" />
                            </div>
                        </div>

                        <div className="mt-3">
                            <button type='submit' className={`btn btn-info ${styles['add_product']}`}>Add Product</button>
                            <button className='btn btn-secondary'><Link className='text-light' to="/products">Back</Link></button>
                        </div>
                    </div>
                </form>
            </div>

        </div >
    </div >
}

export default AddProduct;