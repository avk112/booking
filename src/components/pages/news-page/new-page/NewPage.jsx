import React, {useEffect, useState} from 'react';
import classes from "./NewPage.module.css";
import {useLocation, useParams} from "react-router-dom";
import newsData from "../../../../data/news";
import Comment from "../../../Comment";
import TopImgArea from "./TopImgArea";
import PostArea from "./PostArea";
import RelatedPostsArea from "./RelatedPostsArea";

const NewPage = () => {
    const {singleNew} = useParams();
    const location=useLocation();
    const currentLocation = location.pathname.replace(singleNew,"");
    const [currentNew, setCurrentNew] = useState();
    const relatedNews= newsData.filter(item=>{
        return item.category.some(unit=>{
            return currentNew?.category.includes(unit) && item.name!==currentNew?.name
        })
    });
    relatedNews.length = relatedNews.length>3 ? 3 : relatedNews.length;

    useEffect(()=>{
        window.scroll(0, 0);
        setCurrentNew(newsData.find(item=>item.url===singleNew));
    }, [singleNew])


    return (currentNew?.name
        ?
        <>
            <TopImgArea
                currentNew={currentNew}
            />
            <div className={classes.dividiveBlock}>
            </div>
            <div className={`universal-container ${classes.newPage}`}>
                <div className={classes.newPage__main}>
                    <PostArea
                        currentNew={currentNew}
                        allNews={newsData}
                    />
                    <RelatedPostsArea
                        relatedPosts={relatedNews}
                        currentLocation={currentLocation}
                    />
                    <Comment
                    itemToComment={currentNew}
                    setItemToComment={setCurrentNew}
                    rating={false}
                />
                </div>
            </div>
        </>
        :
            <h2>Ooops... No page found!</h2>
    );
};

export default NewPage;