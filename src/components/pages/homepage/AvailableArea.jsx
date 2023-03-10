import React from 'react';
import classes from "./AvailableArea.module.css";
import carsData from "../../../data/cars";
import ratingImg from "../../../image/star.png";
import arrowImg from "../../../image/right-arrow.png";
import useFilter from "../../hooks/useFilter";
import {Link} from "react-router-dom";

const AvailableArea = () => {
    const {handleInputs, filterInputs, filteredArray} = useFilter(["search","model", "rating"], [...carsData]);


    const filtersBlock = filterInputs.sort((a,b)=>a.sortPosition-b.sortPosition).map(item=>{
        let selectedValue = filterInputs.find(field=>field.name===item.name)?.checkedInputs[0];
        return <div key={item.id} className={classes.available__filters__item}>
                    <h4 className={classes.available__filters__item__title}>{item.title}</h4>
                    {item.name==="search"
                        ?
                        <input
                            name={item.name}
                            type={item.type}
                            value={item.checkedInputs}
                            placeholder={item.placeholder}
                            onChange={handleInputs}
                        />
                        :
                        <select
                            name={item.name}
                            value={selectedValue}
                            onChange={(e)=>handleInputs(e, !isNaN(selectedValue))}
                        >
                            <option  value="">All</option>
                            {item.options.map((option, index)=>{
                                return <option  key={index} value={option}>
                                            {option}
                                        </option>
                            })}
                        </select>
                    }
                </div>
    });


    const itemsBlock = filteredArray.map((item,index)=> {
        return index<=5 &&
            <Link key={item.id} to={`car-listing/${item.url}`}>
                <div className={classes.available__row__item}>
                    <div className={classes.available__row__item__imgBlock}>
                        <div className={classes.available__row__item__imgBlock__container}>
                            <img src={item.img}/>
                        </div>
                    </div>
                    <div className={classes.available__row__item__info}>
                        <h4 className={classes.available__row__item__info__title}>{item.name}</h4>
                        <p>{item.seat} - Seater Car</p>
                        <div className={classes.available__row__item__info__bottom}>
                            <div className={classes.available__row__item__info__bottom__price}>
                                <h5>
                                    ${item.price}
                                </h5> / Day
                            </div>
                            <div className={classes.available__row__item__info__bottom__rating}>
                                <img src={ratingImg} alt="rating"/>
                                <span>{item.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
    });



    return (
        <div className={`universal-container ${classes.available}`}>
            <h1 className="universal-container__header" >Others Available Cars</h1>
            <p className="universal-container__subheader" >The variety of great cars for your unforgettable trip</p>
            <div className={classes.available__filters}>
                {filtersBlock}
            </div>
            {itemsBlock.length>0
                ?
                 <div className={classes.available__row}>
                     {itemsBlock}
                 </div>
                :
                <p className={classes.available__row__empty}>No results found...</p>
            }
            <Link to="car-listing">
                <button className="universal-button">
                    See all
                    <img src={arrowImg} alt="see more cars"/>
                </button>
            </Link>
        </div>
    );
};

export default AvailableArea;