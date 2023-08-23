import {Article,} from "../types/Article";
import EightEssentialTypescriptDataStructures from "../components/articles/EightEssentialTypescriptDataStructures";
import IntroductionToScratch from "../components/articles/IntroductionToScratch";
import MyGreatestStrength from "../components/articles/MyGreatestStrength";
import ProgrammingOneZeroOne from "../components/articles/ProgrammingOneZeroOne";
import ThreeTraitsEveryGoodProgrammerHas from "../components/articles/ThreeTraitsEveryGoodProgrammerHas";
import TimeComplexityExplainedSimple from "../components/articles/TimeComplexityExplainedSimple";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import eightEssentialTypescriptDataStructuresImage from "../images/data.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import introductionToScratchImage from "../images/scratch.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import myGreatestStrengthImage from "../images/strength.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import programmingOneZeroOneImage from "../images/laptop.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import threeTraitsEveryGoodProgrammerHasImageImage from "../images/programmer.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import timeComplexityExplainedSimpleImage from "../images/time.webp";

const articles: Article[] = [
    {
        "body": MyGreatestStrength,
        "date": new Date(`2023-8-17`,),
        "description": `This article introduces my greatest strength, with examples.`,
        "image": myGreatestStrengthImage,
        "name": `My Greatest Strength`,
    },
    {
        "body": ProgrammingOneZeroOne,
        "date": new Date(`2023-8-1`,),
        "description": `This article is a beginners guide to programming, with examples and a practice project.`,
        "image": programmingOneZeroOneImage,
        "name": `Programming 101`,
    },
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
    {
        "body": IntroductionToScratch,
        "date": new Date(`2023-8-23`,),
        "description": `This article is a beginners guide to Scratch, with examples and a practice project.`,
        "image": introductionToScratchImage,
        "name": `Introduction To Scratch`,
    },
];

export default articles;
