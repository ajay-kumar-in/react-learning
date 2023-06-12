import { Form, useNavigation, redirect } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { login } from '../../store/auth';

import styles from './LoginForm.module.css'

const LoginForm = () => {
    // form data is submitted using 'Form' tag and 'name' attribute
    // const auth = useSelector(state=> state.auth.isAuthenticated);
    // const dispatch = useDispatch();
    // console.log('authhhhhhhhhhhhhh', auth);
    // dispatch(login(true));
    
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return <div className={`${styles['login-page']} py-3`}>
        <div className={`bg-info p-4 ${styles['form-body']}`}>
            <h3 className="text-center mb-4 loginHead">Login</h3>
            <Form method='post'>
                <div className="form-group mb-3">
                    <label htmlFor="email" className="mb-1">Email:</label>
                    <input type="email" id="email" name='email' className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="mb-1">Password:</label>
                    <input type="password" id="password" name='password' className="form-control" placeholder="Enter password" />
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

    if(!response.ok) {
        alert('Login failed!');
        return redirect('/login');
    }

    if (response.ok) {
        let loginData = await response.json();
        localStorage.setItem('user', JSON.stringify(loginData.user));
        localStorage.setItem('token', JSON.stringify(loginData.token));
        localStorage.setItem('expirationDuration', JSON.stringify(loginData.expirationDuration))
        return redirect('/products/add');
    }
}