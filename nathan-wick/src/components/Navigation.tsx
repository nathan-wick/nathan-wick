import React, {useContext, useState,} from "react";
import {ThemeContext,} from "../contexts/Theme";
import {WindowContext,} from "../contexts/Window";
import person from "../information/person";

const Navigation = () => {

    const {setTheme, theme,} = useContext(ThemeContext,),
        {scroll, size,} = useContext(WindowContext,),
        {pathname,} = location,
        [
            menuIsOpen,
            setMenuIsOpen,
        ] = useState(false,),
        NavigationButtons = () => <>
            <button
                className={theme === `light`
                    ? `button-white`
                    : `button-black`}
                onClick={() => {

                    setMenuIsOpen(false,);
                    window.location.href = `#education`;

                }}>
                Education
            </button>
            <button
                className={theme === `light`
                    ? `button-white`
                    : `button-black`}
                onClick={() => {

                    setMenuIsOpen(false,);
                    window.location.href = `#experience`;

                }}>
                Experience
            </button>
            <button
                className={theme === `light`
                    ? `button-white`
                    : `button-black`}
                onClick={() => {

                    setMenuIsOpen(false,);
                    window.location.href = `#projects`;

                }}>
                Projects
            </button>
            <button
                className={theme === `light`
                    ? `button-white`
                    : `button-black`}
                onClick={() => {

                    setMenuIsOpen(false,);
                    window.location.href = `#articles`;

                }}>
                Articles
            </button>
            <button
                className={theme === `light`
                    ? `button-white`
                    : `button-black`}
                onClick={() => {

                    setMenuIsOpen(false,);
                    window.location.href = `#skills`;

                }}>
                Skills
            </button>
        </>,
        HomeButton = () => <button
            className="button-green"
            onClick={() => {

                setMenuIsOpen(false,);
                window.open(
                    `/`,
                    `_self`,
                );

            }}>
            Home
        </button>;

    return <>
        <div
            className={`navigation ${theme} ${
                size === `large` || menuIsOpen === true
                    ? `row-2`
                    : `row-auto-min`
            }`}>
            <div
                className="column">
                {
                    size !== `large` && menuIsOpen === false &&
                        <div
                            className="text-navigation"
                            onClick={() => {

                                window.location.href = `/`;

                            }}>
                            {person.name}
                        </div>
                }
                <div
                    className="align-horizontal-left">
                    {
                        size === `large` || menuIsOpen === true
                            ? pathname === `/`
                                ? <NavigationButtons />
                                : <>
                                    {
                                        size === `large`
                                            ? <div
                                                className="text-navigation"
                                                onClick={() => {

                                                    window.location.href = `/`;

                                                }}>
                                                {person.name}
                                            </div>
                                            : <HomeButton />
                                    }
                                </>
                            : <></>
                    }
                </div>
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
                            {
                                pathname !== `/` && size === `large` &&
                                    <HomeButton />
                            }
                            {
                                pathname === `/` &&
                                    <button
                                        onClick={() => {

                                            setMenuIsOpen(false,);
                                            window.location.href = `mailto:${person.email}`;

                                        }}>
                                        Contact
                                    </button>
                            }
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
    </>;

};

export default Navigation;
