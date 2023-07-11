import {Version,} from "./Version";

export declare interface Project {
    name: string,
    description: string,
    version: Version,
    image: string,
    start: Date,
    end?: Date,
    body?: JSX.Element,
    relatedSkills?: string[],
}
