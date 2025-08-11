import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Lottie from "lottie-react";
import registerLottie from '../assets/lotties/registration.json';

const Registration = () => {
    const [passToggle, setPassToggle] = useState(false)

    const { googleLogin, createUser, updateUser, setUser } = useAuth();

    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;
        const terms = form.terms.checked;

        console.log(name, email, password, terms, image)

        if (!terms) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Accept our terms",
            });
            return
        }

        const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (passwordRegExp.test(password) === false) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: 'Password must be at least 6 characters long and include both uppercase and lowercase letters.',
            });
            return
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: image })

                    // এটা করলে ইউজার form সাবমিট করার সাথে সাথেই UI-তে তাদের নাম বা ছবি আপডেট হয়ে যাবে, observer এর জন্য অপেক্ষা করতে হবে না।
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: image })
                    }).catch(error => {
                        console.log(error)
                    })

                const regFormData = {
                    email,
                    name,
                    terms,
                    image,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }

                axios.post('https://historical-artifact-server.vercel.app/users', regFormData)
                    .then(res => {
                        const data = res.data;
                        if (data.insertedId) {
                            navigate('/');
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "You Have Registered Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }

                    }).catch(error => {
                        console.log(error)
                    })

            }).catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error,
                });
            })
    }

    const handleGoogleRegister = () => {
        googleLogin()
            .then((result) => {
                navigate('/');
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You Have Registered Successfully",
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
            <title>Historical Artifacts | Register</title>
            <div>
                <div className='w-full grid lg:grid-cols-2 justify-center items-center py-20 px-4 md:px-10 lg:px-20'>
                    {/* Left Section */}
                    <div className='flex flex-col justify-center items-center text-center space-y-30 mb-10 lg:mb-0'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3e0b0f]'>
                            Create Your Historical Profile
                        </h1>
                        <div className='w-full flex justify-center'>
                            <Lottie style={{ width: "100%", maxWidth: "500px" }} animationData={registerLottie} loop={true} />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card bg-white/80 w-full max-w-lg shrink-0 shadow-2xl">
                            <div className="card-body">
                                <h1 className='text-2xl sm:text-3xl font-bold text-center text-[#3E1B0B]'>Please Register</h1>
                                <form onSubmit={handleRegister} className="fieldset space-y-4">
                                    <div>
                                        <label className="label text-black">Name</label>
                                        <input
                                            name='name'
                                            type="text"
                                            className="input w-full bg-white text-black border border-gray-300 focus:border-[#3e0b0f] focus:ring focus:ring-[#3e0b0f]/30 focus:outline-none"
                                            placeholder="Name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="label text-black">Email</label>
                                        <input
                                            name='email'
                                            type="email"
                                            className="input w-full bg-white text-black border border-gray-300 focus:border-[#3e0b0f] focus:ring focus:ring-[#3e0b0f]/30 focus:outline-none"
                                            placeholder="Email"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="label text-black">Image</label>
                                        <input
                                            name='image'
                                            type="text"
                                            className="input w-full bg-white text-black border border-gray-300 focus:border-[#3e0b0f] focus:ring focus:ring-[#3e0b0f]/30 focus:outline-none"
                                            placeholder="Image"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="label text-black">Password</label>
                                        <div className='relative'>
                                            <input
                                                name='password'
                                                type={passToggle ? 'text' : 'password'}
                                                className="input w-full bg-white text-black border border-gray-300 focus:border-[#3e0b0f] focus:ring focus:ring-[#3e0b0f]/30 focus:outline-none"
                                                placeholder="Password"
                                            />
                                            <button
                                                type='button'
                                                onClick={() => setPassToggle(!passToggle)}
                                                className='cursor-pointer absolute right-4 top-2 text-[#3e0b0f]'
                                            >
                                                {passToggle ? <FaEye size={23} /> : <FaEyeSlash size={23} />}
                                            </button>
                                        </div>
                                    </div>

                                    <label className="label mt-2 text-black">
                                        <input type="checkbox" name='terms' className="checkbox border-[#3E1B0B] checked:bg-[#3E1B0B]" />
                                        <span className="ml-2">Accept Terms & Conditions</span>
                                    </label>

                                    <button className="btn mt-4 bg-[#3E1B0B] text-white hover:bg-[#2a0a07] w-full">
                                        Register
                                    </button>
                                </form>


                                {/* OR divider */}
                                <div className='grid grid-cols-3 items-center justify-center mt-6'>
                                    <div className='border-b border-[#3e0b0f41]'></div>
                                    <p className='text-sm font-medium text-[#3e0b0f] text-center'>or Sign Up with</p>
                                    <div className='border-b border-[#3e0b0f41]'></div>
                                </div>

                                {/* Google Button */}
                                <button onClick={handleGoogleRegister} className="btn bg-white text-[#3e0b0f] border-[#e5e5e5] mt-4 w-full">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    <span className="ml-2">Register with Google</span>
                                </button>

                                {/* Login Link */}
                                <p className='pt-4 text-center text-sm text-[#3e0b0f9d]'>
                                    Already have an account?{' '}
                                    <Link to='/login' className='text-[#3e0b0f] underline'>Login</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Registration;