import React, {useEffect} from 'react';
import classes from "./NewsPage.module.css";
import newsData from "../../../../data/news";
import usePagination from "../../../hooks/usePagination";
import UniversalBanner from "../../../UniversalBanner";
import Breadcrumbs from "../../../Breadcrumbs";
import ShortNew from "./ShortNew";

const NewsPage = () => {
    const sortedNews = [...newsData].sort((a,b)=>b.date- a.date);
    const {pagination, currentSection} = usePagination(sortedNews, 3, 2);
    const title="News";

    const newsBlock = currentSection.map(item=>{
        return <ShortNew
                key={item.id}
                item={item}
        />
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