import React, {useState} from 'react';
import classes from "./LoginPage.module.css";
import {setUser} from "../../../redux/userSlice";
import {useDispatch} from "react-redux";

const LoginForm = ({handleFormType=()=>{}}) => {
    const dispatch = useDispatch();
    class defaultForm {
        constructor( usernameOrEmail="", password="" ) {
            this.usernameOrEmail = usernameOrEmail;
            this.password = password;
        }
    }
    const [isStandartLoginText, setIsStandartLoginText] = useState(true);
    const [formFields, setFormFields] = useState(new defaultForm());

    const handleFormInput = (e)=>{
        const value = e.target.value;
        const name =e.target.name;
        return  setFormFields(prev=>({...prev, [name]: value}));
    };

    const sendForm = (e)=> {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("userData"));
        const isEqual=Object.keys(formFields).every(key=>{
                let newKey=key;
                if(key==="usernameOrEmail"){
                    newKey = formFields[key].includes("@") ? "email" : "username";
                }
                return formFields[key]===user?.[newKey]});
        if(isEqual) {
                dispatch(setUser({...user}));
            } else {
                setIsStandartLoginText(isEqual);
                setFormFields(new defaultForm())
            }
    };

    return (
        <form onSubmit={sendForm} className={classes.loginPage__form}>
            <h1 className="universal-container__header" >Login Your Account</h1>
            <p>{isStandartLoginText
                ?
                "Login to your account to discover the great cars for rent!"
                :
                "Validation failed. Incorrect password or username"
            }</p>
            <input
                type="text"
                name="usernameOrEmail"
                placeholder="Email or Username"
                value={formFields.usernameOrEmail}
                onChange={handleFormInput}
            />
            <input
                type="text"
                name="password"
                placeholder="Password"
                value={formFields.password}
                onChange={handleFormInput}
            />
            <div>
                <span>Don't have an account yet? </span>
                <span className={classes.loginPage__form__link} onClick={(e)=>handleFormType(e,true)}>Register now</span>
            </div>

            <button className={`universal-button`}>
                Login
            </button>
        </form>
    );
};

export default LoginForm;