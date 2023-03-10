import React, {useState} from 'react';
import classes from "./LoginPage.module.css";
import {setUser} from "../../../redux/userSlice";
import {useDispatch} from "react-redux";

const RegisterForm = ({handleFormType=()=>{}}) => {
    const dispatch = useDispatch();
    class defaultForm {
        constructor(  username="",  email="", password="" ) {
            this.username = username;
            this.email=email;
            this.password = password;
        }
    }

    const [formFields, setFormFields] = useState(new defaultForm());


    const handleFormInput = (e)=>{
        const value = e.target.value;
        const name =e.target.name;
        return setFormFields(prev=>({...prev, [name]: value})) ;
    }

    const sendForm = (e)=> {
        e.preventDefault();
        localStorage.setItem("userData", JSON.stringify(formFields));
        dispatch(setUser({...formFields}));

    };


    return (
        <form onSubmit={(e)=>sendForm(e,true)}
              className={classes.loginPage__form}>
            <h1 className="universal-container__header" >Register Your Account</h1>
            <p>Register your account to get access to booking these wonderful cars!</p>
            <input
                type="text"
                name="username"
                placeholder="Username"
                required={true}
                value={formFields.username}
                onChange={(e)=>handleFormInput(e, false)}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                required={true}
                value={formFields.email}
                onChange={(e)=>handleFormInput(e, false)}
            />
            <input
                type="text"
                name="password"
                placeholder="Password"
                required={true}
                value={formFields.password}
                onChange={(e)=>handleFormInput(e, false)}
            />
            <div>
                <span>Have account already? </span>
                <span className={classes.loginPage__form__link} onClick={handleFormType}>Login now</span>
            </div>

            <button className={`universal-button`}>
                Register
            </button>
        </form>
    );
};

export default RegisterForm;