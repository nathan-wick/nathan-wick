import {Project,} from "../types/Project";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import catmapImage from "../images/catmap.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ifoundItImage from "../images/ifound-it.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import medpromptImage from "../images/medprompt.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import sprostImage from "../images/sprost.webp";

const projects: Project[] = [
    {
        "contributions": [
            `Created a real-time parking availability app with React, TypeScript, and Google Cloud Platform (GCP)`,
            `Integrated cloud functions to fetch data from UC's Parking Services API and store it in a database`,
            `Utilized a map-based interface to display parking occupancy, enabling informed decisions`,
        ],
        "description": [
            `CatMap is a web application designed to help users find parking on campus quickly and easily. It provides real-time information about the parking availability, so users can make informed decisions about where to park. The application also provides directions to any selected facility, so users can easily find their way to their destination.`,
            `The application is built with React, TypeScript, Bootstrap, and Google Firebase. The application uses cloud functions to call the University of Cincinnati's Parking Services API every hour and store the information into a database.`,
            `When a user opens the application, they see a map of the campus with pins on all the parking facilities. The user can select a pin to view the facility's past, present, and estimated occupancy. The user can also view directions to a facility by clicking on a button. The directions to the selected facility are calculated using Google Maps.`,
            `The application is a valuable resource for students, faculty, and staff who need to park on campus. It is also a useful tool for visitors who are unfamiliar with the campus.`,
        ],
        "domain": `https://catmap.nathanwick.com`,
        "end": new Date(`2023-08-12`,),
        "image": catmapImage,
        "name": `CatMap`,
        "repository": `https://github.com/nathan-wick/catmap`,
        "start": new Date(`2023-05-17`,),
        "summary": `This web application provides real-time information about the parking availability on campus.`,
        "version": {
            "major": 1,
            "minor": 0,
            "patch": 0,
        },
    },
    {
        "contributions": [
            `Developed a user-friendly cloud-based tool, streamlining web development for non-technical users`,
            `Implemented pre-built components, enabling code-free web app creation for users`,
            `Designed an intuitive interface for easy customization of web apps`,
        ],
        "description": [
            `Sprost is a cloud-based tool that uses pre-built components to simplify the web development process. By using pre-built components, the user can quickly and easily build a web app without having to learn how to code.`,
            `The tool works by first allowing the user to sign in with Google. The user then inputs information and files for the web app they would like built. This information includes the web app's title, description, and the pre-built components they want to use.`,
            `The tool then builds the web app with the user's inputed information. This process is automated, so the user does not need to know how to code. Once the web app is built, the user can edit it to their liking using a user-friendly interface. The user can then publish their web app for everyone to use on a given or custom domain.`,
            `If you are looking for a way to simplify the web development process, then Sprost is a good option. This tool can save you time, money, and hassle.`,
        ],
        "domain": `https://sprost.com`,
        "end": new Date(`2023-05-12`,),
        "image": sprostImage,
        "name": `Sprost`,
        "repository": `https://github.com/nathan-wick/sprost`,
        "start": new Date(`2022-10-12`,),
        "summary": `This cloud-based tool uses pre-built components to simplify the web development process.`,
        "version": {
            "major": 0,
            "minor": 12,
            "patch": 4,
        },
    },
    {
        "contributions": [
            `Developed and deployed an iOS app for users to post found items on a map`,
            `Utilized Swift, Xcode, and Google Cloud Platform (GCP) for secure and seamless user experience`,
            `Implemented a map-based interface for effortless viewing and contacting of item posters, promoting successful item reunification`,
        ],
        "description": [
            `A lost item can be a major inconvenience, but it can also be a source of stress and anxiety. If you've ever lost a valuable item, you know how frustrating it can be to try to track it down.`,
            `That's where iFound It comes in. This iOS app, which is built with Swift, Xcode, and Google Firebase, allows users to post found items on a map for others to see. This makes it easier for people to return lost items to their rightful owners.`,
            `To use the app, users simply sign in with Google or Apple. Once they're signed in, they can post a lost item by entering a description of the item and the location where it was found. The item is then posted on a map for other users to see.`,
            `Other users can view the item on the map and contact the user who posted it if they are interested in claiming it. The user who lost the item can then message the user who found the item to arrange a time and place to return it.`,
        ],
        "end": new Date(`2022-05-04`,),
        "image": ifoundItImage,
        "name": `iFound It`,
        "repository": `https://github.com/nathan-wick/found-not-lost`,
        "start": new Date(`2022-02-23`,),
        "summary": `This iOS app helps people return or find lost items by allowing users to post found items on a map for others to see.`,
        "version": {
            "major": 1,
            "minor": 0,
            "patch": 0,
        },
    },
    {
        "contributions": [
            `Led a 6-member agile team, delivering a high-quality Android app on time`,
            `Utilized SCRUM for organized and productive project management`,
            `Programmed a robust Android app, ensuring a user-friendly experience`,
        ],
        "description": [
            `MedPrompt is a native Android application that helps users stay organized and on top of their medication and doctor's appointments. The application was developed using the SCRUM project management framework and the Android Studio IDE, Kotlin language, and Git version control system.`,
            `The project was led by an agile team of 6 software developers, including myself. I was responsible for the overall project management. I worked closely with the team to ensure that the project was delivered on time.`,
            `The MedPrompt application is a valuable tool for users who want to stay organized and on top of their medication and doctor's appointments. The application is easy to use and has a number of features that make it a valuable resource for users, such as a reminder system that sends notifications to users when they need to take their medication or attend a doctor's appointment.`,
        ],
        "end": new Date(`2022-07-27`,),
        "image": medpromptImage,
        "name": `MedPrompt`,
        "repository": `https://github.com/nathan-wick/medprompt`,
        "start": new Date(`2022-05-11`,),
        "summary": `This Android application helps users stay organized and on top of their medication and doctor's appointments.`,
        "version": {
            "major": 1,
            "minor": 0,
            "patch": 0,
        },
    },
];

export default projects;
