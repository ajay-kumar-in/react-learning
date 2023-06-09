import { NavLink } from 'react-router-dom';
import React from 'react';

import styles from './ProductHeader.module.css';
const ProductHeader = () => {

    const signupHandler = () => {

    }

    const loginHandler = () => {

    }

    return <React.Fragment>
        <ul className={`${styles['header_nav']} nav bg-primary`}>
            <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => isActive ? `nav-link ${styles.active}` : 'nav-link'} end >Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/products" className={({ isActive }) => isActive ? `nav-link ${styles.active}` : 'nav-link'} end >Products</NavLink>
            </li>
            {/* <li className="nav-item">
                <NavLink to="/products/add" className={({ isActive }) => isActive ? `nav-link ${styles.active}` : 'nav-link'} end >Add Product</NavLink>
            </li> */}
            {/* <li className="nav-item">
                <NavLink to="products" className={({ isActive }) => isActive ? `nav-link ${styles.active}` : 'nav-link'} end >List Product</NavLink>
            </li> */}
            <li className="nav-item">
                <NavLink to="democomp" className={({ isActive }) => isActive ? `nav-link ${styles.active}` : 'nav-link'} end tabIndex="-1">Demo Comp</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="counter" className={({ isActive }) => isActive ? `nav-link ${styles.active}` : 'nav-link'} end>Counter(Redux)</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="login" className={({ isActive }) => isActive ? `nav-link ${styles.active}` : 'nav-link'} end onClick={loginHandler}>Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="signup" className={({ isActive }) => isActive ? `nav-link ${styles.active}` : 'nav-link'} end onClick={signupHandler}>Signup</NavLink>
            </li>
        </ul>
    </React.Fragment>

}

export default ProductHeader;