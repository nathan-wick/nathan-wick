import {ThemeContext,} from "../contexts/Theme";
import educations from "../information/educations";
import person from "../information/person";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import portrait from "../images/portrait.png";
import statistics from "../information/statistics";
import {useContext,} from "react";

const Home = () => {

    const {theme,} = useContext(ThemeContext,);

    return <>
        <div
            className="container">
            <div
                className="row-2 viewport-height-90">
                <div
                    className="column container align-horizontal-center">
                    <div
                        className="width-100 align-vertical-center">
                        <div
                            className="text-large">
                            {person.name}
                        </div>
                        <div
                            className="text-small">
                            {person.title}
                        </div>
                    </div>
                </div>
                <div
                    className="column container">
                    <div
                        className="width-100">
                        <img
                            className="heading-portrait"
                            src={portrait} />
                    </div>
                </div>
            </div>
            <div
                className={`overlap-triangle ${theme === `light`
                    ? `triangle-dark-white-top-left`
                    : `triangle-light-black-top-left`}`}>
            </div>
        </div>
        <div
            className={`row-3 ${theme === `light`
                ? `background-dark-white`
                : `background-light-black`}`}>
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
                        {statistic.title}
                    </div>
                </div>,)
            }
        </div>
        <div
            className={theme === `light`
                ? `triangle-dark-white-bottom-right`
                : `triangle-light-black-bottom-right`}>
        </div>
        <div
            className="align-horizontal-center">
            <div
                className="text-large">
                Education
            </div>
        </div>
        {
            educations.map((education, educationIndex,) => <div
                key={educationIndex}
                className="row-2">
                <div
                    className="column align-horizontal-center">
                    <div
                        className="text-medium">
                        {education.title}
                    </div>
                </div>
                <div
                    className="column">
                    <div
                        className="text-medium">
                        {education.title}
                    </div>
                    <div
                        className="text-small">
                        {education.degree}, {education.major}, {education.graduation.toLocaleString(
                            `default`,
                            {"month": `long`,},
                        )} {education.graduation.getFullYear()} <br />
                        Grade Point Average (GPA): {education.gradePointAverage}
                    </div>
                    <div
                        className="text-small">
                        Featured Coursework:
                        <ul>
                            {
                                education.featuredCoursework.map((featuredCoursework, featuredCourseworkIndex,) => <li
                                    key={featuredCourseworkIndex}>
                                    {featuredCoursework}
                                </li>,)
                            }
                        </ul>
                    </div>
                    <div>
                        <button
                            className="button-small button-red">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>,)
        }

    </>;

};

export default Home;
