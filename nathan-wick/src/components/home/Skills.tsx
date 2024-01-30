import {ThemeContext,} from "../../contexts/Theme";
import {WindowContext,} from "../../contexts/Window";
import capitalizeFirstLetter from "../../utilities/capitalizeFirstLetter";
import pluralize from "../../utilities/pluralize";
import skills from "../../information/skills";
import {useContext,} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import wrenchDark from "../../icons/wrench-dark.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import wrenchLight from "../../icons/wrench-light.svg";

const Skills = () => {

    const {theme,} = useContext(ThemeContext,),
        {size,} = useContext(WindowContext,),
        skillTypes = Array.from(new Set(skills.map((skill,) => skill.type,),),),
        getBackground = (index: number,) => {

            switch (index) {

            case 0:
                return `background-red`;
            case 1:
                return `background-yellow`;
            case 2:
                return `background-green`;
            case 3:
                return `background-blue`;
            case 4:
            default:
                return `background-purple`;

            }

        };

    return <>
        <div
            id="skills"
            className="align-horizontal-center">
            <img
                alt="Skills"
                className="icon-large"
                src={theme === `light`
                    ? wrenchDark
                    : wrenchLight}/>
            <div
                className="text-large">
                Skills
            </div>
        </div>
        <div
            className={theme === `light`
                ? `triangle-dark-white-top-right`
                : `triangle-light-black-top-right`}>
        </div>
        <div
            className={`align-horizontal-center ${
                theme === `light`
                    ? `background-dark-white`
                    : `background-light-black`
            }`}>
            <div
                className={`${
                    size === `large`
                        ? `row-3`
                        : `row`
                }`}>
                {
                    skillTypes.map((skillType, skillTypeIndex,) => <div
                        key={skillTypeIndex}
                        className="column padding-1">
                        <div
                            className={`rounded ${
                                theme === `light`
                                    ? `background-white`
                                    : `background-black`
                            }`}>
                            <div
                                className="text-medium">
                                {capitalizeFirstLetter(pluralize(skillType,),)}
                            </div>
                            {
                                skills.filter((skill,) => skill.type === skillType,).map((skill, skillIndex,) => <div
                                    key={skillIndex}
                                    className="text-small align-horizontal-left">
                                    {skill.title}<br/>
                                    <div
                                        className={`column-2 ${
                                            getBackground(skillTypeIndex,)
                                        }`}
                                        style={{
                                            "border": `none`,
                                            "borderBottomRightRadius": `0.2rem`,
                                            "borderTopRightRadius": `0.2rem`,
                                            "height": `0.4rem`,
                                            "width": `${100 * skill.proficiency}%`,
                                        }} />
                                </div>,)
                            }
                        </div>
                    </div>,)
                }
            </div>
        </div>
        <div
            className={theme === `light`
                ? `triangle-dark-white-bottom-left`
                : `triangle-light-black-bottom-left`}>
        </div>
    </>;

};

export default Skills;
