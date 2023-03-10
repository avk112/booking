import React from 'react';
import classes from "./TopImgArea.module.css";

const TopImgArea = ({currentNew}) => {
    return (
        <div className={classes.top}>
            <div className={classes.top__imgBlock}>
                <img src={currentNew.img}/>
            </div>
        </div>
    );
};

export default TopImgArea;