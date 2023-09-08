import {Experience,} from "../types/Experience";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import UCITSCImage from "../images/uc-itsc-desk.webp";

const experiences: Experience[] = [
    {
        "city": `Cincinnati`,
        "company": `University of Cincinnati`,
        "contributions": [
            `Developed React and TypeScript web apps, serving 1,000+ users`,
            `Designed scalable PostgreSQL databases, cutting development time by 30%`,
            `Reduced support tickets by 50% with welcome tours and clear diagrams`,
            `Collaborated in an agile team, delivering on-time, on-budget solutions`,
            `Maintained proactive client communication, achieving 100% satisfaction`,
            `Ensured zero-security incidents by implementing user roles and permissions`,
        ],
        "description": [`The ITSC is a leading research and development hub that is transforming the way we use technology. They develop web, mobile, and database applications to serve government agencies, start-ups, and research centers.`,],
        "image": UCITSCImage,
        "start": new Date(`2022-08-08`,),
        "state": `Ohio`,
        "title": `Software Developer`,
    },
];

export default experiences;
