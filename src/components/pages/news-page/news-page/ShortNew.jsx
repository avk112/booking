import React, {useState} from 'react';
import classes from "./NewsPage.module.css";
import {Link} from "react-router-dom";

const ShortNew = ({item}) => {
    const [isLoadedImg, setIsLoadedImg] = useState(false);

    const handleLoadedImg = ()=> {
        setIsLoadedImg(true);
    }


    return (
        <div className={classes.newsPage__item}>
            <img
                src={item.img}
                className={classes.newsPage__item__img}
                style={{opacity: isLoadedImg ? 1: 0}}
                loading="lazy"
                onLoad={handleLoadedImg}
            />
            {!isLoadedImg &&
                <img
                    src={item.imgSmall}
                    className={classes.newsPage__item__imgSmall}
                    loading="lazy"
                />
            }
                <Link to={item.url}>
                <h3 className={classes.newsPage__item__title}>
                {item.id} {item.name}
        </h3>
        </Link>
            <div className={classes.newsPage__item__info}>
                <span>{item.author}</span>
                <span>|</span>
                <span>{item.date.toLocaleDateString("uk-UA")}</span>
            </div>
            <p>
                {item.title}
            </p>
            <Link to={item.url}>
                <button className={`universal-button`}>
                    Continue
                </button>
            </Link>
        </div>
    );
};

export default ShortNew;