import {ThemeContext,} from "../../contexts/Theme";
import educations from "../../information/educations";
import {useContext,} from "react";

const Education = () => {

    const {theme,} = useContext(ThemeContext,);

    return <>
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
                className="parallax align-horizontal-center"
                style={{"backgroundImage": `url(${theme === `light`
                    ? education.backgroundImageLight
                    : education.backgroundImageDark})`,}}>
                {
                    educationIndex === 0 &&
                    <div
                        className={theme === `light`
                            ? `triangle-white-bottom-left`
                            : `triangle-black-bottom-left`}>
                    </div>
                }
                <div
                    className={`width-fit-content max-width-30 padding-1 ${theme === `light`
                        ? `background-white`
                        : `background-black`}`}>
                    <div
                        className="text-medium">
                        {education.title}
                    </div>
                    <div
                        className="align-horizontal-left">
                        <div
                            className="text-small">
                            {education.degree}, {education.major}, {education.graduation.toLocaleString(
                                `default`,
                                {"month": `long`,},
                            )} {education.graduation.getFullYear()} <br />
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
                            className="button-red">
                            Learn More
                        </button>
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
            </div>,)
        }
    </>;

};

export default Education;
