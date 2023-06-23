import React, {FC, createContext, useEffect, useState,} from "react";

export const WindowContext = createContext<{
        scroll: number,
    }>({
        "scroll": 0,
    },),
    WindowContextProvider: FC<{
        children: JSX.Element
    }> = ({children,},) => {

        const [
                scroll,
                setScroll,
            ] = useState(0,),
            onScroll = () => {

                const Scrolled = document.documentElement.scrollTop,
                    MaxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
                    ScrollPercent = Scrolled / MaxHeight * 100;
                setScroll(ScrollPercent,);

            };

        useEffect(() => {

            window.addEventListener(
                `scroll`,
                onScroll,
            );

        },);

        return <WindowContext.Provider
            value={{scroll,}}>
            {children}
        </WindowContext.Provider>;

    };

export default WindowContextProvider;
