import {Experience,} from "../types/Experience";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import UCITSCImage from "../images/uc-itsc-desk.webp";

const experiences: Experience[] = [
    {
        "company": `University of Cincinnati Information Technology Solution Center (ITSC)`,
        "contributions": [
            `Developed expertise with React, TypeScript, and Bootstrap to create responsive, user-friendly, and accessible web applications`,
            `Designed PostgreSQL databases and united them with web applications to efficiently collect, organize, and retrieve information`,
            `Worked closely with an agile team of over 20 members to provide end-to-end solutions for clients`,
        ],
        "description": [`The ITSC is a leading research and development hub that is transforming the way we use technology. They develop web, mobile, and database applications to serve government agencies, start-ups, and research centers.`,],
        "image": UCITSCImage,
        "start": new Date(`2022-08-08`,),
        "title": `Software Developer`,
    },
];

export default experiences;
