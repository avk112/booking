import React from 'react';
import classes from "./PostArea.module.css";
import socialsData from "../../../../data/socials";
import {Link} from "react-router-dom";
import Breadcrumbs from "../../../Breadcrumbs";

const PostArea = ({currentNew, allNews}) => {
    const socialsBlock = socialsData.map(item=>{
        return <Link to="#" key={item.id}>
            <img  src={item.img} alt={item.name}/>
        </Link>
    });

    const categories = currentNew.category.join(", ")


    return (
        <div className={classes.postArea}>
            <div className={classes.postArea__top}>
                <Breadcrumbs data={allNews}/>
                <h2 className={classes.postArea__top__title}>
                    {currentNew.name}
                </h2>


            </div>
            <div className={classes.postArea__info}>
                <div className={classes.postArea__info__item}>
                    <h3 className={classes.postArea__info__item__title}>
                        Author
                    </h3>
                    <p>{currentNew.author}</p>
                </div>
                <div className={classes.postArea__info__item}>
                    <h3 className={classes.postArea__info__item__title}>Date</h3>
                    <p>{currentNew.date.toLocaleDateString("uk-UA")}</p>
                </div>
                <div className={classes.postArea__info__item}>
                    <h3 className={classes.postArea__info__item__title}>Categories</h3>
                    <p>{categories}</p>
                </div>
            </div>
            <div className={classes.postArea__textBlock}>
                {currentNew.text}
            </div>
            <div className={classes.postArea__socials}>
                <h4 className={classes.postArea__socials__title}>
                    Share:
                </h4>
                {socialsBlock}
            </div>
        </div>
    );
};

export default PostArea;