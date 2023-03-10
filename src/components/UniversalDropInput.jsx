import React, {useEffect, useState} from 'react';
import downArrow from "../image/down.png";

const UniversalDropInput = ({defaultSelectedValue="", title="", name="", type="text", data=[], handleChange=()=>{}, className, resetInput}) => {
    const sortedData= data.sort((a,b)=>a.name>b.name ? 1 : -1);
    const [availableData, setAvailableData] = useState(sortedData);
    const [selectedItem, setSelectedItem] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [value, setValue] = useState("");

    const handleVisible = ()=> {
        setIsVisible(prev=>!prev);
        setValue("");
        setAvailableData(sortedData);
    }

    const handleInput = (e)=>{
        const newValue = e.target.value;
        const filteredData = sortedData.filter(item=>item.name.toUpperCase().includes(newValue.toUpperCase()));
        setValue(newValue)
        setAvailableData(filteredData);
    };

    // const handleSelect = (e)=> {
    //     const newValue = e.target.value;
    //     setSelectedItem(newValue);
    //     handleVisible(e);
    //     handleChange(e);
    // };

    const handleSelect = (value="")=> {
        const e={
            target:{
                value:value,
                name:name,
                checked:true,
                type:"select-one",
        }};
        const newValue = value;
        setSelectedItem(newValue);
        handleVisible(e);
        handleChange(e);
    };


    // const optionsBlock = availableData.length > 0
    //     ?
    //     availableData.map((item)=>{
    //         return <option key={item.id} value={item.name}>{item.name}</option>
    //     })
    //     :
    //     <option disabled value="">No results found</option>;
    const optionsBlock = availableData.length > 0
        ?
        availableData.map((item)=>{
            return <span key={item.id} onClick={()=>handleSelect(item.name)}>{item.name}</span>
        })
        :
        <option disabled value="">No results found</option>;

    useEffect(()=>{
        setSelectedItem(defaultSelectedValue);
        setValue("");
    }, [resetInput]);



    return (
        <div  className={`universalForm__item ${className?.dropItem}`}>
            <h2 className={`universalForm__item__subtitle ${className?.dropItem__subtitle}`}>
                {title}
            </h2>
            <div className="universalForm__item__selectBlock">
                <div className="universalForm__item__selectBlock__titleBlock"
                     onClick={() => handleVisible(name)}>
                    <h3 className={`universalForm__item__selectBlock__titleBlock__title ${className?.dropItem__selectBlock__titleBlock__title}`}>
                        {!selectedItem ? "Select Location" : selectedItem}
                    </h3>
                    <img src={downArrow}/>
                </div>
                <div className="universalForm__item__selectBlock__dropdownBlock"
                     style={{maxHeight: isVisible ? "70em" : 0}}>
                    <input
                        type={type}
                        name={name}
                        value={value}
                        placeholder="Start typing the city"
                        onChange={handleInput}
                    />
                    {/*<select name={name} value={selectedItem} size="6" onChange={handleSelect}>*/}
                    {/*    <option value="">None</option>*/}
                    {/*    {optionsBlock}*/}
                    {/*</select>*/}
                    <div className="universalForm__item__selectBlock__dropdownBlock__select">
                        <span  onClick={()=>handleSelect()}>None</span>
                        {optionsBlock}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UniversalDropInput;