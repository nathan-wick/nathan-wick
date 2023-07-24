import React, {FC, createContext, useEffect, useState,} from "react";

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

        const getPreferredTheme = () => {

                const storedPreference = localStorage.getItem(`theme`,) as `light` | `dark` | null;
                if (storedPreference) {

                    return storedPreference;

                }

                if (window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`,).matches) {

                    return `dark`;

                }

                return `light`;

            },
            preferredTheme = getPreferredTheme(),
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

                    document.body.classList.add(`light`,);
                    document.body.classList.remove(`dark`,);

                } else {

                    document.body.classList.remove(`light`,);
                    document.body.classList.add(`dark`,);

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
