import {ThemeContext,} from "../../contexts/Theme";
import {WindowContext,} from "../../contexts/Window";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import boxDark from "../../icons/box-dark.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import boxLight from "../../icons/box-light.svg";
import projects from "../../information/projects";
import {useContext,} from "react";

const Projects = () => {

    const {theme,} = useContext(ThemeContext,),
        {size,} = useContext(WindowContext,);

    return <>
        <div
            id="projects"
            className="align-horizontal-center">
            <img
                alt="Projects"
                className="icon-large"
                src={theme === `light`
                    ? boxDark
                    : boxLight}/>
            <div
                className="text-large">
                Projects
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
                    projects.slice(
                        0,
                        3,
                    ).map((project, projectIndex,) => <div
                        key={projectIndex}
                        className="column padding-1">
                        <div
                            className={`rounded ${
                                theme === `light`
                                    ? `background-white`
                                    : `background-black`
                            }`}>
                            <img
                                className="width-100 rounded"
                                src={project.image}
                                alt={project.name} />
                            <div
                                className="text-medium">
                                {project.name}
                            </div>
                            <div
                                className="text-small">
                                {project.summary}
                            </div>
                            <button
                                onClick={() => window.open(
                                    `/projects/${project.name.toLowerCase().replace(
                                        / /gu,
                                        `-`,
                                    )}`,
                                    `_self`,
                                )}>
                                Learn More
                            </button>
                        </div>
                    </div>,)
                }
            </div>
            <button
                className={`margin-top-3 ${theme === `light`
                    ? `button-white`
                    : `button-black`}`}>
                View More Projects
            </button>
        </div>
        <div
            className={theme === `light`
                ? `triangle-dark-white-bottom-left`
                : `triangle-light-black-bottom-left`}>
        </div>
    </>;

};

export default Projects;
