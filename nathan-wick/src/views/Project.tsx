import React, {useContext,} from "react";
import Home from "./Home";
import {ThemeContext,} from "../contexts/Theme";
import {WindowContext,} from "../contexts/Window";
import dateString from "../utilities/dateString";
import projects from "../information/projects";
import {useParams,} from "react-router-dom";

const Project = () => {

    const {theme,} = useContext(ThemeContext,),
        {size,} = useContext(WindowContext,),
        {projectId,} = useParams(),
        project = projects.find((findProject,) =>
            findProject.name.toLowerCase().replace(
                / /gu,
                `-`,
            ) === projectId,);

    return <>
        {
            project
                ? <>
                    <style>
                        {
                            `.project:before {
                            background-image: url(${project.image});
                        }`
                        }
                    </style>
                    <div
                        className="background-parallax-blur project align-horizontal-center">
                        <div
                            className="position-relative">
                            <div
                                className={theme === `light`
                                    ? `triangle-white-bottom-right`
                                    : `triangle-black-bottom-right`}>
                            </div>
                            <div
                                className="padding-1">
                                <div
                                    className={`width-fit-content padding-1 rounded ${theme === `light`
                                        ? `background-white`
                                        : `background-black`}`}>
                                    <div
                                        className="text-large">
                                        {project.name}
                                    </div>
                                    <div
                                        className="text-small padding-1">
                                        Version {project.version.major}.{project.version.minor}.{project.version.patch}<br />
                                        {dateString(
                                            project.start,
                                            project.end,
                                        )}
                                    </div>
                                    {
                                        project.domain &&
                                            <button
                                                onClick={() => window.open(
                                                    project.domain,
                                                    `_blank`,
                                                )}>
                                                Open App
                                            </button>
                                    }
                                    {
                                        project.repository &&
                                            <button
                                                onClick={() => window.open(
                                                    project.repository,
                                                    `_blank`,
                                                )}>
                                                View Repository
                                            </button>
                                    }
                                </div>
                            </div>
                            <div
                                className={theme === `light`
                                    ? `triangle-white-top-left`
                                    : `triangle-black-top-left`}>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`margin-auto ${
                            size === `large`
                                ? `max-width-30 padding-1`
                                : size === `medium`
                                    ? `max-width-60 padding-1`
                                    : `width-100`
                        }`}>
                        <div
                            className="text-medium">
                            Summary
                        </div>
                        <div
                            className="text-small">
                            {project.summary}
                        </div>
                        {
                            project.description?.length && <>
                                <div
                                    className="text-medium">
                                    Description
                                </div>
                                {
                                    project.description.map((description, descriptionIndex,) => <div
                                        key={descriptionIndex}
                                        className="text-small">
                                        {description}
                                    </div>,)
                                }
                            </>
                        }
                    </div>
                </>
                : <Home />
        }
    </>;

};

export default Project;