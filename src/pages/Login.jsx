import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import Lottie from "lottie-react";
import loginLottie from '../assets/lotties/login.json';

const Login = () => {
    const [passToggle, setPassToggle] = useState(false)

    const { userLogIn, googleLogin } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogIn(email, password)
            .then(result => {
                navigate(`${location.state ? location.state : '/'}`)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You Have Been Successfully Logged In.",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error,
                });
            });

    }

    const handleGoogleRegister = () => {
        googleLogin()
            .then((result) => {
                navigate('/');
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You Have Been Successfully Logged In.",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error,
                });
            });
    }

    return (
        <div>
            <title>Historical Artifacts | Login</title>
            <div>
                <div className='w-full lg:grid lg:grid-cols-2 justify-center items-center py-20'>
                    <div className='flex flex-col justify-center items-center lg:items-end relative lg:mt-30'>
                        <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3e0b0f] absolute top-4 sm:top-6 md:top-10 lg:top-12 px-2'>
                            Sign In to Explore History
                        </h1>
                        <div className='w-full flex justify-center lg:justify-end'>
                            <Lottie style={{ width: "100%", maxWidth: "600px" }} animationData={loginLottie} loop={true} />
                        </div>
                    </div>

                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card bg-white/80 w-full max-w-lg shrink-0 shadow-2xl ">
                            <div className="card-body">
                                <h1 className='text-3xl font-bold text-center text-[#3e0b0f]'>Please Login</h1>
                                <form onSubmit={handleLogin} className="fieldset ">
                                    <label className="label text-[#3e0b0f]">Email</label>
                                    <input name='email' type="email" className="input w-full" placeholder="Email" required />
                                    <label className="label text-[#3e0b0f]">Password</label>
                                    <div className='relative'>
                                        <input name='password' type={passToggle ? 'text' : 'password'} className="input w-full" placeholder="Password" required />
                                        <button type='button' onClick={() => setPassToggle(!passToggle)} className='cursor-pointer absolute right-4 top-2'>{passToggle ? <FaEye size={23} /> : <FaEyeSlash size={23} />}</button>
                                    </div>
                                    <div><a className="link link-hover text-[#3e0b0f]">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4 bg-[#3e0b0f]">Login</button>
                                </form>

                                <div className='grid grid-cols-3 items-center justify-center mt-5'>
                                    <div className='border-b border-[#3e0b0f41]'></div>
                                    <p className='textarea-md font-medium text-[#3e0b0f] mx-auto'>or Sign In with</p>
                                    <div className='border-b border-[#3e0b0f41]'></div>
                                </div>
                                <button onClick={handleGoogleRegister} className="btn bg-white text-[#3e0b0f] border-[#e5e5e5] mt-2">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                                <p className='pt-2 mx-auto textarea-md text-[#3e0b0f9d]'>Don't have an account? Please <Link to='/register' className=' text-[#3e0b0f] underline'>Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;