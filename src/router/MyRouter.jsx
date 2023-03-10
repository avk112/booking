import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../components/pages/homepage/HomePage";
import CarListing from "../components/pages/carlisting/CarListing";
import AboutPage from "../components/pages/about-page/AboutPage";
import NewsPage from "../components/pages/news-page/news-page/NewsPage";
import ContactUsPage from "../components/pages/contacts-page/ContactUsPage";
import CarListingPage from "../components/pages/carlisting/carlisting-page/CarListingPage";
import CarPage from "../components/pages/carlisting/car-page/CarPage";
import NewPage from "../components/pages/news-page/new-page/NewPage";
import LoginPage from "../components/pages/login-page/LoginPage";
import AccountPage from "../components/pages/account-page/AccountPage";

const MyRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="car-listing" element={<CarListing/>}>
                    <Route index element={<CarListingPage/>}/>
                    <Route path=":name" element={<CarPage/>}/>
                </Route>
                <Route path="about" element={<AboutPage/>}/>
                <Route path="news">
                    <Route index element={<NewsPage/>}/>
                    <Route path=":singleNew" element={<NewPage/>}/>
                </Route>
                <Route path="contact" element={<ContactUsPage/>}/>
                <Route path="account" element={<AccountPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="*" element={<Navigate replace to="/"/>}/>
            </Route>
        </Routes>
    );
};

export default MyRouter;