import React from 'react';
import classes from "./RelatedPostsArea.module.css";
import {Link} from "react-router-dom";

const RelatedPostsArea = ({relatedPosts, currentLocation}) => {
    const relatedPostsBlock = relatedPosts.map(item=>{
        return <Link to={currentLocation+item.url} key={item.id}>
                    <div className={classes.relatedPosts__item}>
                        <img src={item.img}/>
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
    });


    return (
        <div className={classes.relatedPosts}>
            {relatedPostsBlock}
        </div>
    );
};

export default RelatedPostsArea;