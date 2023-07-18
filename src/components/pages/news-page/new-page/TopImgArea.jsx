import React, {useState} from 'react';
import classes from "./TopImgArea.module.css";

const TopImgArea = ({currentNew}) => {
    const [isLoadedImg, setIsLoadedImg] = useState(false);

    const handleLoadedImg = ()=> {
        setIsLoadedImg(true);
    };


    return (
        <div className={classes.top}>
            <div className={classes.top__imgBlock}>
                <img
                    src={currentNew.img}
                    className={classes.top__imgBlock__img}
                    style={{opacity: isLoadedImg ? 1: 0}}
                    loading="lazy"
                    onLoad={handleLoadedImg}
                />
                {!isLoadedImg &&
                    <img
                        src={currentNew.imgSmall}
                        className={classes.top__imgBlock__imgSmall}
                        loading="lazy"
                    />
                }
            </div>
        </div>
    );
};

export default TopImgArea;