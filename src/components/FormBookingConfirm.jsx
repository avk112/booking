import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../redux/userSlice";
import {addOrder} from "../redux/bookingSlice";

const FormBookingConfirm = ({carName="", totalPrice=0, totalDays=0, bookingDates=[], destinations={}, additionalOptions=[], resetBooking, breakBooking=()=>{}, setBookingConfirmed=()=>{}}) => {
    const dispatch = useDispatch();
    const user=useSelector(getUser);

    class FormFields {
        constructor(name="", email="") {
            this.name=name;
            this.email=email;
        }
    }

    const [formInputs, setFormInputs] = useState(new FormFields(user?.username, user?.email));
    // const [bookingConfirmed, setBookingConfirmed] = useState(false);

    const handleFormInputs = (e)=>{
        const name = e.target.id;
        const value= e.target.value;

        setFormInputs(prev=>({...prev,[name]: value })
        );
    }

    const confirmBooking = (e)=> {
        e.preventDefault();
        dispatch(addOrder({
            id: Date.now(),
            name: carName,
            price: totalPrice,
            days: totalDays,
            destinations: destinations,
            dates: bookingDates.map(item=>item.getTime()),
        }));
        setBookingConfirmed(true);
        setFormInputs(new FormFields());
        breakBooking();
    }

    const additionalOptionsBlock = additionalOptions.map((item,index)=>{
        return <li key={index}>
                    {item}
                </li>
    });

    useEffect(()=> {
            setFormInputs(new FormFields(user?.username, user?.email));
        }, [resetBooking])



    return (
        <form className="form-order" onSubmit={confirmBooking}>
            <ul className="form-order-ul">
                <li className="form-order-ul-li">
                    <h4>Your Car:</h4>
                    <span>{carName}</span>
                </li>
                <li className="form-order-ul-li">
                    <h4>Route:</h4>
                    <span>{destinations.startCity} - {destinations.finishCity}</span>
                </li>
                <li className="form-order-ul-li">
                    <h4>Total Days:</h4>
                    <span>{totalDays}</span>
                </li>
                <li className="form-order-ul-li">
                    <h4>Additional Options:</h4>
                    <ul>{additionalOptionsBlock}</ul>
                </li>
                <li className="form-order-ul-li">
                    <h4>Total Price:</h4>
                    <span>${totalPrice}</span>
                </li>
            </ul>
            <input
                type="text"
                id="name"
                value={formInputs.name}
                placeholder="Enter Your Name"
                onChange={handleFormInputs}
            />
            <input
                type="email"
                id="email"
                value={formInputs.email}
                placeholder="Enter Your Email"
                onChange={handleFormInputs}
            />
            <button>Confirm</button>
        </form>
    );
};

export default FormBookingConfirm;