import React from 'react';
import classes from "./PropertiesArea.module.css";

const PropertiesArea = ({car, availableFilters}) => {
    const propertiesBlock = availableFilters.map(item=>{
        if(item.name!=="city" && item.name!=="date" ){
            return <div key={item.id} className={classes.properties__item}>
                <img src={item.img} alt={item.name}/>
                <div className={classes.properties__item__info}>
                    <h6 className={classes.properties__item__info__title}>
                        {item.title}
                    </h6>
                    <p>{car?.[item.name]}</p>
                </div>
            </div>
        }
    });


    return (
        <div className={classes.properties}>
            {propertiesBlock}
        </div>
    );
};

export default PropertiesArea;