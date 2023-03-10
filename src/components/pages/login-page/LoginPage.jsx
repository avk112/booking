import React, {useEffect, useState} from 'react';
import Breadcrumbs from "../../Breadcrumbs";
import UniversalBanner from "../../UniversalBanner";
import classes from "./LoginPage.module.css"
import {useSelector} from "react-redux";
import {getUser} from "../../../redux/userSlice";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const LoginPage = () => {
    const userData = useSelector(getUser);
    const authorizationStatus = userData?.username;
    const [isRegisterForm, setIsRegisterForm] = useState(false);

    const handleFormType = (e, registration=false)=>{
        if((registration && !isRegisterForm) || (!registration && isRegisterForm)){
            setIsRegisterForm(registration);
        }
    }

    const successLoginBlock = <div className={classes.loginPage__form}>
                                    <h1 className="universal-container__header" >You successfully logged in!</h1>
                                    <p>Booking is available for you</p>
                                </div>;

    const formBlock = isRegisterForm
                        ? <RegisterForm handleFormType={handleFormType}/>
                        : <LoginForm handleFormType={handleFormType}/>;


    useEffect(()=>{
        window.scroll(0, 0);
    }, [authorizationStatus]);



    return (
        <>
            <UniversalBanner
                title="Login"
                innerBlock={ <Breadcrumbs/>}
            />
            <div className={`universal-container ${classes.loginPage}`}>
                {!authorizationStatus
                    ? formBlock
                    : successLoginBlock
                }
            </div>
        </>
    );
};

export default LoginPage;