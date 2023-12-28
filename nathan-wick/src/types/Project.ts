import {Version,} from "./Version";

export declare interface Project {
    name: string,
    summary: string,
    version: Version,
    image: string,
    start: Date,
    end?: Date,
    domain?: string,
    repository?: string,
    description?: string[],
    contributions?: string[],
    relatedSkills?: string[],
    screenshots?: string[],
}
