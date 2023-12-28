import {Project,} from "../types/Project";

const catmapImages = require.context(
        `../images/projects/catmap`,
        false,
    ),
    catmapImagesList = catmapImages.keys().
        map((image,) => String(catmapImages(image,),),),
    coappImages = require.context(
        `../images/projects/coapp`,
        false,
    ),
    coappImagesList = coappImages.keys().
        map((image,) => String(coappImages(image,),),),
    ifounditImages = require.context(
        `../images/projects/ifoundit`,
        false,
    ),
    ifounditImagesList = ifounditImages.keys().
        map((image,) => String(ifounditImages(image,),),),
    medpromptImages = require.context(
        `../images/projects/medprompt`,
        false,
    ),
    medpromptImagesList = medpromptImages.keys().
        map((image,) => String(medpromptImages(image,),),),
    sprostImages = require.context(
        `../images/projects/sprost`,
        false,
    ),
    sprostImagesList = sprostImages.keys().
        map((image,) => String(sprostImages(image,),),),
    projects: Project[] = [
        {
            "contributions": [
                `Created a real-time parking availability app with React, TypeScript, and Google Cloud Platform (GCP)`,
                `Integrated cloud functions to fetch data from UC's Parking Services API and store it in a database`,
                `Deployed a map-based interface to display parking occupancy, enabling informed decisions`,
            ],
            "description": [
                `CatMap is a web application designed to help users find parking on campus quickly and easily. It provides real-time information about the parking availability, so users can make informed decisions about where to park. The application also provides directions to any selected facility, so users can easily find their way to their destination.`,
                `The application is built with React, TypeScript, Bootstrap, and Google Firebase. The application uses cloud functions to call the University of Cincinnati's Parking Services API every hour and store the information into a database.`,
                `When a user opens the application, they see a map of the campus with pins on all the parking facilities. The user can select a pin to view the facility's past, present, and estimated occupancy. The user can also view directions to a facility by clicking on a button. The directions to the selected facility are calculated using Google Maps.`,
                `The application is a valuable resource for students, faculty, and staff who need to park on campus. It is also a useful tool for visitors who are unfamiliar with the campus.`,
            ],
            "domain": `https://catmap.nathanwick.com`,
            "end": new Date(`2023-08-12`,),
            "image": catmapImagesList[0],
            "name": `CatMap`,
            "repository": `https://github.com/nathan-wick/catmap`,
            "screenshots": catmapImagesList,
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
                `Constructed a user-friendly cloud-based tool, streamlining web development for non-technical users`,
                `Launched pre-built components, enabling code-free web app creation for users`,
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
            "image": sprostImagesList[0],
            "name": `Sprost`,
            "repository": `https://github.com/nathan-wick/sprost`,
            "screenshots": sprostImagesList,
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
                `Pioneered user onboarding, reducing support tickets by 50%`,
                `Developed an efficient database, speeding up development by 30%`,
                `Collaborated in an agile team, delivering on-time, on-budget solutions`,
                `Maintained proactive client communication, achieving 100% satisfaction`,
                `Designed a friendly user interface with React, TypeScript, and Bootstrap`,
                `Ensured zero-security incidents by implementing user roles and permissions`,
            ],
            "description": [
                `CoApp is a virtual coaching tool that helps educators refine their practice, implement effective literacy strategies, and improve student outcomes. It does this by supporting educators in using evidence-based practices, providing individualized coaching, and facilitating two-way communication between educators and coaches.`,
                `CoApp allows educators to share reflections, receive feedback, and respond to feedback, while coaches can provide observation notes, share teaching strategies, and deliver performance-based feedback. This ongoing dialogue leads to small, actionable steps that can make a big difference in the classroom.`,
            ],
            "end": new Date(`2023-08-20`,),
            "image": coappImagesList[0],
            "name": `CoApp`,
            "screenshots": coappImagesList,
            "start": new Date(`2022-08-08`,),
            "summary": `CoApp is a web application that allows coaches and educators to collaborate and evaluate the impact of their literacy instruction.`,
            "version": {
                "major": 1,
                "minor": 7,
                "patch": 0,
            },
        },
        {
            "contributions": [
                `Produced an iOS app for users to post found items on a map`,
                `Utilized Swift, Xcode, and Google Cloud Platform (GCP) for secure and seamless user experience`,
                `Carried out a map-based interface for effortless viewing and contacting of item posters, promoting item reunification`,
            ],
            "description": [
                `A lost item can be a major inconvenience, but it can also be a source of stress and anxiety. If you've ever lost a valuable item, you know how frustrating it can be to try to track it down.`,
                `That's where iFound It comes in. This iOS app, which is built with Swift, Xcode, and Google Firebase, allows users to post found items on a map for others to see. This makes it easier for people to return lost items to their rightful owners.`,
                `To use the app, users simply sign in with Google or Apple. Once they're signed in, they can post a lost item by entering a description of the item and the location where it was found. The item is then posted on a map for other users to see.`,
                `Other users can view the item on the map and contact the user who posted it if they are interested in claiming it. The user who lost the item can then message the user who found the item to arrange a time and place to return it.`,
            ],
            "end": new Date(`2022-05-04`,),
            "image": ifounditImagesList[0],
            "name": `iFound It`,
            "repository": `https://github.com/nathan-wick/found-not-lost`,
            "screenshots": ifounditImagesList,
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
                `Applied SCRUM for organized and productive project management`,
                `Programmed a robust Android app, ensuring a user-friendly experience`,
            ],
            "description": [
                `MedPrompt is a native Android application that helps users stay organized and on top of their medication and doctor's appointments. The application was developed using the SCRUM project management framework and the Android Studio IDE, Kotlin language, and Git version control system.`,
                `The project was led by an agile team of 6 software developers, including myself. I was responsible for the overall project management. I worked closely with the team to ensure that the project was delivered on time.`,
                `The MedPrompt application is a valuable tool for users who want to stay organized and on top of their medication and doctor's appointments. The application is easy to use and has a number of features that make it a valuable resource for users, such as a reminder system that sends notifications to users when they need to take their medication or attend a doctor's appointment.`,
            ],
            "end": new Date(`2022-07-27`,),
            "image": medpromptImagesList[0],
            "name": `MedPrompt`,
            "repository": `https://github.com/nathan-wick/medprompt`,
            "screenshots": medpromptImagesList,
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
