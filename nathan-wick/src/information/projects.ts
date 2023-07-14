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
        "domain": `https://catmap.nathanwick.com`,
        "end": new Date(`2023-06-18`,),
        "image": catmapImage,
        "name": `CatMap`,
        "repository": `https://github.com/nathan-wick/catmap`,
        "start": new Date(`2023-05-17`,),
        "summary": `This web application provides real-time information about the parking availability on campus.`,
        "version": {
            "major": 1,
            "minor": 0,
            "patch": 0,
        },
    },
    {
        "domain": `https://sprost.com`,
        "end": new Date(`2023-05-12`,),
        "image": sprostImage,
        "name": `Sprost`,
        "repository": `https://github.com/nathan-wick/sprost`,
        "start": new Date(`2022-10-12`,),
        "summary": `This cloud-based tool uses pre-built components to simplify the web development process.`,
        "version": {
            "major": 0,
            "minor": 12,
            "patch": 4,
        },
    },
    {
        "description": [
            `A lost item can be a major inconvenience, but it can also be a source of stress and anxiety. If you've ever lost a valuable item, you know how frustrating it can be to try to track it down.`,
            `That's where a new iOS app comes in. This app, which is built with Swift, Xcode, and Google Firebase, allows users to post found items on a map for others to see. This makes it easier for people to return lost items to their rightful owners.`,
            `To use the app, users simply sign in with Google or Apple. Once they're signed in, they can post a lost item by entering a description of the item, the location where it was found, and any other relevant information. The item is then posted on a map for other users to see.`,
            `Other users can view the item on the map and contact the user who posted it if they are interested in claiming it. The user who lost the item can then message the user who found the item to arrange a time and place to return it.`,
            `The app is a great way to help people return or find lost items.`,
        ],
        "end": new Date(`2022-05-04`,),
        "image": ifoundItImage,
        "name": `iFound It`,
        "repository": `https://github.com/nathan-wick/found-not-lost`,
        "start": new Date(`2022-02-23`,),
        "summary": `This iOS app helps people return or find lost items by allowing users to post found items on a map for others to see.`,
        "version": {
            "major": 1,
            "minor": 0,
            "patch": 0,
        },
    },
];

export default projects;
