import {Experience,} from "../types/Experience";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import UCITSCImage from "../images/uc-itsc-desk.webp";

const experiences: Experience[] = [
    {
        "city": `Cincinnati`,
        "company": `University of Cincinnati`,
        "contributions": [
            `Created Apple, Android, and web applications, serving over 50,000 users`,
            `Led the development of in-house solutions, saving the university over $15 million`,
            `Maintained proactive client communication, achieving 100% satisfaction`,
            `Collaborated in an agile team, delivering on-time, on-budget solutions`,
            `Designed efficient databases, speeding up development by 30%`,
            `Pioneered user onboarding, reducing support tickets by 50%`,
        ],
        "description": [`The ITSC is a leading research and development hub that is transforming the way we use technology. They develop web, mobile, and database applications to serve government agencies, start-ups, and research centers.`,],
        "end": new Date(`2024-01-02`,),
        "image": UCITSCImage,
        "start": new Date(`2022-08-08`,),
        "state": `Ohio`,
        "title": `Software Developer`,
    },
];

export default experiences;
