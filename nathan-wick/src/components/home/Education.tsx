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
            className="align-horizontal-center">
            <img
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
                key={educationIndex}
                className="parallax align-horizontal-center"
                style={{"backgroundImage": size === `small`
                    ? `none`
                    : `url(${theme === `light`
                        ? education.backgroundImageLight
                        : education.backgroundImageDark})`,}}>
                {
                    educationIndex === 0 && size !== `small` &&
                        <div
                            className={theme === `light`
                                ? `triangle-white-bottom-left`
                                : `triangle-black-bottom-left`}>
                        </div>
                }
                {
                    size === `small` &&
                        <img
                            className="width-100"
                            alt={education.title}
                            src={theme === `light`
                                ? education.backgroundImageLight
                                : education.backgroundImageDark}/>
                }
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
                    <div
                        className="text-medium">
                        {education.title}
                    </div>
                    <div
                        className="align-horizontal-left">
                        <div
                            className="text-small">
                            {education.degree}, {education.major}<br />
                            {dateString(
                                education.start,
                                education.end,
                            )}<br />
                            Grade Point Average (GPA): {education.gradePointAverage.toFixed(1,)}
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
                    </div>
                    <div>
                        <button
                            className={theme === `light`
                                ? `button-white`
                                : `button-black`}>
                            Learn More
                        </button>
                    </div>
                </div>
                {
                    educationIndex === educations.length - 1 && size !== `small` &&
                        <div
                            className={theme === `light`
                                ? `triangle-white-top-right`
                                : `triangle-black-top-right`}>
                        </div>
                }
            </div>,)
        }
    </>;

};

export default Education;
