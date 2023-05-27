import React from 'react';
import ProductHeader from './ProductHeader';
import { Outlet } from 'react-router-dom';
const ProductLayout = ()=> {
    return <React.Fragment>
        <ProductHeader></ProductHeader>
        <Outlet></Outlet>
    </React.Fragment>
}

export default ProductLayout;