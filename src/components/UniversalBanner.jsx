import React from 'react';

const UniversalBanner = ({title, innerBlock}) => {
    return (
        <div className="universal-banner">
            <h1 className="universal-banner__title">
                {title}
            </h1>
            {innerBlock}
        </div>
    );
};

export default UniversalBanner;