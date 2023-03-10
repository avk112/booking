import React, {useState} from 'react';
import classes from "./PreviewArea.module.css";
import carsData from "../../../data/cars";
import {Link} from "react-router-dom";

const PreviewArea = () => {
    const popularCars = carsData.filter(item=> item.id ===3 || item.id ===4 || item.id ===6 || item.id ===9 || item.id ===10);
    const recentCars = carsData.filter(item=> item.id ===1 || item.id ===4 || item.id ===5|| item.id ===10 || item.id ===12);
    const [currentCar, setCurrentcar] = useState(popularCars[0]);
    const [previewAppearence, setPreviewAppearence] = useState(undefined);
    const [rowAppearence, setRowAppearence] = useState(undefined);
    const [isActivePopularRow, setIsActivePopularRow] = useState(true);

    const currentRow = isActivePopularRow ? popularCars : recentCars;
    const tittlePopularColor= isActivePopularRow ? "#ff992e" : "#718096";
    const tittleRecentColor= !isActivePopularRow ? "#ff992e" : "#718096";

    const handleCurrentRow = (popular=true)=> {
        let animation=false;
        if(!popular && isActivePopularRow){
            setIsActivePopularRow(false);
            animation=true;
        }
        if(popular && !isActivePopularRow){
            setIsActivePopularRow(true);
            animation=true;
        }
        if(animation){
            setRowAppearence("appear");
            setTimeout(()=>{
                setRowAppearence(undefined);
            }, 1000)
        }
    };

    const handleCurrentCar = (id)=> {
        if(id!==currentCar.id) {
            setPreviewAppearence("appear");
            setCurrentcar(carsData.find(item => item.id === id));
            setTimeout(() => {
                setPreviewAppearence(undefined);
            }, 1000);
        }
    }

    const carsBlock = currentRow.map(item=> {
        return <div key={item.id}
                    className={`${classes.previewArea__interactiveBlock__row__item} ${classes[rowAppearence]}`}
                    onClick={()=>handleCurrentCar(item.id)}
                >
                    <img src={item.img}/>
                    <div className={classes.previewArea__interactiveBlock__row__item__info}>
                        <h4 className={classes.previewArea__interactiveBlock__row__item__info__title}>
                            {item.name}
                        </h4>
                        <p>{item.seat} - Seater Car</p>
                        <h3 className={classes.previewArea__interactiveBlock__row__item__info__price}>
                            ${item.price}/day
                        </h3>
                    </div>
                </div>
    });


    return (
        <div className={`universal-container ${classes.previewArea} `}>
            <Link to={`car-listing/${currentCar.url}`} className={classes.previewArea__previewBlock}>
                    <img className={classes[previewAppearence]} src={currentCar.img}/>
            </Link>
            <div className={classes.previewArea__interactiveBlock}>
                <div className={classes.previewArea__interactiveBlock__headers}>
                    <h3 className={classes.previewArea__interactiveBlock__headers__title}
                        style={{color: tittlePopularColor}}
                        onClick={()=>handleCurrentRow()}
                    >
                        Popular Cars
                    </h3>
                    <h3 className={classes.previewArea__interactiveBlock__headers__title}
                        style={{color: tittleRecentColor}}
                        onClick={()=>handleCurrentRow(false)}
                    >
                        Recent Cars
                    </h3>
                </div>
                <div className={classes.previewArea__interactiveBlock__row}>
                    {carsBlock}
                </div>
            </div>
        </div>
    );
};

export default PreviewArea;