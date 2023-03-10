import React from 'react';
import classes from "./BanerArea.module.css";
import "./Calendar.css";
import "./DateRangePicker.css";
import QuickSearch from "../../QuickSearch";
import {Link} from "react-router-dom";

const BannerArea = () => {

    return (
        <div className={`universal-container ${classes.banner}`}>
            <form className={classes.banner__form}>
                <h3 className={classes.banner__form__title}>MAKE YOUR RIDE</h3>
                <p>Rent a car to move from local hosts in 190+ countries.</p>
                <QuickSearch/>
                <Link to="car-listing">
                    <button className={classes.banner__form__button}>
                        Search
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default BannerArea;