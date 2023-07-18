import {Article,} from "../types/Article";
import EightEssentialTypescriptDataStructures from "../components/articles/EightEssentialTypescriptDataStructures";
import ThreeTraitsEveryGoodProgrammerHas from "../components/articles/ThreeTraitsEveryGoodProgrammerHas";
import TimeComplexityExplainedSimple from "../components/articles/TimeComplexityExplainedSimple";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import eightEssentialTypescriptDataStructuresImage from "../images/data.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import threeTraitsEveryGoodProgrammerHasImageImage from "../images/programmer.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import timeComplexityExplainedSimpleImage from "../images/time.webp";

const articles: Article[] = [
    {
        "body": ThreeTraitsEveryGoodProgrammerHas,
        "date": new Date(`2022-4-27`,),
        "description": `Learn the 3 essential traits that every good programmer has, and start developing them today!`,
        "image": threeTraitsEveryGoodProgrammerHasImageImage,
        "name": `3 Traits Every Good Programmer Has`,
    },
    {
        "body": TimeComplexityExplainedSimple,
        "date": new Date(`2022-4-29`,),
        "description": `This article will break down time complexity in simple terms, with examples and illustrations.`,
        "image": timeComplexityExplainedSimpleImage,
        "name": `Time Complexity Explained Simple`,
    },
    {
        "body": EightEssentialTypescriptDataStructures,
        "date": new Date(`2022-11-11`,),
        "description": `This article will cover 8 of the most important data structures, with code examples and explanations.`,
        "image": eightEssentialTypescriptDataStructuresImage,
        "name": `8 Essential Typescript Data Structures`,
    },
];

export default articles;
