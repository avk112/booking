import React, {useState} from 'react';
import classes from "./CarsArea.module.css";
import SortSelector from "../../../SortSelector";
import sortingTypes from "../../../../data/sortingTypes";
import checkImg from "../../../../image/check.png";
import filterImg from "../../../../image/filter.png";
import {Link} from "react-router-dom";
import UniversalRating from "../../../UniversalRating";
import tableTypes from "../../../../data/displayType";
import HiddenScreen from "../../../HiddenScreen";
import BookingArea from "../car-page/BookingArea";

const CarsArea = ({filteredArray, loadLimit, handleLoadLimit, typeOfSorting, setTypeOfSorting, handleFilterVisibility}) => {
    const [tableDisplay, setTableDisplay] = useState([...tableTypes]);
    const tableClass = tableDisplay.find(item=>item.isActive).name;
    const [isVisibleHiddenScreen, setIsVisibleHiddenScreen] = useState(false);
    const [carToBook, setCarToBook] = useState({})

    const handleTableTypes = (e) => {
        const name = e.target.name;
        setTableDisplay(prev=>prev.map(item=>{
            if(item.name===name){
                return item.isActive ? item : {...item, isActive: true};
            }else {
                return item.isActive ? {...item, isActive: false} : item;
            }
        }))
    };

    const handleBooking = (car)=> {
        setCarToBook(car);
        setIsVisibleHiddenScreen(true);
    }

    const tableTypesBlock = tableDisplay.map(item=>{
        return <img key={item.id}
                    src={item.isActive ? item.activeImg : item.passiveImg}
                    alt={item.alt} name={item.name}
                    onClick={handleTableTypes}
        />
    });

    const carsFullBlock = filteredArray.sort((a, b)=> {
        const fieldName = typeOfSorting.fieldName;
        const byRising = typeOfSorting.rise;
        return byRising ? a[fieldName] - b[fieldName] : b[fieldName] - a[fieldName]}
    ).map(item=>{
        const features = item.features.map((feature, index)=>{
            return <li key={index}>
                <img src={checkImg} alt="checked"/>
                <span>{feature}</span>
            </li>
        })
        return <div key={item.id} className={`${classes.cars__row__item} ${classes[`${tableClass}__item`]}`}>
            <div className={`${classes.cars__row__item__imgBlock} ${classes[`${tableClass}__imgBlock`]}`}>
                <img src={item.img}/>
            </div>
            <div className={`${classes.cars__row__item__infoBlock} ${classes[`${tableClass}__infoBlock`]}`}>
                <h4 className={classes.cars__row__item__infoBlock__title}>
                    <Link to={item.url}>{item.name}</Link>
                </h4>
                <div className={classes.cars__row__item__infoBlock__rateAndPrice}>
                    <UniversalRating
                        fixedValue={item.rating}
                        className={classes.cars__row__item__infoBlock__rateAndPrice__rating}
                    />
                    <span className={classes.cars__row__item__infoBlock__rateAndPrice__price}>
                                From ${item.price} / Per Day
                            </span>
                </div>
                <ul className={classes.cars__row__item__infoBlock__attributes}>
                    <li><span>Doors</span> <span><b>{item.doors}</b></span></li>
                    <li><span>Luggage</span> <span><b>{item.luggage}</b></span></li>
                    <li><span>Seat</span> <span><b>{item.seat}</b></span></li>
                </ul>
                {tableClass==="list"
                    &&
                    <ul className={classes.cars__row__item__infoBlock__features}>
                        {features}
                    </ul>
                }
                <button
                    className="universal-button"
                    onClick={()=>handleBooking(item)}
                >
                    Book Now
                </button>
            </div>
        </div>
    });

    const carsBlock = [...carsFullBlock];
    carsBlock.length=loadLimit;


    return (
        <div className={classes.cars}>
            <HiddenScreen
                insertBlock={<BookingArea car={carToBook} hidden={true}/>}
                isVisible={isVisibleHiddenScreen}
                handleScreenStatus={()=>setIsVisibleHiddenScreen(false)}
            />
            <div className={classes.cars__topBlock}>
                <div className={classes.cars__topBlock__leftBlock}>
                    <p>{filteredArray.length} items</p>
                    <div className={classes.cars__topBlock__leftBlock__imgBlock}>
                        <img
                            src={filterImg}
                            alt="filter"
                            title="Filter"
                            onClick={handleFilterVisibility}
                        />
                    </div>
                </div>

                <div className={classes.cars__topBlock__sortingBlock}>
                    <SortSelector
                        setTypeOfSorting={setTypeOfSorting}
                        sortingTypesArray={[...sortingTypes]}
                    />
                    {tableTypesBlock}
                </div>
            </div>
            <div className={`${classes.cars__row} ${classes[tableClass]}`}>
                {carsBlock}
            </div>
            {carsBlock.length < carsFullBlock.length
                &&
                <button
                    className="universal-button"
                    onClick={handleLoadLimit}
                >
                    Load more
                </button>
            }
        </div>
    );
};

export default CarsArea;