import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLocation, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader';

const MainLayout = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    const navigation = useNavigation();
    const { loading } = useAuth();
    if (navigation.state === 'Loading' || loading) {
        console.log(navigation)
        return <Loader></Loader>
    }

    return (
        <>
            <section className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </section>
            <Outlet></Outlet>
            <section>
                <Footer></Footer>
            </section>
        </>
    );
};

export default MainLayout;