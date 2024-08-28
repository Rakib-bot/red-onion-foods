import React, { useContext, useEffect, useState } from 'react';
import logo from './logo2.png';
import { useForm } from 'react-hook-form';
import './SignUp.css';
import google from './google.png'
import { handleGoogleSignIn, handleSignIn, handleSignUpWithEmailAndPassword } from '../FireBase/Authentication';
import { userContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useState(true);
    const {USER,setUSER} = useContext(userContext);
    const [formInformation,setFormInformation] = useState({})
    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    useEffect(() => {
        console.log("USER updated: ", USER);
    }, [USER]);

    const onSubmit = (data) => {
        if (loggedInUser) {
            handleSignIn(data)
                .then((res) => {
                    console.log("Sign in response:", res);
                    if (res.success) {
                        setUSER({
                            name: res.name,
                            email: res.email,
                            status: res.status,
                            error: res.error,
                            message: res.message,
                            success: res.success
                        });
                        navigate(from);

                    }
                })
                .catch((error) => {
                    console.log("Sign in error:", error.message);
                });
               

        } else {
            handleSignUpWithEmailAndPassword(data)
                .then((res) => {
                    console.log("Sign up response:", res);
                    if (res.success) {
                        setUSER({
                            name: res.name,
                            email: res.email,
                            status: res.status,
                            error: res.error,
                            message: res.message,
                            success: res.success
                        });
                        navigate(from);
                    }
                })
                .catch((error) => {
                    console.log("Sign up error:", error.message);
                });
                
        }
    };

    const handleUSER =(result) =>{

        setUSER(result);
        console.log(USER);
    }

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then((result) => {
                handleUSER(result)
                navigate(from);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
   

    return (
        <div className="signup">
            <div className="container" style={{ backgroundColor: 'transparent' }}>
                <div className="logo text-center mb-4">
                    <img src={logo} alt="logo" />
                </div>
                {loggedInUser ? (
                    <form onSubmit={handleSubmit(onSubmit)} className='form'>
                        <h4 className="text-center">Login</h4>
                        <div className="form-group">
                            <input
                                {...register('email', { required: 'Email is required' })}
                                className='form-control'
                                placeholder='Enter Your Email'
                            />
                            {errors.email && <span className="error">{errors.email.message}</span>}
                        </div>
                        <div className="form-group">
                            <input
                                type='password'
                                {...register('password', { required: 'Password is required' })}
                                className='form-control'
                                placeholder='Enter Your Password'
                            />
                            {errors.password && <span className="error">{errors.password.message}</span>}
                        </div>
                        <div className="form-group d-flex justify-content-center my-3">
                            <button
                                type="submit"
                                className="btn sign-btn"
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="google-btn-container">
                            <button onClick={()=>googleSignIn()}
                            className="google-btn">
                                <div className="google-btn-content">
                                    <div className="google-icon">
                                        <img src={google} alt="Google Icon" />
                                    </div>
                                    <div className="google-text">
                                        Sign in with Google
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="account text-center">
                            <label onClick={() => setLoggedInUser(false)}>
                                Create a new Account
                            </label>
                        </div>
                       

                    </form>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <h4 className="text-center">New Account</h4>
                        <div className="form-group">
                            <input
                                {...register('name', { required: 'Name is required' })}
                                className='form-control'
                                placeholder='Enter Your Name'
                            />
                            {errors.name && <span className="error">{errors.name.message}</span>}
                        </div>
                        <div className="form-group">
                            <input
                                {...register('email', { required: 'Email is required' })}
                                className='form-control'
                                placeholder='Enter Your Email'
                            />
                            {errors.email && <span className="error">{errors.email.message}</span>}
                        </div>
                        <div className="form-group">
                            <input
                                type='password'
                                {...register('password', { required: 'Password is required' })}
                                className='form-control'
                                placeholder='Enter Your Password'
                            />
                            {errors.password && <span className="error">{errors.password.message}</span>}
                        </div>
                        <div className="form-group">
                            <input
                                type='password'
                                {...register('confirm_password', {
                                    required: 'Confirm Password is required',
                                    validate: value => value === watch('password') || 'Passwords must match'
                                })}
                                className='form-control'
                                placeholder='Confirm Your Password'
                            />
                            {errors.confirm_password && <span className="error">{errors.confirm_password.message}</span>}
                        </div>
                        <div className="form-group d-flex justify-content-center my-3">
                            <button
                                type="submit"
                                className="btn sign-btn"
                            >
                                Sign Up
                            </button>
                        </div>
                        <div className="google-btn-container">
                            <button onClick={()=>googleSignIn()}
                            className="google-btn">
                                <div className="google-btn-content">
                                    <div className="google-icon">
                                        <img src={google} alt="Google Icon" />
                                    </div>
                                    <div className="google-text">
                                        Sign in with Google
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="account text-center">
                            <label onClick={() => setLoggedInUser(true)}>
                                Already Have an Account
                            </label>
                        </div>
                       
                       
                    </form>
                )}
            </div>
        </div>
    );
};

export default SignUp;
