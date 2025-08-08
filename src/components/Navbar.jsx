import React from 'react';
import navLogo from '../assets/logo.svg'
import { FaUser } from 'react-icons/fa';
import { MdAppRegistration } from 'react-icons/md';
import { LuLogOut } from "react-icons/lu";
import { Link, NavLink } from 'react-router';
import { Tooltip } from 'react-tooltip';
import useAuth from '../hooks/useAuth';

const Navbar = () => {

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
            <li><NavLink to='/all-artifacts' className="hover:bg-transparent hover:underline ">All Artifacts</NavLink></li>
            <li><NavLink to='/add-artifacts' className="hover:bg-transparent hover:underline">Add Artifacts</NavLink></li>
        </>
    )

    return (
        <div className='bg-[#3E1B0B] shadow-2xl px-4 sm:px-8 lg:px-14 py-4 z-10 text-white w-full'>
            <div className="flex items-center justify-between w-full">

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
                                        user? <img
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