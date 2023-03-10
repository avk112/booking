import React, {useEffect, useState} from 'react';
import filtersData from "../../data/filters";

const useFilter = (filterFields, arrayToFilter, sorting="price") => {
    class Filter {
        constructor(filter={}, checkedInputs=[]){ //constructor for adding checkedInputs key
            return {...filter, checkedInputs}
        }
    }

    const preSortedArray = arrayToFilter && arrayToFilter.sort((a,b)=>b[sorting]-a[sorting]); //initialize data array with default sorting
    const [filteredArray, setFilteredArray] = useState([]); //state for filtered data
    const filters = filtersData.filter(item=>{
        if(filterFields.length>0){
            return filterFields.some(field=>item.name===field) //create array of filter fields received in props
        }else{
            return item.name;
        }
    });


    const [filterInputs, setFilterInputs] = useState(filters.map(item=>{
        return (item.type==="text") ? new Filter(item, "") : new Filter(item); //creating state of standartized filters depending on type of data in checkedInputs (string or array)
    }));


    const handleInputs = (e, isNumber=false)=> {
        const type = e.target.type;
        const name =e.target.name;
        const checked=e.target.checked;
        const value= isNumber ? Number(e.target.value) : e.target.value;

        if(type==="checkbox" || type==="radio") {
            if (checked) {
                setFilterInputs(prev => prev.map(item => {
                    const valueToInsert = type === "radio" ? [value] : [...item.checkedInputs, value];
                    return item.name === name ? {...item, checkedInputs: valueToInsert} : item //hold only one value (if type is radio) or many (if checkbox)
                }));
            }
            if (!checked) {
                setFilterInputs(prev => prev.map(item => {
                    return item.name === name
                        ?
                        {...item, checkedInputs: item.checkedInputs.filter(input => input !== value)} //delete unchecked value from array
                        :
                        item
                }));
            }
        }
        if(type==="text"){
            setFilterInputs(prev => prev.map(item => {
                return item.name=== name ? {...item, checkedInputs: value} : item //hold string in checkedInputs if type is text
            }));
        }
        if(type==="select-one"){
                setFilterInputs(prev => prev.map(item => {
                const valueToInsert = value ? [value] : [];
                return item.fieldName=== name ? {...item, checkedInputs: valueToInsert} : item //hold only one value in array of checkedInputs or empty array
            }));
        }

    };

    const filterCars = ()=> {
        if (preSortedArray) { //run only if presortedArray not empty
            const searchField= filterInputs.find(item=>item.name==="search").checkedInputs; //always check search field first
            let array = preSortedArray.filter(unit => unit.name.toUpperCase().includes(searchField.toUpperCase())); //first find units filtered by search field
            let assembledFilter = []; //complicated filter,
            const unitedSelectors = {};
            const flatSelectors = [];
            filterInputs.map(field => {
                    if(!field.united){ //some filter fields (for select-one as well) may have "united" attribute.It means they display separated, but filter the data by same field (fieldName key)
                        assembledFilter.push(field)
                    }else {
                         unitedSelectors[field.name] ? unitedSelectors[field.name].push(field.checkedInputs) : unitedSelectors[field.name]= [field.checkedInputs]; //united filters values are pushed to united array in a key===name of field
                    }
                }
            );

            for(let key in unitedSelectors){
                flatSelectors.push(new Filter({
                    name: key,
                    lazyMatch: true //attribute signs that at least one value in checkedInputs must be contained in unit's field
                }, unitedSelectors[key].flat())) //for every key in unitedSelectors create normalized Filter. Flat values for checkedInputs, because no internal arrays (even empty) allowed
            }

           assembledFilter= assembledFilter.concat(flatSelectors); //assemble filters

            assembledFilter.map(item => {
                if (item.name !== "search" && item.checkedInputs.length > 0 && !item.checkedInputs.some(i => i === "Any")) { //process filter field only if not "search" and not empty
                    if (item.checkedInputs.every(position => isNaN(position))) {//if array of checkedInputs has no numbers
                        if (!item?.lazyMatch) { //and if all checkedInputs values must be contained in unit's field
                            array = array.filter(unit => {
                                return item.checkedInputs.every(option => unit[item.name].includes(option)); //strict comparing. All checkedInputs values must be contained in unit's field
                            })
                        } else {
                            array = array.filter(unit => {
                                return item.checkedInputs.some(option => unit[item.name].includes(option)); //at least one checkedInputs values must be contained in unit's field
                            })
                        }
                    } else { //if checkedInputs contains numbers
                        array = array.filter(unit => (unit[item.name] === Number(item.checkedInputs.join())));
                    }
                }
            })

            setFilteredArray(array);
        }
    }

    const clearAll = ()=> { //clear values of all filters
        setFilterInputs(prev=>prev.map(item=>{
            const value = item.name === "search" ? "" : [];
            return {...item, checkedInputs: value};
        }))
    }

    useEffect(()=>{
        filterCars();
    }, [filterInputs]);

    return {handleInputs, clearAll, filterInputs, filteredArray};
};

export default useFilter;