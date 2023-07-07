import React, {FC, createContext, useEffect, useState,} from "react";

export const WindowContext = createContext<{
        scroll: number,
        size: `large` | `medium` | `small`
    }>({
        "scroll": 0,
        "size": `small`,
    },),
    WindowContextProvider: FC<{
        children: JSX.Element
    }> = ({children,},) => {

        const getScroll = () => {

                const Scrolled = document.documentElement.scrollTop,
                    MaxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                // eslint-disable-next-line no-extra-parens
                let ScrollPercent = Math.round((Scrolled / MaxHeight * 100) * 100,) / 100;
                if (ScrollPercent >= 100) {

                    ScrollPercent = 99.99;

                }
                return ScrollPercent;

            },
            getSize = () => {

                const {width,} = window.screen;
                if (width < 768) {

                    return `small`;

                } else if (width < 992) {

                    return `medium`;

                }

                return `large`;


            },
            [
                scroll,
                setScroll,
            ] = useState(getScroll(),),
            [
                size,
                setSize,
            ] = useState<`large` | `medium` | `small`>(getSize(),);

        useEffect(
            () => {

                window.addEventListener(
                    `scroll`,
                    () => setScroll(getScroll(),),
                );

                return () => {

                    window.removeEventListener(
                        `scroll`,
                        () => setScroll(getScroll(),),
                    );

                };

            },
            [],
        );

        useEffect(
            () => {

                window.addEventListener(
                    `resize`,
                    () => setSize(getSize(),),
                );

                return () => {

                    window.removeEventListener(
                        `resize`,
                        () => setSize(getSize(),),
                    );

                };

            },
            [],
        );

        return <WindowContext.Provider
            value={{
                scroll,
                size,
            }}>
            {children}
        </WindowContext.Provider>;

    };

export default WindowContextProvider;
