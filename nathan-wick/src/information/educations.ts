import {Education,} from "../types/Education";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import universityOfCincinnatiBackgroundImageDark from "../images/university-of-cincinnati-night.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import universityOfCincinnatiBackgroundImageLight from "../images/university-of-cincinnati-day.webp";

const educations: Education[] = [
    {
        "backgroundImageDark": universityOfCincinnatiBackgroundImageDark,
        "backgroundImageLight": universityOfCincinnatiBackgroundImageLight,
        "degree": `Bachelor of Science`,
        "featuredCoursework": [
            `Database Management 2`,
            `Mobile Device Programming`,
            `Enterprise Application Development`,
            `Web Server Application Development`,
            `Management in Information Technology`,
        ],
        "gradePointAverage": 4,
        "graduation": new Date(`2024-04-25`,),
        "major": `Software Development`,
        "title": `University of Cincinnati`,
    },
];

export default educations;
