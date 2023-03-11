import React, {useEffect, useRef, useState}from 'react';
import logoImg from "../image/logo-car.png";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllNavs} from "../redux/navagationsSlice";
import {breakUser, getUser} from "../redux/userSlice";
import HiddenScreen from "./HiddenScreen";
import menuImg from "../image/menu-list-grey.png";

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);

    const activeStyle={color: "#ff992e"};
    const passiveStyle = {undefined};
    const scrollRef = useRef(null);
    const [scroll, setScroll] = useState(0);
    const [isVisibleHiddenScreen, setIsVisibleHiddenScreen] = useState(false);
    const visibleBackground = scroll > scrollRef.current?.offsetTop ? "visible-background" : "hidden-background";

    const handleHiddenScreen = ()=> {
        setIsVisibleHiddenScreen(prev=>!prev)
    };

    const handleScroll= ()=> {
        setScroll(window.scrollY);
    };

    const navs = useSelector(getAllNavs);

    const logout=()=> {
        dispatch(breakUser())
    }

    const mainNavBlock = navs?.map(item=>{
        return item.type==="main" &&
                    <li key={item.id}>
                        <NavLink to={item.url}
                                 style={({isActive}) => isActive ? activeStyle : passiveStyle}
                                 onClick={isVisibleHiddenScreen && handleHiddenScreen}
                        >
                            {item.name}
                        </NavLink>
                    </li>
    });

    const loginNavBlock = navs?.map(item=>{
        if (item.type==="login" && !user?.username) {
            return <li key={item.id}>
                <NavLink to={item.url}
                         style={({isActive}) => isActive ? activeStyle : passiveStyle}
                         onClick={isVisibleHiddenScreen && handleHiddenScreen}
                >
                    {item.name}
                </NavLink>
            </li>
        }
        if(item.type==="logout" && user?.username){
            return <li key={item.id}>
                        <NavLink to={item.url}
                                 style={passiveStyle}
                                 onClick={()=>{logout();isVisibleHiddenScreen && handleHiddenScreen()}}
                        >
                            {item.name}
                        </NavLink>
                    </li>
        }
        });

    const asideMenu = <aside className="header__hidden-nav-block">
                            <ul>
                                {mainNavBlock}
                                {loginNavBlock}
                            </ul>
                        </aside>;


    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);



    return (
        <header className={`header ${visibleBackground}`}>
            <HiddenScreen
                justify="flex-start"
                insertBlock={asideMenu}
                isVisible={isVisibleHiddenScreen}
                handleScreenStatus={handleHiddenScreen}
            />
            <div className="header__logo">
                <img src={logoImg} alt="logo"/>
            </div>
            <nav className="header__nav-block" ref={scrollRef}>
                <ul className="header__nav-block__main">
                    {mainNavBlock}
                </ul>
                <ul  className="header__nav-block__login">
                    {loginNavBlock}
                </ul>
            </nav>
            <div className="header__menu">
                <img
                    src={menuImg} alt="menu"
                    onClick={handleHiddenScreen}
                />
            </div>

        </header>
    );
};

export default Header;