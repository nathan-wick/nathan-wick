import React, {useContext, useState,} from "react";
import {ThemeContext,} from "../contexts/Theme";
import {WindowContext,} from "../contexts/Window";
import person from "../information/person";

const Navigation = () => {

    const {setTheme, theme,} = useContext(ThemeContext,),
        {scroll, size,} = useContext(WindowContext,),
        [
            menuIsOpen,
            setMenuIsOpen,
        ] = useState(false,),
        NavigationButtons = () => <div
            className="align-horizontal-left">
            <button
                className={theme === `light`
                    ? `button-white`
                    : `button-black`}
                onClick={() => {

                    setMenuIsOpen(false,);

                }}>
                Education
            </button>
            <button
                className={theme === `light`
                    ? `button-white`
                    : `button-black`}
                onClick={() => {

                    setMenuIsOpen(false,);

                }}>
                Experience
            </button>
            <button
                className={theme === `light`
                    ? `button-white`
                    : `button-black`}
                onClick={() => {

                    setMenuIsOpen(false,);

                }}>
                Projects
            </button>
            <button
                className={theme === `light`
                    ? `button-white`
                    : `button-black`}
                onClick={() => {

                    setMenuIsOpen(false,);

                }}>
                Articles
            </button>
            <button
                className={theme === `light`
                    ? `button-white`
                    : `button-black`}
                onClick={() => {

                    setMenuIsOpen(false,);

                }}>
                Skills
            </button>
        </div>;

    return <>
        <div
            className={`navigation ${theme} ${size === `large` || menuIsOpen === true
                ? `row-2`
                : `row-auto-min`}`}>
            <div
                className="column">
                {
                    size !== `large` && menuIsOpen === false &&
                        <div
                            className={`text-medium ${scroll > 1
                                ? `show`
                                : `hide`}`}>
                            {person.name}
                        </div>
                }
                {
                    (size === `large` || menuIsOpen === true) &&
                        <NavigationButtons />
                }
            </div>
            <div
                className="column">
                <div
                    className="align-horizontal-right">
                    {
                        size !== `large` &&
                            <button
                                onClick={() => setMenuIsOpen(!menuIsOpen,)}>
                                Menu
                            </button>
                    }
                    {
                        (size === `large` || menuIsOpen === true) && <>
                            <button
                                onClick={() => setMenuIsOpen(false,)}>
                                Contact
                            </button>
                            {
                                theme === `light`
                                    ? <button
                                        className="button-purple"
                                        onClick={() => {

                                            setTheme(`dark`,);
                                            setMenuIsOpen(false,);

                                        }}>
                                        Dark Mode
                                    </button>
                                    : <button
                                        className="button-yellow"
                                        onClick={() => {

                                            setTheme(`light`,);
                                            setMenuIsOpen(false,);

                                        }}>
                                        Light Mode
                                    </button>
                            }
                        </>
                    }
                </div>
            </div>
            <div
                className="background-blue column-2"
                style={{
                    "border": `none`,
                    "borderBottomRightRadius": `0.2rem`,
                    "borderTopRightRadius": `0.2rem`,
                    "height": `0.4rem`,
                    "width": `${scroll > 1
                        ? scroll
                        : 0}%`,
                }} />
        </div>
        <div
            className="padding-top-5">
        </div>
    </>;

};

export default Navigation;
