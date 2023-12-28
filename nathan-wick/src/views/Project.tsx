import React, {useContext,} from "react";
import {Helmet,} from "react-helmet-async";
import PageNotFound from "./PageNotFound";
import {ThemeContext,} from "../contexts/Theme";
import {WindowContext,} from "../contexts/Window";
import dateString from "../utilities/dateString";
import person from "../information/person";
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
                    <Helmet>
                        <title>{project.name}</title>
                        <meta name="description" content={project.summary} />
                        <meta name="robots" content="index, follow" />
                    </Helmet>
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
                                className="padding-1 padding-top-5">
                                <div
                                    className={`width-fit-content padding-1 rounded ${theme === `light`
                                        ? `background-white`
                                        : `background-black`}`}>
                                    <div
                                        className="text-medium">
                                        {project.name}
                                    </div>
                                    <div
                                        className="text-small padding-1">
                                        Version {project.version.major}.{project.version.minor}.{project.version.patch}<br />
                                        {dateString(
                                            project.start,
                                            project.end,
                                            true,
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
                                                View Code
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
                                ? `max-width-40 padding-1`
                                : size === `medium`
                                    ? `max-width-60 padding-1`
                                    : `width-100`
                        }`}>
                        <div
                            className="text-medium">
                            Summary
                        </div>
                        <div
                            className="text-small text-indent">
                            {project.summary}
                        </div>
                        {
                            (project.description?.length ?? 0) > 0 && <>
                                <div
                                    className="text-medium">
                                    Description
                                </div>
                                {
                                    project.description?.map((description, descriptionIndex,) => <div
                                        key={descriptionIndex}
                                        className="text-small text-indent">
                                        {description}
                                    </div>,)
                                }
                            </>
                        }
                        {
                            (project.contributions?.length ?? 0) > 0 && <>
                                <div
                                    className="text-medium">
                                    {person.name}'s Contributions
                                </div>
                                <div
                                    className="text-small">
                                    <ul>
                                        {
                                            project.contributions?.map((contribution, contributionIndex,) => <li
                                                key={contributionIndex}>
                                                {contribution}
                                            </li>,)
                                        }
                                    </ul>
                                </div>
                            </>
                        }
                        {
                            (project.screenshots?.length ?? 0) > 0 && <>
                                <div
                                    className="text-medium">
                                    Screenshots
                                </div>
                                {
                                    project.screenshots?.map((screenshot, screenshotIndex,) => <img
                                        key={screenshotIndex}
                                        className="width-100 rounded"
                                        src={screenshot}
                                        alt={project.name}/>,)
                                }
                            </>
                        }
                    </div>
                </>
                : <PageNotFound />
        }
    </>;

};

export default Project;
