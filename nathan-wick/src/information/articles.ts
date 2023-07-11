import {Article,} from "../types/Article";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import threeTraitsEveryGoodProgrammerHasImage from "../images/3-traits-every-good-programmer-has.png";

const articles: Article[] = [
    {
        "date": new Date(`2022-4-27`,),
        "description": `Learn the 3 essential traits that every good programmer has, and start developing them today!`,
        "image": threeTraitsEveryGoodProgrammerHasImage,
        "name": `3 Traits Every Good Programmer Has`,
    },
    {
        "date": new Date(`2022-4-29`,),
        "description": `This article will break down time complexity in simple terms, with examples and illustrations.`,
        "image": threeTraitsEveryGoodProgrammerHasImage,
        "name": `Time Complexity Explained Simple`,
    },
    {
        "date": new Date(`2022-11-11`,),
        "description": `This article will cover 8 of the most important data structures, with code examples and explanations.`,
        "image": threeTraitsEveryGoodProgrammerHasImage,
        "name": `8 Essential Typescript Data Structures`,
    },
];

export default articles;
