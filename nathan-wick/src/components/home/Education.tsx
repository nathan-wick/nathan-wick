import {ThemeContext,} from "../../contexts/Theme";
import {WindowContext,} from "../../contexts/Window";
import dateString from "../../utilities/dateString";
import educations from "../../information/educations";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mortarboardDark from "../../icons/mortarboard-dark.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mortarboardLight from "../../icons/mortarboard-light.svg";
import {useContext,} from "react";

const Education = () => {

    const {theme,} = useContext(ThemeContext,),
        {size,} = useContext(WindowContext,);

    return <>
        <div
            id="education"
            className="align-horizontal-center">
            <img
                alt="Education"
                className="icon-large"
                src={theme === `light`
                    ? mortarboardDark
                    : mortarboardLight}/>
            <div
                className="text-large">
                Education
            </div>
        </div>
        {
            educations.map((education, educationIndex,) => <div
                key={educationIndex}>
                <style>
                    {
                        `.education-${educationIndex}:before {
                            background-image: ${size === `small`
        ? `none`
        : `url(${education.image})`};
                        }`
                    }
                </style>
                <div
                    className={`background-parallax-blur education-${educationIndex} align-horizontal-center ${
                        theme === `light`
                            ? `background-dark-white`
                            : `background-light-black`
                    }`}>
                    <div
                        className="position-relative">
                        {
                            educationIndex === 0 &&
                            <div
                                className={theme === `light`
                                    ? `triangle-white-bottom-left`
                                    : `triangle-black-bottom-left`}>
                            </div>
                        }
                        <div
                            className={size === `small`
                                ? `padding-1`
                                : `padding-3`}>
                            <div
                                className={`width-fit-content rounded ${
                                    theme === `light`
                                        ? `background-white`
                                        : `background-black`
                                } ${
                                    size === `large`
                                        ? `max-width-30 padding-1`
                                        : size === `medium`
                                            ? `max-width-60 padding-1`
                                            : `width-100`
                                }`}>
                                {
                                    size === `small` &&
                                    <img
                                        className="width-100 rounded"
                                        src={education.image}
                                        alt={education.school} />
                                }
                                <div
                                    className="text-medium">
                                    {education.school}
                                </div>
                                <div
                                    className="text-small">
                                    {education.end?.toLocaleString(
                                        `default`,
                                        {"month": `long`,},
                                    )} {education.end?.getFullYear()}<br/><br/>
                                    {education.degree}<br/>
                                    {education.major}<br/>
                                    GPA: {education.gradePointAverage.toFixed(1,)}
                                </div>
                                <div
                                    className="align-horizontal-left">
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
                                </div>
                            </div>
                        </div>
                        {
                            educationIndex === educations.length - 1 &&
                            <div
                                className={theme === `light`
                                    ? `triangle-white-top-right`
                                    : `triangle-black-top-right`}>
                            </div>
                        }
                    </div>
                </div>
            </div>,)
        }
    </>;

};

export default Education;
