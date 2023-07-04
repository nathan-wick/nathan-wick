export declare interface Project {
    name: string,
    description: string,
    image: string,
    start: Date,
    end?: Date,
    body?: JSX.Element,
    relatedSkills?: string[],
}
