import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';

const Home_Layout = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-68px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home_Layout;