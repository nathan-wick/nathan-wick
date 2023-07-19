import {ThemeContext,} from "../../contexts/Theme";
import {WindowContext,} from "../../contexts/Window";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import briefcaseDark from "../../icons/briefcase-dark.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import briefcaseLight from "../../icons/briefcase-light.svg";
import dateString from "../../utilities/dateString";
import experiences from "../../information/experiences";
import {useContext,} from "react";

const Experience = () => {

    const {theme,} = useContext(ThemeContext,),
        {size,} = useContext(WindowContext,);

    return <>
        <div
            id="experience"
            className="align-horizontal-center">
            <img
                alt="Experience"
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
                key={experienceIndex}>
                <style>
                    {
                        `.experience-${experienceIndex}:before {
                            background-image: ${size === `small`
        ? `none`
        : `url(${experience.image})`};
                        }`
                    }
                </style>
                <div
                    className={`background-parallax-blur experience-${experienceIndex} align-horizontal-center ${
                        theme === `light`
                            ? `background-dark-white`
                            : `background-light-black`
                    }`}>
                    <div
                        className="position-relative">
                        {
                            experienceIndex === 0 &&
                            <div
                                className={theme === `light`
                                    ? `triangle-white-bottom-right`
                                    : `triangle-black-bottom-right`}>
                            </div>
                        }
                        <div
                            className="padding-1">
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
                                            src={experience.image}
                                            alt={experience.title} />
                                }
                                <div
                                    className="text-medium">
                                    {experience.title}
                                </div>
                                <div
                                    className="text-small">
                                    {experience.company}<br />
                                    {dateString(
                                        experience.start,
                                        experience.end,
                                    )}
                                </div>
                                <div
                                    className="align-horizontal-left">
                                    <div
                                        className="text-small">
                                        Featured Contributions:
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
                            </div>
                        </div>
                        {
                            experienceIndex === experiences.length - 1 &&
                                <div
                                    className={theme === `light`
                                        ? `triangle-white-top-left`
                                        : `triangle-black-top-left`}>
                                </div>
                        }
                    </div>
                </div>
            </div>,)
        }
    </>;

};

export default Experience;
