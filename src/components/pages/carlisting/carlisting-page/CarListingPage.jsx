import React, {useState, useEffect} from 'react';
import classes from "./CarListingPage.module.css";
import carsData from "../../../../data/cars";
import useFilter from "../../../hooks/useFilter";
import sortingTypes from "../../../../data/sortingTypes";
import FiltersArea from "./FiltersArea";
import CarsArea from "./CarsArea";
import HiddenScreen from "../../../HiddenScreen";
import {useDispatch} from "react-redux";
import {dropData} from "../../../../redux/quickSearchSlice";

const CarListingPage = () => {
    const dispatch = useDispatch();

    const limit = 6;
    const [isVisibleFilterArea, setIsVisibleFilterArea] = useState(false);
    const [isVisibleHiddenScreen, setIsVisibleHiddenScreen] = useState(false);
    const [loadLimit, setLoadLimit] = useState(limit);
    const [typeOfSorting, setTypeOfSorting] = useState(sortingTypes.find(item=>item.isActive));
    const {handleInputs, clearAll, filterInputs, filteredArray} = useFilter(["search","features","class","doors", "fuel","gearBox","seat", "city", "date"], [...carsData], typeOfSorting.fieldName);

    const handleClearFilters = ()=> {
        dispatch(dropData());
        clearAll();
        setLoadLimit(limit);
    }

    const handleFilters = (e, isNumber=false)=> {
        handleInputs(e, isNumber);
        setLoadLimit(limit);
    }

    const handleLoadLimit = ()=> {
        setLoadLimit(prev=>prev+limit);
    };

    const handleScreenStatus = ()=> {
        setIsVisibleHiddenScreen(prev=>!prev);
    }

    const handleResize = ()=> {
        const newIsVisibleFilter = window.screen.width > 540 ? true : false;
        setIsVisibleFilterArea(newIsVisibleFilter);
    };


    const filtersBlock = <FiltersArea
                            filterInputs={filterInputs}
                            handleFilters={handleFilters}
                            handleClearFilters={handleClearFilters}
                        />;


    useEffect(()=>{
        window.scroll(0, 0)
        handleResize();
        window.addEventListener('resize', handleResize);

        return ()=> window.removeEventListener("resize",handleResize);
    }, []);



    return <div className={`universal-container ${classes.carListing}`}>
                {isVisibleFilterArea
                    ? filtersBlock
                    : <HiddenScreen
                            justify="flex-start"
                            insertBlock={filtersBlock}
                            isVisible={isVisibleHiddenScreen}
                            handleScreenStatus={handleScreenStatus}
                        />
                }
                <CarsArea
                    filteredArray={filteredArray}
                    loadLimit={loadLimit}
                    handleLoadLimit={handleLoadLimit}
                    handleFilterVisibility={handleScreenStatus}
                    typeOfSorting={typeOfSorting}
                    setTypeOfSorting={setTypeOfSorting}
                />
            </div>

};

export default CarListingPage;