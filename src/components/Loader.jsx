import React from 'react';

const Loader = () => {
    return (
        <div className="universal-loader">
            <div className="universal-loader__dot"> </div>
            <div className="universal-loader__dot"> </div>
            <div className="universal-loader__dot"> </div>
            {/*<h3 className="universal-loader">Loading...</h3>*/}
        </div>
    );
};

export default Loader;