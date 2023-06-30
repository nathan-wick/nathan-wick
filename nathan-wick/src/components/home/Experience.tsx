import {ThemeContext,} from "../../contexts/Theme";
import experiences from "../../information/experiences";
import {useContext,} from "react";

const Experience = () => {

    const {theme,} = useContext(ThemeContext,);

    return <>
        <div
            className="align-horizontal-center">
            <div
                className="text-large">
                Experience
            </div>
        </div>
        {
            experiences.map((experience, experienceIndex,) => <div
                key={experienceIndex}
                className="parallax align-horizontal-center"
                style={{"backgroundImage": `url(${theme === `light`
                    ? experience.backgroundImageLight
                    : experience.backgroundImageDark})`,}}>
                {
                    experienceIndex === 0 &&
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
                        {experience.title}
                    </div>
                    <div
                        className="align-horizontal-left">
                        <div
                            className="text-small">
                            {experience.company}<br />
                            {experience.start.toLocaleString(
                                `default`,
                                {"month": `long`,},
                            )} {experience.start.getFullYear()} - {experience.end
                                ? `${experience.end.toLocaleString(
                                    `default`,
                                    {"month": `long`,},
                                )} ${experience.end.getFullYear()}`
                                : `Present`}
                        </div>
                        <div
                            className="text-small">
                            Contributions:
                            <ul>
                                {
                                    experience.contributions.map((contribution, contributionIndex,) => <li
                                        key={contributionIndex}>
                                        {contribution}
                                    </li>,)
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button>
                            Learn More
                        </button>
                    </div>
                </div>
                {
                    experienceIndex === experiences.length - 1 &&
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

export default Experience;
