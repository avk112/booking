import React, {useEffect} from 'react';
import classes from "./NewsPage.module.css";
import newsData from "../../../../data/news";
import {Link} from "react-router-dom";
import usePagination from "../../../hooks/usePagination";
import UniversalBanner from "../../../UniversalBanner";
import Breadcrumbs from "../../../Breadcrumbs";

const NewsPage = () => {
    const sortedNews = [...newsData].sort((a,b)=>b.date- a.date);
    const {pagination, currentSection} = usePagination(sortedNews, 3, 2);
    const title="News";

    const newsBlock = currentSection.map(item=>{
        return <div key={item.id} className={classes.newsPage__item}>
                    <img src={item.img}/>
                    <Link to={item.url}>
                        <h3 className={classes.newsPage__item__title}>
                            {item.id} {item.name}
                        </h3>
                    </Link>
                    <div className={classes.newsPage__item__info}>
                        <span>{item.author}</span>
                        <span>|</span>
                        <span>{item.date.toLocaleDateString("uk-UA")}</span>
                    </div>
                    <p>
                        {item.title}
                    </p>
                    <Link to={item.url}>
                        <button className={`universal-button`}>
                            Continue
                        </button>
                    </Link>
                </div>
    });

    useEffect(()=>{
        window.scroll(0, 0)
    }, [currentSection]);


   return (
       <>
           <UniversalBanner
               title={title}
               innerBlock={ <Breadcrumbs/>}
           />
           <div className={`universal-container ${classes.newsPage}`}>
               {newsBlock}
               {pagination}
           </div>
       </>
   )
};

export default NewsPage;