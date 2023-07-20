import React from "react";
import packageInfo from "../../package.json";

const Footer = () => {

    const year = new Date().getFullYear();

    return <div
        className="row-2 padding-1">
        <div
            className="column">
            <div
                className="text-small">
                Copyright &copy; {year} Nathan Wick. All rights reserved.
            </div>
        </div>
        <div
            className="column align-horizontal-right">
            <div
                className="text-small">
                App Version: {packageInfo.version}
            </div>
        </div>
    </div>;

};

export default Footer;
