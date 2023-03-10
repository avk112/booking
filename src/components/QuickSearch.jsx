import React, {useState,useEffect} from 'react';
import citiesData from "../data/cities";
import DateRangePicker from "@wojtekmaj/react-daterange-picker/dist/entry.nostyle";
import UniversalDropInput from "./UniversalDropInput";
import {useDispatch, useSelector} from "react-redux";
import {getAll, setData} from "../redux/quickSearchSlice";


const QuickSearch = ({handleChange=()=>{}, resetInputs=""}) => {
    const dispatch = useDispatch();
    const quickSearchFields = useSelector(getAll);
    const cities = [...citiesData].sort((a,b)=>a.name>b.name ? 1 : -1);
    const dateValue = !quickSearchFields.date ? quickSearchFields.date : [new Date(quickSearchFields.date[0]), new Date(quickSearchFields.date[1])];


    const changeQuickField = (e)=>{
            const name=e.target.name;
            const value = e.target.value;
            dispatch(setData({key:name, data:value}));
            handleChange(e);
    }

    const changeDate = (value)=> {
        const newValue = value ? value.map(item=> item.getTime()) : value;
        dispatch(setData({key:"date", data:newValue}))
    }

    const initiateFilter = ()=>{
        for(let key in quickSearchFields){
            key!=="date" && handleChange({
                target: {
                    type: "select-one",
                    name:key,
                    value: quickSearchFields[key],
                    checked: false
                }
            })
        }
    }


    useEffect(()=>{
        initiateFilter();
    }, []);


    return <>
            <UniversalDropInput
                name="startCity"
                title="Where you from"
                data={[...cities]}
                defaultSelectedValue={quickSearchFields.startCity}
                resetInput={resetInputs}
                handleChange={changeQuickField}
            />
            <UniversalDropInput
                name="finishCity"
                title="Where you go"
                data={[...cities]}
                defaultSelectedValue={quickSearchFields.finishCity}
                resetInput={resetInputs}
                handleChange={changeQuickField}
            />
        <div  className="universalForm__item">
             <h2 className="universalForm__item__subtitle">
                 Choose date
             </h2>
            <DateRangePicker
                minDate={new Date()}
                onChange={changeDate}
                value={dateValue}
                className="universalForm__item__dataRangePicker"
            />
        </div>
        </>
};

export default QuickSearch;