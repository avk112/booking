import React, {useEffect, useState} from 'react';
import classes from "./CarPage.module.css";
import carsData from "../../../../data/cars";
import {useLocation, useParams} from "react-router-dom";
import useFilter from "../../../hooks/useFilter";
import BookingArea from "./BookingArea";
import PropertiesArea from "./PropertiesArea";
import DescriptionArea from "./DescriptionArea";
import RelatedCarsArea from "./RelatedCarsArea";
import FeaturesAndReviewsArea from "./FeaturesAndReviewsArea";
import HiddenScreen from "../../../HiddenScreen";

const CarPage = () => {
    const {name} = useParams();
    const location=useLocation();
    const currentLocation = location.pathname.replace(name,"");
    const [car, setCar] = useState();
    const [isHiddenBookingArea, setIsHiddenBookingArea]= useState();
    const [isVisibleHiddenScreen, setIsVisibleHiddenScreen] = useState(false);
    const relatedCars = carsData.filter(item=>(item.class === car?.class && item.id !== car?.id));
    relatedCars.length = relatedCars.length>3 ? 3 : relatedCars.length;
    const {filterInputs} = useFilter(["class", "doors", "fuel", "gearBox", "luggage", "mileage", "seat", "rating"]);

    const handleResize = ()=> {
        const newIsHiddenBooking = window.screen.width > 540 ? false : true;
        setIsHiddenBookingArea(newIsHiddenBooking);
    };

    const handleScreenStatus = ()=> {
        setIsVisibleHiddenScreen(prev=>!prev);
    }

    useEffect(()=>{
        window.scroll(0, 0);
        setCar(carsData.find(item=>item.url===name));
        handleResize();
        window.addEventListener('resize', handleResize);

        return ()=> window.removeEventListener("resize",handleResize);
    },[name]);


    return (car?.name
            ?
            <div className={`universal-container ${classes.carPage}`}>
                <div className={classes.carPage__main}>
                    <div className={classes.carPage__main__info}>
                        <DescriptionArea
                            car={car}
                        />
                        <PropertiesArea
                            car={car}
                            availableFilters={filterInputs}
                        />
                        <FeaturesAndReviewsArea
                            car={car}
                            setCar={setCar}
                        />
                    </div>
                    {isHiddenBookingArea
                        ? <>
                            <HiddenScreen
                                // justify="flex-start"
                                insertBlock={<BookingArea car={car} hidden={isHiddenBookingArea}/>}
                                isVisible={isVisibleHiddenScreen}
                                handleScreenStatus={handleScreenStatus}
                            />
                            <button
                                className={`universal-button ${classes.carPage__main__bookingBtn}`}
                                onClick={handleScreenStatus}
                            >
                                Book now
                            </button>
                           </>
                        : <BookingArea car={car}/>
                    }
                </div>
                <RelatedCarsArea
                    relatedCars={relatedCars}
                    currentLocation={currentLocation}
                />
            </div>
            :
            <h2>Oops.. Such page doesn't exist</h2>
    );
};

export default CarPage;