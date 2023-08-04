import React from "react";

const ScreenTooSmall = () => <div
    className="align-horizontal-center padding-top-5">
    <div
        className="text-large">
        Screen Too Small
    </div>
    <div
        className="text-small">
        A larger screen size is required to view this page.
    </div>
    <button
        onClick={() => window.open(
            `/`,
            `_self`,
        )}>
        Return Home
    </button>
</div>;

export default ScreenTooSmall;
