import {Experience,} from "../types/Experience";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import UCITSCImage from "../images/uc-itsc-desk.webp";

const experiences: Experience[] = [
    {
        "company": `University of Cincinnati Information Technology Solution Center (ITSC)`,
        "contributions": [
            `Developed expertise with React, TypeScript, and Bootstrap to create responsive, user-friendly, and accessible web applications`,
            `Designed and implemented efficient and scalable PostgreSQL databases, which resulted in a 30% reduction in development time`,
            `Worked closely with an agile team to provide end-to-end solutions for clients that met their specific needs, on time and within budget`,
            `Designed and implemented diagrams and charts to display data in a clear and concise way, which helped clients to make better decisions`,
            `Created and implemented a welcome tour to show users how to use the application, which resulted in a 50% reduction in user support tickets`,
            `Communicated regularly with clients to keep them informed of the project's progress and to get their feedback, resulting in a 100% satisfaction rating`,
            `Designed and implemented user roles and permissions for several applications that ensured that users had the appropriate level of access, resulting in a reduction of security incidents to zero`,
        ],
        "description": [`The ITSC is a leading research and development hub that is transforming the way we use technology. They develop web, mobile, and database applications to serve government agencies, start-ups, and research centers.`,],
        "image": UCITSCImage,
        "start": new Date(`2022-08-08`,),
        "title": `Software Developer`,
    },
];

export default experiences;
