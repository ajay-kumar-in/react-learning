import { NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from './ProductHeader.module.css';
import { login, logout } from './../../store/auth';

const ProductHeader = () => {
    let dispatch = useDispatch();

    // let token = useSelector(state=> {
    //     return state.auth?.userAuthData?.token;
    // })
    
    const logoutHandler = ()=> {
        localStorage.clear();
        dispatch(logout());
    }

    useEffect(()=> {
        let loginData = {};
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        const tokenLocal = JSON.parse(localStorage.getItem('token'));
        const tokenExpirationDuration = JSON.parse(localStorage.getItem('expirationDuration'));
        if(loggedInUser && tokenLocal && tokenExpirationDuration) {
            loginData = {token: tokenLocal, user: loggedInUser, tokenExpirationMs: tokenExpirationDuration}
        }

        dispatch(login(loginData));
    }, [dispatch])

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
                <NavLink to="login" className={({ isActive }) => isActive ? `nav-link ${styles.active}` : 'nav-link'} end>Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="signup" className={({ isActive }) => isActive ? `nav-link ${styles.active}` : 'nav-link'} end>Signup</NavLink>
            </li>
            <li className="nav-item">
                <button className={`nav-link bg-primary border-0 text-dark ${styles.logoutBtn}`} onClick={logoutHandler}>Logout</button>
            </li>
        </ul>
    </React.Fragment>

}

export default ProductHeader;