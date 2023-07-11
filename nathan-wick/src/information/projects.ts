import {Project,} from "../types/Project";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import catmapImage from "../images/catmap.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ifoundItImage from "../images/ifound-it.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import sprostImage from "../images/sprost.webp";

const projects: Project[] = [
    {
        "description": `This web application provides real-time information about the parking availability on campus.`,
        "end": new Date(`2023-06-18`,),
        "image": catmapImage,
        "name": `CatMap`,
        "start": new Date(`2023-05-17`,),
        "version": {
            "major": 1,
            "minor": 0,
            "patch": 0,
        },
    },
    {
        "description": `This cloud-based tool uses pre-built components to simplify the web development process.`,
        "end": new Date(`2023-05-12`,),
        "image": sprostImage,
        "name": `Sprost`,
        "start": new Date(`2022-10-12`,),
        "version": {
            "major": 0,
            "minor": 12,
            "patch": 4,
        },
    },
    {
        "description": `This iOS app helps people return or find lost items by enabling users to post found items on a map for others to see.`,
        "end": new Date(`2022-05-04`,),
        "image": ifoundItImage,
        "name": `iFound It`,
        "start": new Date(`2022-02-23`,),
        "version": {
            "major": 1,
            "minor": 0,
            "patch": 0,
        },
    },
];

export default projects;
