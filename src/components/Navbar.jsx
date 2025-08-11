import React from 'react';
import navLogo from '../assets/logo.svg'
import { FaUser } from 'react-icons/fa';
import { MdAppRegistration } from 'react-icons/md';
import { LuLogOut } from "react-icons/lu";
import { Link, NavLink } from 'react-router';
import { Tooltip } from 'react-tooltip';
import useAuth from '../hooks/useAuth';

const Navbar = ({ setTheme, theme }) => {

    const { user, logOutUser } = useAuth();

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log("User logout")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const nav = (
        <>
            <li><NavLink to='/' className="hover:bg-transparent hover:underline ">Home</NavLink></li>
            {
                user && <>
                    <li><NavLink to='/all-artifacts' className="hover:bg-transparent hover:underline ">All Artifacts</NavLink></li>
                    <li><NavLink to='/add-artifacts' className="hover:bg-transparent hover:underline">Add Artifacts</NavLink></li>
                </>
            }
            <li><NavLink to='/about' className="hover:bg-transparent hover:underline">About Us</NavLink></li>
            <li><NavLink to='/contact' className="hover:bg-transparent hover:underline">Contact Us</NavLink></li>
        </>
    )

    return (
        <div className='bg-[#3E1B0B] shadow-2xl px-4 sm:px-8 lg:px-14 py-4 z-10 text-white w-full'>
            <div className="flex items-center justify-between w-full lg:px-6">

                <Link to='/' className="flex-shrink-0">
                    <img src={navLogo} alt="Logo" className='h-8 sm:h-10 lg:h-12 w-auto' />
                </Link>

                <div className="hidden lg:flex flex-1 justify-center">
                    <ul className="flex space-x-8 text-lg">
                        {nav}
                    </ul>
                </div>

                <div className="lg:hidden">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-1">

                            {nav}

                            <div className="divider my-2"></div>

                            {
                                user ? (
                                    <>
                                        <li><Link className='textarea-md'>{user.displayName || "User's Name"}</Link></li>
                                        <li><Link className='textarea-md'>My Artifacts</Link></li>
                                        <li><Link className='textarea-md'>Liked Artifacts</Link></li>
                                        <li>
                                            <Link onClick={handleLogOut} to='/login' className='flex items-center gap-2'>
                                                <LuLogOut className='text-lg' />
                                                Logout
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link to='/login' className='flex items-center gap-2'>
                                                <FaUser className='text-sm' />
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/register' className='flex items-center gap-2'>
                                                <MdAppRegistration className='text-lg' />
                                                Register
                                            </Link>
                                        </li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>


                <div className="hidden lg:flex items-center space-x-4">
                    <label className="swap swap-rotate mr-5">
                        <input onClick={() => setTheme(!theme)} type="checkbox" className="theme-controller" value="synthwave" />

                        <svg
                            className="swap-off h-8 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        <svg
                            className="swap-on h-8 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>

                    <div className='border-r h-6 border-white/50'></div>

                    {
                        user ? <Link onClick={handleLogOut} to='/login' className='flex items-center gap-2'>
                            <LuLogOut className='text-lg text-white' />
                            <h1>LogOut</h1>
                        </Link> :

                            <div className='flex items-center space-x-4'>
                                <Link to='/login' className='flex items-center gap-2 hover:opacity-80'>
                                    <FaUser className='text-sm text-white' />
                                    <span>Login</span>
                                </Link>

                                <div className='border-r h-6 border-white/50'></div>

                                <Link to='/register' className='flex items-center gap-2 hover:opacity-80'>
                                    <MdAppRegistration className='text-lg text-white' />
                                    <span>Register</span>
                                </Link>
                            </div>
                    }



                    <div className='border-r h-6 border-white/50'></div>


                    <div className="flex gap-2">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user ? <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user.photoURL} /> : <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                    }
                                </div>
                            </div>

                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-[#3E1B0B] rounded-box z-50 mt-3 p-3 shadow-lg w-48 space-y-1">

                                <li><Link className='textarea-md'>{user ? user.displayName : "User's Name"}</Link></li>
                                <li><Link to='/my-artifacts' className='textarea-md'>My Artifacts</Link></li>
                                <li><Link to='/liked-artifacts' className='textarea-md'>Liked Artifacts</Link></li>
                                {
                                    user ? <li><Link onClick={handleLogOut} className='textarea-md'>Logout</Link></li> : ""
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;