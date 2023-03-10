import React from 'react';
import classes from "./DescriptionArea.module.css";

const DescriptionArea = ({car}) => {
    return (
        <div className={classes.descriptionBlock}>
            <div className={classes.descriptionBlock__imgBlock}>
                <img src={car.img} alt={car.name}/>
            </div>
            <h2 className={classes.descriptionBlock__title}>
                {car.name}
            </h2>
            <div className={classes.descriptionBlock__description}>
                {car?.description}
            </div>
        </div>
    );
};

export default DescriptionArea;