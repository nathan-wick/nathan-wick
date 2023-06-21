import React, {FC, createContext, useEffect, useState,} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import colors from "../styles/colors.scss";

export const ThemeContext = createContext<{
        setTheme: React.Dispatch<React.SetStateAction<`light` | `dark`>>,
        theme: `light` | `dark`,
    }>({
        "setTheme": () => {
            // Theme Setter
        },
        "theme": `light`,
    },),
    ThemeContextProvider: FC<{
        children: JSX.Element
    }> = ({children,},) => {

        const preferredTheme = localStorage.getItem(`theme`,) as `light` | `dark` | null ?? `light`,
            [
                theme,
                setTheme,
            ] = useState<`light` | `dark`>(preferredTheme,),
            themeState = {
                setTheme,
                theme,
            };

        useEffect(
            () => {

                if (preferredTheme !== theme) {

                    localStorage.setItem(
                        `theme`,
                        theme,
                    );

                }
                if (theme === `light`) {

                    // eslint-disable-next-line no-warning-comments
                    // TODO Replace style with class
                    document.body.style.backgroundColor = colors.white;
                    document.body.style.color = colors.black;

                } else {

                    document.body.style.backgroundColor = colors.black;
                    document.body.style.color = colors.white;

                }

            },
            [theme,],
        );

        return <ThemeContext.Provider
            value={themeState}>
            {children}
        </ThemeContext.Provider>;

    };

export default ThemeContextProvider;
