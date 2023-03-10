import React, {useState} from 'react';
import classes from "./FeaturesAndReviewsArea.module.css";
import checkImg from "../../../../image/check.png";
import UniversalRating from "../../../UniversalRating";
import calendarImg from "../../../../image/calendar.png";
import Comment from "../../../Comment";

const FeaturesAndReviewsArea = ({car, setCar}) => {

    const [featuresAndReviews, setFeaturesAndReviews] = useState(true);
    const tittleFeaturesColor= featuresAndReviews ? "#ff992e" : "#718096";
    const tittleReviewsColor= !featuresAndReviews ? "#ff992e" : "#718096";

    const handleFeaturesAndReviews = (showFeatures=true)=> {
        if((showFeatures && !featuresAndReviews) || (!showFeatures && featuresAndReviews)){
            setFeaturesAndReviews(showFeatures);
        }
    };







    const featuresBlock = <div className={classes.featuresAndReviews__featuresBlock}>
        {car?.features.map((item, index)=>{
            return <div key={index} className={classes.featuresAndReviews__featuresBlock__item}>
                <img src={checkImg} alt="check"/>
                <span>{item}</span>
            </div>
        })}
    </div>;


    return (
        <div className={classes.featuresAndReviews}>
            <ul className={classes.featuresAndReviews__title}>
                <li style={{color: tittleFeaturesColor}}
                    onClick={()=>handleFeaturesAndReviews()}>
                    Features
                </li>
                <li style={{color: tittleReviewsColor}}
                    onClick={()=>handleFeaturesAndReviews(false)}>
                    Reviews
                </li>
            </ul>
            {featuresAndReviews
                ?
                featuresBlock
                :
                <Comment
                    itemToComment={car}
                    setItemToComment={setCar}
                />
            }
        </div>
    );
};

export default FeaturesAndReviewsArea;