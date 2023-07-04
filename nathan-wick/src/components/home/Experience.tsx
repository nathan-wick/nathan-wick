import {ThemeContext,} from "../../contexts/Theme";
import {WindowContext,} from "../../contexts/Window";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import briefcaseDark from "../../icons/briefcase-dark.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import briefcaseLight from "../../icons/briefcase-light.svg";
import experiences from "../../information/experiences";
import {useContext,} from "react";

const Experience = () => {

    const {theme,} = useContext(ThemeContext,),
        {size,} = useContext(WindowContext,);

    return <>
        <div
            className="align-horizontal-center">
            <img
                className="icon-large"
                src={theme === `light`
                    ? briefcaseDark
                    : briefcaseLight}/>
            <div
                className="text-large">
                Experience
            </div>
        </div>
        {
            experiences.map((experience, experienceIndex,) => <div
                key={experienceIndex}
                className="parallax align-horizontal-center"
                style={{"backgroundImage": size === `small`
                    ? `none`
                    : `url(${theme === `light`
                        ? experience.backgroundImageLight
                        : experience.backgroundImageDark})`,}}>
                {
                    experienceIndex === 0 && size !== `small` &&
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
                            alt={experience.title}
                            src={theme === `light`
                                ? experience.backgroundImageLight
                                : experience.backgroundImageDark}/>
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
                    experienceIndex === experiences.length - 1 && size !== `small` &&
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
