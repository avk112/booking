import React from 'react';
import cancel from "../image/cancel.png";
import {useState} from "react";

const HiddenScreen = ({justify="center", insertBlock,  isVisible=false, handleScreenStatus}) => {


    const [rootClasses, setRootClasses] = useState(["active-screen universal-hidden-screen"]);

    return (
        <div className={rootClasses}
             style={{display: !isVisible ? "none" : "flex", justifyContent: justify}}
        >
            <div className="universal-hidden-screen__background"
                 onClick={handleScreenStatus}
            >
                <img  className="universal-hidden-screen__cancel" src={cancel}/>
            </div>
            {insertBlock}
        </div>
    );
};

export default HiddenScreen;