import React from 'react';
import { Bars } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="loader">
            <Bars
                height="80"
                width="80"
                color="#316AFE"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loader;