// import styles from './Signup.module.css';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//     const [firstName, setfirstName] = useState();
//     const [lastName, setlastName] = useState();
//     const [mobile, setMobile] = useState();
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();

//     const navigate = useNavigate();

//     function firstNameChangeHandler(event) {
//         setfirstName(event.target.value);
//     }

//     function lastNameChangeHandler(event) {
//         setlastName(event.target.value);
//     }

//     function mobileChangeHandler(event) {
//         setMobile(event.target.value);
//     }

//     function emailChangeHandler(event) {
//         setEmail(event.target.value);
//     }

//     function passwordChangeHandler(event) {
//         setPassword(event.target.value);
//     }

//     async function onSubmitHandler(event) {
//         event.preventDefault();
//         const signupFormData = {
//             firstName,
//             lastName,
//             mobile,
//             email,
//             password
//         }
//         console.log('signupFormData', signupFormData, event);

//         try {
//             const res = await fetch('http://localhost:3000/api/signup', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(signupFormData)
//             })
//             const signupData = await res.json();

//             if (!res.ok) {
//                 throw new Error(signupData.message);
//             }

//             navigate('../login');
//         } catch (err) {
//             console.log('err.message', err);
//         }
//     }

//     return <React.Fragment>
//         <div className={`${styles['signup-page']} py-3`}>
//             <div className={`bg-info p-4 ${styles['form-body']}`}>
//                 <h3 className="text-center mb-4">Signup</h3>
//                 <form onSubmit={onSubmitHandler}>
//                     <div className="form-group mb-3">
//                         <label htmlFor="firstName" className="mb-1">First Name:</label>
//                         <input type="firstName" id="firstName" onChange={firstNameChangeHandler} className="form-control" placeholder="Enter first name" />
//                     </div>

//                     <div className="form-group mb-3">
//                         <label htmlFor="lastName" className="mb-1">Last Name:</label>
//                         <input type="lastName" id="lastName" onChange={lastNameChangeHandler} className="form-control" placeholder="Enter last name" />
//                     </div>

//                     <div className="form-group mb-3">
//                         <label htmlFor="mobile" className="mb-1">Mobile:</label>
//                         <input type="mobile" id="mobile" onChange={mobileChangeHandler} className="form-control" placeholder="Enter mobile" />
//                     </div>

//                     <div className="form-group mb-3">
//                         <label htmlFor="email" className="mb-1">Email:</label>
//                         <input type="email" id="email" onChange={emailChangeHandler} className="form-control" placeholder="Enter email" />
//                     </div>

//                     <div className="form-group mb-3">
//                         <label htmlFor="password" className="mb-1">Password:</label>
//                         <input type="password" id="password" onChange={passwordChangeHandler} className="form-control" placeholder="Enter password" />
//                     </div>

//                     {/* <div className="form-group">
//                         <label htmlFor="confirmPassword" className="mb-1">Confirm Password:</label>
//                         <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm Password" />
//                     </div> */}

//                     <div className="submit mt-4">
//                         <button type="submit" className="btn btn-primary w-100 text-center signup" >Signup</button>
//                     </div>
//                 </form>
//             </div>
//         </div >
//     </React.Fragment >
// }

// export default Signup;





import styles from './Signup.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    password: ''
}

const inputErrMsges = {
    firstNameReq: 'First name is required.',
    lastNameReq: 'Last name is required.',
    mobileReq: 'Mobile is required.',
    emailReq: 'Email is required.',
    passwordReq: 'Password is required.'
}


const Signup = () => {
    const [formData, setformData] = useState(initialState);
    const navigate = useNavigate();


    function formChangeHandler(e) {
        setformData({ ...formData, [e.target.id]: e.target.value });
    }

    async function onSubmitHandler(event) {
        event.preventDefault();

        try {
            const res = await fetch('http://localhost:3000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const signupData = await res.json();

            if (!res.ok) {
                throw new Error(signupData.message);
            }

            navigate('../login');
        } catch (err) {
            console.log('err.message', err);
        }
    }

    return <React.Fragment>
        <div className={`${styles['signup-page']} py-3`}>
            <div className={`bg-info p-4 ${styles['form-body']}`}>
                <h3 className="text-center mb-4">Signup</h3>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="firstName" className="mb-1">First Name:</label>
                        <input type="firstName" id="firstName" onChange={formChangeHandler} className="form-control" placeholder="Enter first name" />
                    </div>
                    {!formData.firstName && <div className={`${styles['error_message']}`}>{inputErrMsges.firstNameReq}</div>}

                    <div className="form-group mt-3">
                        <label htmlFor="lastName" className="mb-1">Last Name:</label>
                        <input type="lastName" id="lastName" onChange={formChangeHandler} className="form-control" placeholder="Enter last name" />
                    </div>
                    {!formData.lastName && <div className={`${styles['error_message']}`}>{inputErrMsges.lastNameReq}</div>}

                    <div className="form-group mt-3">
                        <label htmlFor="mobile" className="mb-1">Mobile:</label>
                        <input type="mobile" id="mobile" onChange={formChangeHandler} className="form-control" placeholder="Enter mobile" />
                    </div>
                    {!formData.mobile && <div className={`${styles['error_message']}`}>{inputErrMsges.mobileReq}</div>}

                    <div className="form-group mt-3">
                        <label htmlFor="email" className="mb-1">Email:</label>
                        <input type="email" id="email" onChange={formChangeHandler} className="form-control" placeholder="Enter email" />
                    </div>
                    {!formData.email && <div className={`${styles['error_message']}`}>{inputErrMsges.emailReq}</div>}

                    <div className="form-group mt-3">
                        <label htmlFor="password" className="mb-1">Password:</label>
                        <input type="password" id="password" onChange={formChangeHandler} className="form-control" placeholder="Enter password" />
                    </div>
                    {!formData.password && <div className={`${styles['error_message']}`}>{inputErrMsges.passwordReq}</div>}

                    {/* <div className="form-group">
                        <label htmlFor="confirmPassword" className="mb-1">Confirm Password:</label>
                        <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm Password" />
                    </div> */}

                    <div className="submit mt-4">
                        <button type="submit" className="btn btn-primary w-100 text-center signup" >Signup</button>
                    </div>
                </form>
            </div>
        </div >
    </React.Fragment>
}

export default Signup;