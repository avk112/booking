import React from 'react';
import classes from "./RentalArea.module.css";
import rentalData from "../../../data/howRentalWorks";

const RentalArea = () => {

    const itemBlock = rentalData.map(item=>{
        return <div key={item.id} className={classes.rentalArea__row__item}>
                    <img src={item.img}/>
                    <h4 className={classes.rentalArea__row__item__title}>{item.title}</h4>
                    <p className={classes.rentalArea__row__item__text}>{item.text}</p>
            </div>
    });

    return (
        <div className={`universal-container ${classes.rentalArea} `}>
            <h1 className="universal-container__header" >How Turbo Car Rental Works</h1>
            <p className="universal-container__subheader" >The proper business solution for your developing business strategies and corporation</p>
            <div className={classes.rentalArea__row}>
                {itemBlock}
            </div>

        </div>
    );
};

export default RentalArea;