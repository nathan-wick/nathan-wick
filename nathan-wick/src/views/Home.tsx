import {ThemeContext,} from "../contexts/Theme";
import {useContext,} from "react";

const Home = () => {

    const {theme,} = useContext(ThemeContext,);

    return <>
        <div
            className="row-2 viewport-height-80">
            <div
                className="column container align-horizontal-center">
                <div
                    className="width-100 align-vertical-center">
                    <div
                        className="text-large">
                    Nathan Wick
                    </div>
                    <div
                        className="text-small">
                    Full-Stack <b>Software</b> Developer
                    </div>
                </div>
            </div>
            <div
                className="column">

            </div>
        </div>
        <div
            className={theme === `light`
                ? `triangle-dark-white-top-left`
                : `triangle-light-black-top-left`}>
        </div>
        <div
            className={`row-3 ${theme === `light`
                ? `background-dark-white`
                : `background-light-black`}`}>
            <div
                className="column align-horizontal-center">
                <div
                    className="text-large">
                13,000+
                </div>
                <div
                    className="text-small">
                Software Development Practice <b>Hours</b>
                </div>
            </div>
            <div
                className="column align-horizontal-center">
                <div
                    className="text-large">
                200,000+
                </div>
                <div
                    className="text-small">
                    <b>Lines</b> of Code Contributed
                </div>
            </div>
            <div
                className="column align-horizontal-center">
                <div
                    className="text-large">
                10+
                </div>
                <div
                    className="text-small">
                Completed Software <b>Projects</b>
                </div>
            </div>
        </div>
        <div
            className={theme === `light`
                ? `triangle-dark-white-bottom-right`
                : `triangle-light-black-bottom-right`}>
        </div>
    </>;

};

export default Home;
