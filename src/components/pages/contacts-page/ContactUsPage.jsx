import React, {useState, useEffect} from 'react';
import UniversalBanner from "../../UniversalBanner";
import Breadcrumbs from "../../Breadcrumbs";
import classes from "./ContactUsPage.module.css";
import contactsData from "../../../data/contactUs";
import formFields from"../../../data/contactsForm";
import HiddenScreen from "../../HiddenScreen";
import FormAcceptation from "../../FormAcceptation";
import GoogleMapContainer from "./GoogleMapContainer";
import {useSelector} from "react-redux";
import {getUser} from "../../../redux/userSlice";

const ContactUsPage = () => {
    const user=useSelector(getUser);
    class FormInput {
        constructor(inputField={}, value="") {
            return {...inputField, value}
        }
    }

    const [formData, setFormData] = useState(formFields.map(item=>(new FormInput(item, user?.[item.name]))));
    const [isHiddenScreen, setIsHiddenScreen] = useState(false);

    const handleScreenStatus = ()=> {
        setIsHiddenScreen(prev=>!prev);
    }

    const handleInput = (e)=> {
        const name = e.target.name;
        const newValue = e.target.value;
        setFormData(prev=>prev.map(item=>{
            return item.name===name ? {...item, value: newValue} : item;
        }))
    };

    const sendMessage = (e)=> {
        e.preventDefault();
        setFormData(prev=>prev.map(item=>({...item, value: ""})));
        handleScreenStatus();
    }

    const contactsBlock = contactsData.map(item=>{
        const infoBlock=item.options.map((unit, index)=>{
            return <li key={index}>{unit}</li>
        });
        return <div key={item.id} className={classes.contactUs__row__item}>
                    <div className={classes.contactUs__row__item__imgBlock}>
                        <img src={item.img} alt={item.name}/>
                    </div>
                    <h3 className={classes.contactUs__row__item__title}>
                        {item.name}
                    </h3>
                    <ul className={classes.contactUs__row__item__info}>
                        {infoBlock}
                    </ul>
                </div>
    });

    const formBlock = formData.map(item=>{
        return item.type!=="textarea"
                ?
                <input
                    key={item.id}
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    value={item.value}
                    onChange={handleInput}
                />
                :
                <textarea
                    key={item.id}
                    name={item.name}
                    placeholder={item.placeholder}
                    value={item.value}
                    maxLength={750}
                    onChange={handleInput}
                />
    });

    useEffect(()=>{
        window.scroll(0, 0)
    }, []);


    return (
        <>
            <HiddenScreen
                justify="center"
                insertBlock={<FormAcceptation message="Thank you for your Message! We will respond as quick as possible!"/>}
                isVisible={isHiddenScreen}
                handleScreenStatus={handleScreenStatus}
            />
            <UniversalBanner
                title="Contacts"
                innerBlock={ <Breadcrumbs/>}
            />
            <div className={`universal-container ${classes.contactUs}`}>
                <div className={classes.contactUs__row}>
                    {contactsBlock}
                </div>
                <form className={classes.contactUs__form} onSubmit={sendMessage}>
                    <h3 className={classes.contactUs__form__title}>
                        If you got any questions please do not hesitate to send us a message
                    </h3>
                    {formBlock}
                    <button className={`universal-button ${classes.contactUs__form__button}`}>
                        Send
                    </button>
                </form>
                <GoogleMapContainer/>
            </div>
        </>
    );
};

export default ContactUsPage;