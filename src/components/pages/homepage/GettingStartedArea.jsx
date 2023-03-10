import React, {useRef, useState} from 'react';
import classes from "./GettingStartedArea.module.css";
import faqData from "../../../data/gettingStarted";
import minus from "../../../image/minus.png";
import plus from "../../../image/plus.png";

const GettingStartedArea = () => {
    const [faqList, setFaqList] = useState(faqData.map(item=>({...item, isVisible: false})));
    const myRef = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleVisible = (id, index)=> {
        setFaqList(prev=>prev.map(item=>{
            return item.id===id ? {...item, isVisible: !item.isVisible} : {...item, isVisible: false};
        }));
    }

    const itemsBlock = faqList.map((item, index)=>{
        return <div
                    key={item.id}
                    className={classes.gettingStartedArea__row__item}
                    style={{maxHeight: item.isVisible && "calc(9.6em + "+myRef[index].current.clientHeight*1.1+"px"}}
                    onClick={()=>handleVisible(item.id, index)}
        >
                    <div className={classes.gettingStartedArea__row__item__titleBlock}>
                        <h3 className={classes.gettingStartedArea__row__item__titleBlock__title}>
                            {item.title}
                        </h3>
                        <img src={item.isVisible ? minus : plus} />
                    </div>
                    <div className={classes.gettingStartedArea__row__item__textBlock} >
                        <p ref={myRef[index]}>
                            {item.text}
                        </p>
                    </div>
                </div>
    })

    return (
        <div className={`universal-container ${classes.gettingStartedArea}`}>
            <h1 className="universal-container__header" >Getting Started</h1>
            <p className="universal-container__subheader" >FAQ</p>
            <div className={classes.gettingStartedArea__row}>
                {itemsBlock}
            </div>
        </div>
    );
};

export default GettingStartedArea;