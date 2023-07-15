import {Education,} from "../types/Education";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import universityOfCincinnatiImage from "../images/university-of-cincinnati.webp";

const educations: Education[] = [
    {
        "degree": `Bachelor of Science`,
        "end": new Date(`2024-04-25`,),
        "featuredCoursework": [
            `Database Management 2`,
            `Mobile Device Programming`,
            `Enterprise Application Development`,
            `Web Server Application Development`,
            `Management in Information Technology`,
        ],
        "gradePointAverage": 4,
        "image": universityOfCincinnatiImage,
        "major": `Software Development`,
        "start": new Date(`2020-04-26`,),
        "title": `University of Cincinnati`,
    },
];

export default educations;
