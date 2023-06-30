import {ThemeContext,} from "../../contexts/Theme";
import skills from "../../information/skills";
import {useContext,} from "react";

const Skills = () => {

    const {theme,} = useContext(ThemeContext,),
        getSkillBackground = (type: `language` | `tool` | `methodology` | `domain` | `soft`,) => {

            switch (type) {

            case `language`:
                return `background-red`;
            case `tool`:
                return `background-yellow`;
            case `methodology`:
                return `background-green`;
            case `domain`:
                return `background-blue`;
            case `soft`:
            default:
                return `background-purple`;

            }

        };

    return <>
        <div
            className="align-horizontal-center">
            <div
                className="text-large">
                Skills
            </div>
        </div>
        <div
            className={theme === `light`
                ? `triangle-dark-white-top-left`
                : `triangle-light-black-top-left`}>
        </div>
        <div
            className={`align-horizontal-center text-black ${theme === `light`
                ? `background-dark-white`
                : `background-light-black`}`}>
            {
                skills.sort((first, second,) => first.title.localeCompare(second.title,),).map((skill, skillIndex,) => <div
                    key={skillIndex}
                    className={`pill width-fit-content ${getSkillBackground(skill.type,)}`}>
                    {skill.title}
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

export default Skills;
