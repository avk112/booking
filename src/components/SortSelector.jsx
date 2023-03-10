import React from 'react';
import {useState} from "react";

const SortSelector = ({setTypeOfSorting, sortingTypesArray}) => {
    const [sortSelector, setSortSelector] = useState(sortingTypesArray);


    const handleSortSelectors = (e)=> {
        const id = Number(e.target.value);
        const selector = sortSelector.find(item=>item.id===id);
        const fieldName=selector.fieldName;
        const byRising=selector.rise;
        setSortSelector(prev=>prev.map(item=>{
            return item.id===id ? {...item, isActive: true} : {...item, isActive: false}
        }));

        setTypeOfSorting({fieldName: fieldName, rise: byRising});
    };

    const sortSelectorBlock = sortSelector.map(item=>{
        return <option key={item.id} value={item.id}>
            {item.text}
        </option>
    });

    return (
        <select name="sort" value={sortSelector.find(item=>item.isActive).id} onChange={handleSortSelectors}>
            {sortSelectorBlock}
        </select>
    );
};

export default SortSelector;