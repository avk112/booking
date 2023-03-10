import React, {useEffect, useState} from 'react';
import UniversalDropInput from "../../../UniversalDropInput";
import cities from "../../../../data/cities";
import classes from "./BookingArea.module.css";
import downArrowImg from "../../../../image/down.png";
import checkboxesData from "../../../../data/bookingCheckboxes";
import DateRangePicker from "@wojtekmaj/react-daterange-picker/dist/entry.nostyle";
import HiddenScreen from "../../../HiddenScreen";
import FormBookingConfirm from "../../../FormBookingConfirm";
import {useDispatch, useSelector} from "react-redux";
import {getAll, setData} from "../../../../redux/quickSearchSlice";
import {Link} from "react-router-dom";
import {getUser} from "../../../../redux/userSlice";
import FormAcceptation from "../../../FormAcceptation";


const BookingArea = ({car,hidden=false}) => {
    class Option {
        constructor(option={}, checked=false) {
            return {...option, checked}
        }
    }

    class Destinations {
        constructor(startCity="", finishCity="") {
            this.startCity=startCity;
            this.finishCity=finishCity;
        }
    }

    const dispatch = useDispatch();
    const quickSearchFields = useSelector(getAll);

    const isLogged = useSelector(getUser)?.username;
    const [isVisiblePriceList, setIsVisiblePriceList] = useState(false);
    const [isVisibleHiddenScreen, setIsVisibleHiddenScreen] = useState(false);
    const [checkBoxes, setCheckBoxes] =useState(checkboxesData.map(item=>{
        const newOptions = item.options.map(unit=>new Option(unit));
        return {...item, options: newOptions}
    }));
    const [destinations, setDestination] = useState(new Destinations());
    const dateValue = !quickSearchFields.date ? quickSearchFields.date : [new Date(quickSearchFields.date[0]), new Date(quickSearchFields.date[1])]
    const [bookingPrice, setBookingPrice] = useState(0);
    const [bookedDays, setBookedDays] = useState(0);
    const [resetInputs, setResetInputs] = useState(Date.now());
    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    const closeHiddenScreen=()=> {
        setIsVisibleHiddenScreen(false);
        setBookingConfirmed(false);
    };

    const handlePriceList = ()=> {
        setIsVisiblePriceList(prev=>!prev);
    };

    const handleDestinations = (e)=> {
        const cityType = e.target.name;
        const value = e.target.value;
        setDestination(prev=>({...prev, [cityType]: value}));
    }

    const handleCheckboxes = (e, drop=false)=> {
       let value="";
       let name="";
       let checked=false;
       if(!drop) {
           value = Number(e.target.value);
           name = e.target.name;
           checked = e.target.checked;
       }

        setCheckBoxes(prev=>prev.map(item=>{
            const newOptions = item.options.map(unit=>{
                if(drop){
                    return {...unit, checked: false}
                }
                if(!drop){
                return unit.name===name ? {...unit, checked: checked} : unit;
                }
            });
            return {...item, options: newOptions}
        }));

        return setBookingPrice(prev=>{
                return checked ? prev + value : prev - value;
        })
    }

    const changeDate = (value)=> {
        const newValue = value ? value.map(item=> item.getTime()) : value;
        dispatch(setData({key:"date", data:newValue}))
    }

    const handleDatePicker = (value)=> {
        let totalPrice=0;
        let totalBookedDays=0;
        if(value){
            const price = car.price;
            const dayLength= 1000*60*60*24;
            const bookingPeriod = value?.[1].getTime() - value?.[0].getTime();
            totalBookedDays = Math.round(bookingPeriod/dayLength);
            const startDay = new Date(value?.[0].getTime());

            let daysNames = {};

            for(let i=0; i<totalBookedDays; i++){
                const currentDayNumber=(new Date( startDay.getTime()+ (dayLength*i))).getDay();
                 daysNames[currentDayNumber] ? daysNames[currentDayNumber]=daysNames[currentDayNumber]+1 : daysNames[currentDayNumber]=1;
            }

           for(let key in daysNames){
               if(Number(key)===5 || Number(key)===0){
                   totalPrice=totalPrice + Math.round(price * 1.2) * daysNames[key];
               }else if(Number(key)===6){
                   totalPrice=totalPrice + Math.round(price * 1.1) * daysNames[key];
               }else{
                   totalPrice=totalPrice + price *  daysNames[key];
               }
           }}

       changeDate(value);
       setBookedDays(totalBookedDays);
       setBookingPrice(totalPrice);
    };

    const dropBookingData = (dropDate=true)=> {
        const newDate = dropDate ? undefined : dateValue;
        setResetInputs(Date.now());
        handleCheckboxes(undefined, true);
        handleDatePicker(newDate);
        setDestination(new Destinations());
    }

    const sendForm = (e)=> {
        e.preventDefault();
        setIsVisibleHiddenScreen(true);
    }

    const checkedAdditionalOptions = checkBoxes.map(item=>{
        let arr = [];
        item.options.map(unit=>{
            return unit.checked && arr.push(unit.name);
        });
        return arr;
    }).flat();

    const checkboxesBlock = checkBoxes.map(item=>{
        const checkboxOptions = item.options.map(unit=>{
            return <div key={unit.id} className={classes.booking__form__checkboxBlock__options__item}>
                    <label >
                        <input
                            type="checkbox"
                            name={unit.name}
                            value={unit.price}
                            checked={unit.checked}
                            onChange={handleCheckboxes}
                        />
                        <span
                            className={classes.booking__form__checkboxBlock__slider}
                        ></span>
                    </label>
                    <div className={classes.booking__form__checkboxBlock__options__item__attributes}>
                        <span>{unit.name}</span>
                        <span><b>${unit.price}</b> - {unit.period}</span>
                    </div>
                </div>
        })
        return <div key={item.id} className={classes.booking__form__checkboxBlock}>
                    <h2 className={classes.booking__form__checkboxBlock__title}>
                        {item.name}
                    </h2>
                    <div className={classes.booking__form__checkboxBlock__options}>
                        {checkboxOptions}
                    </div>
                </div>
    })


    useEffect(()=>{
        dropBookingData(false)
    }, [car]);



    return (car?.name
            ?
            <div className={classes.booking} style={hidden ? { zIndex: "70", padding: "2em", height: "95vh"} : {}}>
               <HiddenScreen
                    insertBlock={bookingConfirmed
                        ?<FormAcceptation
                            message="Your booking is confirmed! Have a nice trip!"
                            className={classes.booking__acceptationForm}
                        />
                        :<FormBookingConfirm
                            carName={car?.name}
                            totalPrice={bookingPrice}
                            additionalOptions={checkedAdditionalOptions}
                            totalDays={bookedDays}
                            destinations={destinations}
                            resetBooking={resetInputs}
                            bookingDates = {dateValue}
                            breakBooking={dropBookingData}
                            setBookingConfirmed={setBookingConfirmed}
                        />}
                    isVisible={isVisibleHiddenScreen}
                    handleScreenStatus={closeHiddenScreen}
               />
                <h2 className={classes.booking__title}>Starting From</h2>
                <p>From ${car?.price} / Per Day</p>
                <div className={classes.booking__pricesBlock}>
                    <div
                        className={classes.booking__pricesBlock__headerBlock}
                        onClick={handlePriceList}
                    >
                        <h4 className={classes.booking__pricesBlock__headerBlock__title}>
                            Pricing Info
                        </h4>
                        <img src={downArrowImg}/>
                    </div>
                    <div
                        className={classes.booking__pricesBlock__dropdownPriceList}
                        style={{maxHeight: isVisiblePriceList ? "14em" : "0px"}}
                    >
                        <h4 className={classes.booking__pricesBlock__dropdownPriceList__title}>
                            Day based pricing: {car?.name}
                        </h4>
                        <ul className={classes.booking__pricesBlock__dropdownPriceList__list}>
                            <li>
                                Monday-Thursday - <b>${car?.price}</b>
                            </li>
                            <li>
                                Friday, Sunday - <b>${Math.floor(car.price*1.2)}</b>
                            </li>
                            <li>
                                Saturday - <b>${Math.floor(car.price*1.1)}</b>
                            </li>
                        </ul>
                        <h4 className={classes.booking__pricesBlock__dropdownPriceList__title}>
                            Hourly based pricing
                        </h4>
                        <p>1-23 Hours: <b>${Math.floor((car.price/24)*1.25)}</b></p>
                    </div>
                </div>
                <form className={classes.booking__form} onSubmit={sendForm}>
                    <UniversalDropInput
                        name="startCity"
                        title="Pickup Location*"
                        data={car?.city.map((item,index)=>({id:index, name:item}))}
                        resetInput={resetInputs}
                        handleChange = {handleDestinations}
                        className={classes}
                    />
                    <UniversalDropInput
                        name="finishCity"
                        title="Drop Location*"
                        data={[...cities]}
                        resetInput={resetInputs}
                        handleChange = {handleDestinations}
                        className={classes}
                    />
                    <div  className={`universalForm__item ${classes.dateItem}`}>
                        <h2 className={`universalForm__item__subtitle ${classes.dropItem__subtitle}`}>
                            Choose date*
                        </h2>
                        <DateRangePicker
                            minDate={new Date()}
                            onChange={handleDatePicker}
                            value={dateValue}
                            className={`${classes.dateRangePicker}`}
                            locale="uk-UA"
                            format="dd-MM-y"
                        />
                    </div>
                    {checkboxesBlock}
                    <h3 className={classes.booking__form__totalPrice}>Total price ${bookingPrice}</h3>
                    {!isLogged &&
                        <label htmlFor="bookingBtn">
                            <Link to="/login">Log in for booking</Link>
                        </label>
                    }
                    <button
                        name="bookingBtn"
                        className={`universal-button ${classes.booking__form__bookingBtn}`}
                        disabled={!isLogged || !dateValue || !destinations.startCity || !destinations.finishCity}
                    >
                            Book Now
                    </button>
                </form>

            </div>
            :
            <h2>Oops.. Such car doesn't exist</h2>
    );
};

export default BookingArea;