import React, {useContext,} from "react";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";
import {ThemeContext,} from "../contexts/Theme";
import {WindowContext,} from "../contexts/Window";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import colors from "../styles/colors.scss";
import person from "../information/person";

const Navigation = () => {

    const {setTheme, theme,} = useContext(ThemeContext,),
        {scroll,} = useContext(WindowContext,);

    return <>
        <div
            className={`navigation row-2 ${theme}`}>
            <div
                className="column">
                <div
                    className="align-horizontal-left">
                    {
                        theme === `light`
                            ? <button
                                className="button-purple"
                                onClick={() => setTheme(`dark`,)}>
                                <Moon
                                    color={colors.black}
                                    height={16}
                                    width={16} />
                            </button>
                            : <button
                                className="button-yellow"
                                onClick={() => setTheme(`light`,)}>
                                <Sun
                                    color={colors.black}
                                    height={16}
                                    width={16} />
                            </button>
                    }
                    <div
                        className={`text-medium ${scroll < 1
                            ? `hide`
                            : `show`}`}>
                        {person.name}
                    </div>
                </div>
            </div>
            <div
                className="column">
                <div
                    className="align-horizontal-right">
                    <button>
                    Contact
                    </button>
                </div>
            </div>
        </div>
        <div
            className="padding-top-5">
        </div>
    </>;

};

export default Navigation;
