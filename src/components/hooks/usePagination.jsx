import React, {useState} from 'react';
import leftArrow from "../../image/double-left-arrow.png";
import rightArrow from "../../image/double-right-arrow.png";

const usePagination = (arrayToPaginate, paginationLength=3, sectionLength=2, className="") => {
    const totalPages = Math.ceil(arrayToPaginate.length/sectionLength);
    const [currentPage, setCurrentPage]=useState(1);
    const paginationCheckPoints={
        start: (currentPage-1)*sectionLength+1,
        finish: currentPage*sectionLength
    };

    const currentSection = arrayToPaginate.filter((item,index)=>{
        return index+1 >= paginationCheckPoints.start && index+1<=paginationCheckPoints.finish;
    })

    const handlePagination = (pageToSwitch=1)=> {
        setCurrentPage(pageToSwitch);
    }

    const paginationBlock = ()=>{
        let arr=[];
        const startPosition=currentPage===1 ? currentPage : currentPage-1;
        for(let i=0; i<paginationLength; i++){
            const page=startPosition+i;
            if(page<=totalPages){
                arr.push(<div key={i}
                              className={`universal-pagination__item ${className}`}
                              style={{borderColor: page===currentPage ? "#f88711" : "#e3e2e2" }}
                              onClick={()=>handlePagination(page)}>
                            {page}
                        </div>);
            }
        }
        return arr;
    }

    const pagination = <div className="universal-pagination">
                            {currentPage+1>paginationLength &&
                                <img src={leftArrow} onClick={()=>handlePagination()}/>
                            }
                            {paginationBlock()}
                            {(totalPages>paginationLength && currentPage<totalPages) &&
                                <img src={rightArrow} onClick={()=>handlePagination(totalPages)}/>
                            }
                        </div>;
    return {currentSection, pagination}
};

export default usePagination;