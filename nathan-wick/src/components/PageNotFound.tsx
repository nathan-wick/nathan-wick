import React from "react";

const PageNotFound = () => {

    const {pathname,} = location;

    return <div
        className="align-horizontal-center">
        <div
            className="text-large">
            Page Not Found
        </div>
        <div
            className="text-small">
            {pathname} does not exist.
        </div>
        <button
            onClick={() => window.open(
                `/`,
                `_self`,
            )}>
            Return Home
        </button>
    </div>;

};

export default PageNotFound;
