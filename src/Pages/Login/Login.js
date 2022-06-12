import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError
    if (error1 || error) {
        signInError = <p className='text-red-500'>{error1?.message || error?.message}</p>
    }

    if (loading1 || loading) {
        return <Loading></Loading>
    }

    if (user1 || user) {
        navigate(from, { replace: true });

    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }



    return (
        <div className='flex justify-center items-center h-[85vh] px-12'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Login</h2>
                    <div className="flex flex-col w-full border-opacity-50">
                        {/* react hook form */}
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">email</span>
                                </label>
                                <input
                                    type="email" placeholder="Enter your email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            massage: 'Email is required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.massage}
                                    </span>}

                                    {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.massage}
                                    </span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>

                                </label>
                                <input
                                    type="password" placeholder="Enter your password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            massage: 'Password is required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}

                                />

                                <label className="label">
                                    {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.massage}</span>}

                                    {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.massage}</span>}
                                </label>
                            </div>
                            {signInError}
                            <input className="btn w-full" type="submit" value='Login' />
                        </form>
                        <p className='text-center p-2'><small>New to Doctors Portal <Link className='text-primary'
                            to="/signup">Create New Account</Link></small></p>
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()}
                            className="btn btn-outline">CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;