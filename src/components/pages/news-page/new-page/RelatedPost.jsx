import React, {useState} from 'react';
import classes from "./RelatedPostsArea.module.css";
import {Link} from "react-router-dom";

const RelatedPost = ({item, currentLocation}) => {
    const [isLoadedImg, setIsLoadedImg] = useState(false);

    const handleLoadedImg = ()=> {
        setIsLoadedImg(true);
    };


    return (
        <Link to={currentLocation+item.url}>
            <div className={classes.relatedPosts__item}>
                <img
                    src={item.img}
                    alt="news image"
                    className={classes.relatedPosts__item__img}
                    style={{opacity: isLoadedImg ? 1: 0}}
                    loading="lazy"
                    onLoad={handleLoadedImg}

                />
                {!isLoadedImg &&
                    <img
                        src={item.imgSmall}
                        alt="news image"
                        className={classes.relatedPosts__item__imgSmall}
                        loading="lazy"
                    />
                }
                <h4 className={classes.relatedPosts__item__title}>
                    {item.name}
                </h4>
                <ul className={classes.relatedPosts__item__info}>
                    <li>{item.author}</li>
                    <li>{item.date.toLocaleDateString("uk-UA")}</li>
                    <li>{item.category.join(", ")}</li>
                </ul>
            </div>
        </Link>
    );
};

export default RelatedPost;