import React from 'react';
import classes from "./FiltersArea.module.css";
import QuickSearch from "../../../QuickSearch";

const FiltersArea = ({filterInputs, handleFilters, handleClearFilters}) => {
    const filtersBlock = filterInputs.map(item=>{
        if(item.name!=="city" && item.name!=="date" ) {
            const inputsBlock = item.type === "text"
                ?
                <input className={classes.filter__form__item__inputBlock__textInput}
                       type={item.type}
                       name={item.name}
                       value={item.checkedInputs}
                       onChange={handleFilters}
                />
                :
                item.options.map((current, index) => {
                    return <div key={index}>
                        <input
                            type={item.type}
                            name={item.name}
                            value={current}
                            checked={item.checkedInputs.some(input => input === current)}
                            onChange={(e) => handleFilters(e, !isNaN(current))}
                        />
                        <label htmlFor={item.name}>
                            {current}
                        </label>
                    </div>
                });

            return <div
                key={item.id}
                className={classes.filter__form__item}
            >
                <h2 className={classes.filter__form__item__title}>
                    {item.title}
                </h2>
                <div className={classes.filter__form__item__inputBlock}>
                    {inputsBlock}
                </div>
            </div>
        }
    });


    return (
        <div className={classes.filter}>
            <div className={classes.filter__headerBlock}>
                <h3 className={classes.filter__headerBlock__title}>
                    Search & Filter
                </h3>
                <span className={classes.filter__headerBlock__clear}
                      onClick={handleClearFilters}>
                            Clear All
                        </span>
            </div>
            <form className={classes.filter__form}>
                <QuickSearch
                    handleChange={handleFilters}
                />
                {filtersBlock}
            </form>
        </div>
    );
};

export default FiltersArea;