import React, {useState} from 'react';
import UniversalBanner from "../../UniversalBanner";
import Breadcrumbs from "../../Breadcrumbs";
import { Outlet } from 'react-router-dom';
import carsData from "../../../data/cars";

const CarListing = () => {
    const [title, setTitle] = useState("Car Listing");
    const handleTitle = (currentTitle)=> {
        const newTitle = currentTitle ? currentTitle : "Car Listing";
        setTitle(newTitle); //add this function as props to breadcrumbs if title is needed to be changeable
    }

    return <>
                <UniversalBanner
                    title={title}
                    innerBlock={ <Breadcrumbs data={carsData}/>}
                />
                <Outlet/>
            </>
};

export default CarListing;