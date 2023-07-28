import {Education,} from "../types/Education";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import universityOfCincinnatiImage from "../images/university-of-cincinnati.webp";

const educations: Education[] = [
    {
        "city": `Cincinnati`,
        "degree": `Bachelor of Science`,
        "description": [`The University of Cincinnati (UC) is the overall best college in Ohio (according to the Niche report, 2022). UC also has a highly-ranked and accredited Software Development program, dedicated to shaping the newest Software Development professionals.`,],
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
        "school": `University of Cincinnati`,
        "start": new Date(`2020-04-26`,),
        "state": `Ohio`,
    },
];

export default educations;
