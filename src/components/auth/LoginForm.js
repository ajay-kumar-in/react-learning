import { useRef } from 'react';
import { Form, useNavigation, redirect } from 'react-router-dom';

import styles from './LoginForm.module.css'

const LoginForm = () => {
    let emailChangeRef = useRef();
    let passwordChangeRef = useRef();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    // const navigate = useNavigate();
    // const loginHandler = async (event) => {
    //     event.preventDefault();
    // const loginFormData = {
    //     email: emailChangeRef.current.value,
    //     password: passwordChangeRef.current.value
    // }

    // console.log('loginFormData', loginFormData);

    // 'http://localhost:3000/api/products?page=1&size=5'
    // const response = await fetch('http://localhost:3000/api/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         // 'Authorization': 'Bearor ' + 'your-token'
    //       },
    //     body: JSON.stringify(loginFormData)
    // })

    // console.log('navigation',navigation);

    // if(response.ok) {
    //     let loginData = await response.json();
    //     localStorage.setItem('user', JSON.stringify(loginData.user));
    //     localStorage.setItem('token', JSON.stringify(loginData.token));
    //     localStorage.setItem('expirationDuration', JSON.stringify(loginData.expirationDuration))
    //     // navigate('/')
    //     console.log('ressssssssssssss', loginData, response);
    // }
    // }

    return <div className={`${styles['login-page']} py-3`}>
        <div className={`bg-info p-4 ${styles['form-body']}`}>
            <h3 className="text-center mb-4 loginHead">Login</h3>
            <Form method='post'>
                <div className="form-group mb-3">
                    <label htmlFor="email" className="mb-1">Email:</label>
                    <input type="email" ref={emailChangeRef} id="email" name='email' className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="mb-1">Password:</label>
                    <input type="password" ref={passwordChangeRef} id="password" name='password' className="form-control" placeholder="Enter password" />
                </div>

                <div className="submit mt-4">
                    <button className="btn btn-primary w-100 text-center login" >{isSubmitting ? 'Submitting...' : 'Login'}</button>
                </div>
            </Form>
        </div>
    </div>
}

export default LoginForm;


export async function action({ request, params }) {
    const data = await request.formData();
    const loginFormData = {
        email: data.get('email'),
        password: data.get('password')
    }

    const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginFormData)
    });

    if (response.ok) {
        let loginData = await response.json();
        localStorage.setItem('user', JSON.stringify(loginData.user));
        localStorage.setItem('token', JSON.stringify(loginData.token));
        localStorage.setItem('expirationDuration', JSON.stringify(loginData.expirationDuration))
        return redirect('/addproduct');
    }
}