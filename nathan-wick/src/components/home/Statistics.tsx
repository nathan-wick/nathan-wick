import {ThemeContext,} from "../../contexts/Theme";
import {WindowContext,} from "../../contexts/Window";
import statistics from "../../information/statistics";
import {useContext,} from "react";

const Statistics = () => {

    const {theme,} = useContext(ThemeContext,),
        {size,} = useContext(WindowContext,);

    return <>
        <div
            className={`${
                theme === `light`
                    ? `background-dark-white`
                    : `background-light-black`
            } ${
                size === `large`
                    ? `row-3`
                    : `row`
            }`}>
            {
                statistics.map((statistic, statisticIndex,) => <div
                    key={statisticIndex}
                    className="column align-horizontal-center">
                    <div
                        className="text-large">
                        {statistic.value.toLocaleString()}
                    </div>
                    <div
                        className="text-small">
                        ~ {statistic.title}
                    </div>
                </div>,)
            }
        </div>
        <div
            className={theme === `light`
                ? `triangle-dark-white-bottom-right`
                : `triangle-light-black-bottom-right`}>
        </div>
    </>;

};

export default Statistics;
