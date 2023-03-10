import React from 'react';
import starImg from "../image/star.png";
import starOutline from "../image/star-outline.png";

const Rating = ({rating, className}) => {
    console.log(rating)
    const mapRating = (rating)=> {
        const maxRate=5;
        const arr=[];
        for(let i=0; i < maxRate; i++){
            arr.push(<img key={i} src={i<rating ? starImg : starOutline}/>);
        }

        return arr;
    };


    return (
        <div className={`universal-rating ${className}`}>
            {mapRating(rating)}
        </div>
    );
};

export default Rating;