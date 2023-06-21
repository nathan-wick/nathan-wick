import React, {useContext,} from "react";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";
import {ThemeContext,} from "../contexts/Theme";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import colors from "../styles/colors.scss";

const Navigation = () => {

    const {setTheme, theme,} = useContext(ThemeContext,);

    return <div
        className={`${theme} navigation row-2`}>
        <div
            className="column">
            <div
                className="container align-content-left">
                <div
                    className="text-medium">
                    Nathan Wick
                </div>
                {
                    theme === `light`
                        ? <button
                            className="button-small button-purple"
                            onClick={() => setTheme(`dark`,)}>
                            <Moon
                                color={colors.black}
                                height={16}
                                width={16} />
                        </button>
                        : <button
                            className="button-small button-yellow"
                            onClick={() => setTheme(`light`,)}>
                            <Sun
                                color={colors.black}
                                height={16}
                                width={16} />
                        </button>
                }
            </div>
        </div>
        <div
            className="column">
            <div
                className="container align-content-right">
                <button>
                    Contact
                </button>
            </div>
        </div>
    </div>;

};

export default Navigation;
