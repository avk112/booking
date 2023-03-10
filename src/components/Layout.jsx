import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from "react-router-dom"
import {useSelector} from "react-redux";
import {getNavStatus} from "../redux/navagationsSlice";
import Loader from "./Loader";

const Layout = () => {
    const loadingStatus = useSelector(getNavStatus);

    return loadingStatus==="loading"
        ?
        <Loader/>
        :
        (
        <div className="app">
            <Header/>
            <div className="main">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;