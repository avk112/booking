import React, {useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const Breadcrumbs = ( {data=[], handleTitle=()=>{}}) => {
    const navsData = useSelector(state=>state.navigations.entities);
    const location=useLocation();
    const navArray = location.pathname.split("/");
    navArray[0]="/";
    const lastCrumb=data.find(item=>item.url===navArray[navArray.length-1]);


    const navBlock = () => {
        let path = "";
        const list = navArray.map((item, index) => {
            const navItem = navsData[item];
             path = (path==="/" || item==="/") ? path+item : path+"/"+item;
            return index+1 === navArray.length
                    ?
                    <li key={index}>
                        {navItem?.name
                            ?
                            navItem.name
                            :
                            lastCrumb?.name
                        }
                    </li>
                    :
                    <li key={index}>
                        <Link to={path}>{navItem.name}</Link>→
                    </li>
        });
        return list;
    };

    useEffect(()=> {
        handleTitle(lastCrumb?.name)
    }, [lastCrumb]);


    return (
        <div className={"universal-breadcrumbs"}>
            <ul>
                {navBlock()}
            </ul>

        </div>
    );
};

export default Breadcrumbs;