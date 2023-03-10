import React from 'react';
import classes from "./RelatedCarsArea.module.css";
import {Link} from "react-router-dom";

const RelatedCarsArea = ({relatedCars, currentLocation}) => {
    const relatedCarsBlock = relatedCars.map(item=>{
        return <Link to={currentLocation+item.url} key={item.id} className={classes.relatedCars__item}>
            <img src={item.img}/>
            <div className={classes.relatedCars__item__info}>
                <h3 className={classes.relatedCars__item__info__title}>
                    {item.name}
                </h3>
                <ul className={classes.relatedCars__item__info__properties}>
                    <li>Class: <span>{item.class}</span></li>
                    <li>Doors: <span>{item.doors}</span></li>
                    <li>Fuel: <span>{item.fuel}</span></li>
                </ul>
                <span className={classes.relatedCars__item__info__price}>
                                From ${item.price} / Per Day
                            </span>
            </div>
        </Link>
    });


    return (
        relatedCarsBlock.length>0
                &&
                <div className={classes.relatedCars}>
                    <h2 className={classes.relatedCars__title}>
                        Related Cars
                    </h2>
                    <div className={classes.relatedCars__row}>
                        {relatedCarsBlock}
                    </div>
                </div>

    );
};

export default RelatedCarsArea;