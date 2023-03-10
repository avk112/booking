import React, {useEffect, useState} from 'react';
import starImg from "../image/star.png";
import starOutline from "../image/star-outline.png";

const UniversalRating = ({fixedValue="", reset, handleUserRating, className}) => {

    const [rating, setRating] = useState();

    const handleRating = (e)=> {
        if(!fixedValue) {
            const newRating = e.type === "mouseleave" ? 0 : Number(e.target.id);
            if (e.type === "click") {
                setRating({value: newRating, isFixed: true});
                handleUserRating(newRating); //sending rating value to upper component with callback function
            }
            if (!rating.isFixed) {
                setRating(prev => ({...prev, value: newRating}));
            }
        }
    };

    const mapRating = ()=> {
        const maxRate=5;
        const currentRating = fixedValue ? fixedValue : rating?.value;
        const arr=[];
        for(let i=0; i < maxRate; i++){
            arr.push(<img key={i} id={i+1} src={i<currentRating ? starImg : starOutline} onMouseEnter={handleRating} onClick={handleRating}/>);
        }

        return arr;
    };

    useEffect(()=>{
        setRating({
            value:fixedValue,
            isFixed:false
        })
    }, [reset]); //reset rating state to default when "reset" variable is changed (command from parent component)


    return (
        <div className={`universal-rating ${className}`} onMouseLeave={handleRating}>
            {mapRating()}
        </div>
    );
};

export default UniversalRating;