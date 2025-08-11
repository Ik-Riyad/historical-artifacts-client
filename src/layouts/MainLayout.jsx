import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLocation, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader';

const MainLayout = () => {
    const [theme, setTheme] = useState(true)
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
        // <div className='' data-theme={theme ? 'light' : 'dark'}>
        <>
            <section className='sticky top-0 z-50'>
                <Navbar setTheme={setTheme} theme={theme}></Navbar>
            </section>
            <Outlet></Outlet>
            <section>
                <Footer></Footer>
            </section>
        </>
        // </div>
    );
};

export default MainLayout;