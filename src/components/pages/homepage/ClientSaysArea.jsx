import React, {useEffect, useState} from 'react';
import classes from "./ClientSaysArea.module.css";
import clientsData from "../../../data/clients";
import leftArrow from "../../../image/l-arrow.png";
import rightArrow from "../../../image/r-arrow.png";
import UniversalRating from "../../UniversalRating";

const ClientSaysArea = () => {
    const clientsReviews=[...clientsData];
    const [carrouselSectionSize, setCarrouselSectionSize] = useState(0);
    const [slideSize, setSlideSize] = useState(0);
    const [rowPosition, setRowPosition] = useState(undefined);
    const [currentStart, setCurrentStart] = useState(0);
    const [slides, setSlides] = useState([]);
    const [moveStart, setMoveStart] = useState({
        x:0,
        time: 0
    });

    const changeSlides = (size=carrouselSectionSize, start)=> {
        let arr=[];
            for(let i=0; i < size*3; i++){
                if(start+i < clientsReviews.length){
                    arr.push(clientsReviews[start+i]);
                }else {
                    arr.push(clientsReviews[start+i - clientsReviews.length])
                }
            }

            setSlides(arr);
    }

    const moveCarrousel = (left=true)=> {
        if(!rowPosition) { //allow new sliding only if previous finished
            let newCurrentStart;
            if (left) {
                setRowPosition("moveLeft");
                newCurrentStart = currentStart + carrouselSectionSize < clientsReviews.length ? currentStart + carrouselSectionSize : 0;

            } else {
                setRowPosition("moveRight");
                newCurrentStart = currentStart - carrouselSectionSize < 0 ? clientsReviews.length - carrouselSectionSize : currentStart - carrouselSectionSize;
            }

            setCurrentStart(newCurrentStart);
            setTimeout(() => {
                changeSlides(undefined, newCurrentStart);
                setRowPosition(undefined);

            }, 1500);
        }
    };

    const startSwiping = (e)=> {
        setMoveStart({
            x: e.touches[0].clientX,
            time: e.timeStamp
        })
    };

    const endSwiping = (e)=> {
        const endX = e.changedTouches[0].clientX;
        const endTime = e.timeStamp;

        if((endTime-moveStart.time) <= 500){
            if((endX - moveStart.x ) >= 10){
               moveCarrousel(false);
            }
            if((endX - moveStart.x <=-10)){
               moveCarrousel();
            }
        }
    };

    const handleResize = ()=> {
        const newCarrouselSectionSize = window.screen.width > 540 ? 3 : 1;
        const newSlideSize = window.screen.width > 540 ? "10.22%" : "32.66%";
        const newCurrentStart = clientsReviews.length-newCarrouselSectionSize;
        setCarrouselSectionSize(newCarrouselSectionSize);
        setCurrentStart(newCurrentStart);
        setSlideSize(newSlideSize);
        changeSlides(newCarrouselSectionSize, newCurrentStart);
    };


    const rowInnerBlock = slides.map((item,index)=>{
           return <div key={index} className={classes.clientSaysArea__row__block__slide} style={{width: slideSize}}>
                        <div className={classes.clientSaysArea__row__block__slide__count}>
                            {item.id}/{clientsReviews.length}
                        </div>
                       <p>"...{item.text}..."</p>
                       <div className={classes.clientSaysArea__row__block__slide__bottomBlock}>
                           <img  className={classes.clientSaysArea__row__block__slide__bottomBlock__img} src={item.img}/>
                           <div className={classes.clientSaysArea__row__block__slide__bottomBlock__info}>
                               <h4 className={classes.clientSaysArea__row__block__slide__bottomBlock__info__position}>
                                   {item.position}
                               </h4>
                               <h3 className={classes.clientSaysArea__row__block__slide__bottomBlock__info__name}>
                                   {item.id}. {item.name}
                               </h3>
                               <UniversalRating
                                   fixedValue={item.rating}
                               />
                           </div>
                       </div>
               </div>
    })

    useEffect(()=> {
        handleResize();
        window.addEventListener('resize', handleResize);

        return ()=> window.removeEventListener("resize",handleResize);
    }, []);


    return (
        <div className={`universal-container ${classes.clientSaysArea}`}>
            <h1 className="universal-container__header" >What Client Says</h1>
            <p className="universal-container__subheader" >We take care about client's feedback</p>
            <div className={classes.clientSaysArea__row}>
                <div
                    className={`${classes.clientSaysArea__row__block} ${classes[rowPosition]}`}
                    onTouchStart={startSwiping}
                    onTouchEnd={endSwiping}
                >
                    {rowInnerBlock}
                </div>
                <div className={classes.clientSaysArea__row__buttonsBlock}>
                    <img src={leftArrow} onClick={()=>moveCarrousel(false)}/>
                    <img src={rightArrow} onClick={moveCarrousel}/>
                </div>
            </div>
        </div>
    );
};

export default ClientSaysArea;