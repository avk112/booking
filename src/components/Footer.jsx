import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import planeImg from "../image/paper-plane.png";
import logo from "../image/logo-yellow.png";
import socialsData from "../data/socials";
import FormAcceptation from "./FormAcceptation";
import HiddenScreen from "./HiddenScreen";
import {useSelector} from "react-redux";
import {getAllNavs} from "../redux/navagationsSlice";

const Footer = () => {
    const activeStyle={color: "#ff992e"};
    const passiveStyle = {undefined};
    const [input, setInput] = useState("");
    const [isHiddenScreen, setIsHiddenScreen] = useState(false);

    const handleInput = (e)=> {
        const value = e.target.value;
        setInput(value);
    }

    const sendForm = (e)=> {
        e.preventDefault();
        setInput("");
        handleScreenStatus();
    }

    const handleScreenStatus = ()=> {
        setIsHiddenScreen(prev=>!prev);
    }

    const navs = useSelector(getAllNavs);

    const mainNavBlock = navs.map(item=>{
        return item.type !=="logout"
            ?
            <li key={item.id}>
                <NavLink to={item.url} style={({isActive}) => isActive ? activeStyle : passiveStyle}>
                    {item.name}
                </NavLink>
            </li>
            :
            <li key={item.id}>
                <NavLink to={item.url} style={passiveStyle}>
                    {item.name}
                </NavLink>
            </li>
    });

    const socialsBlock = socialsData.map(item=> {
        return <img  key={item.id} src={item.img} alt={`${item.name} logo`}/>
    })

    return (
        <footer className="footer">
            <HiddenScreen
                justify="center"
                insertBlock={<FormAcceptation message="Thank you for your Subscribe! We won't be annoying!"/>}
                isVisible={isHiddenScreen}
                handleScreenStatus={handleScreenStatus}
            />
            <div className="footer__top">
                <h2 className="footer__top__title">
                    Need help renting online ? (855) 962-3621
                </h2>
            </div>
            <div className="footer__center">
                <nav className="footer__center__navBlock">
                    <ul className="footer__center__navBlock__main">
                        {mainNavBlock}
                    </ul>
                </nav>
                <form className="footer__center__form" onSubmit={sendForm}>
                    <h4 className="footer__center__form__title">
                        SIGN UP FOR GET OUR NEWSLETTER
                    </h4>
                    <div className="footer__center__form__main">
                        <input
                            type="email"
                            value={input}
                            onChange={handleInput}
                            placeholder="Your E-mail..."
                        />
                        <button>
                            <img src={planeImg}/>
                        </button>
                    </div>
                </form>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom__logoBlock">
                    <img src={logo} alt="logo"/>
                    <p>
                        © 2022 Turbo, This site is made as a demonstration
                    </p>
                </div>
                <div className="footer__bottom__socials">
                    {socialsBlock}
                </div>
            </div>
        </footer>
    );
};

export default Footer;