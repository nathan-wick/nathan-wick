import CodeBlock from "../CodeBlock";
import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import catmapImage from "../../images/projects/catmap/cover.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import coappImage from "../../images/projects/coapp/screenshot3.png";

const MyGreatestStrength = <>
    <div
        className="text-small text-indent">
        My greatest strength is <b>problem-solving</b>. This is a strength for me because I enjoy solving problems and I solve problems often.
    </div>
    <div
        className="text-medium">
        Example 1
    </div>
    <div
        className="text-small text-indent">
        As a student of the University of Cincinnati, I encountered challenges in finding convenient parking near my classes. My experiences included navigating through entire parking facilities only to discover no available spots and walking past many parking spaces closer to my destination.
    </div>
    <div
        className="text-small text-indent">
        I recognized that while the university already possessed a list of parking facilities and their occupancy rates, it was not user-friendly for new students or visitors unfamiliar with the campus layout. As a result, I devised a web application that presented a map of the university with parking facilities marked by pins, each pin colored to indicate current occupancy levels. Upon selecting a parking facility, the application provides real-time availability and directions, enabling users to navigate and park with ease.
    </div>
    <img
        className="width-100 rounded"
        src={catmapImage}
        alt={`CatMap web application screenshot`} />
    <div
        className="text-small text-indent">
        My initiative not only addresses a prevalent problem but also promotes efficient and effective use of parking resources, enhancing the overall campus experience.
    </div>
    <div
        className="text-medium">
        Example 2
    </div>
    <div
        className="text-small text-indent">
        While working at the University of Cincinnati ITSC, I spent a significant amount of my time developing CoApp, a web application that allows coaches and educators to collaborate and evaluate the impact of their instruction. When a coach and educator are ready to collaborate, they start a session. Only one session can be active between a coach and educator pair at a time.
    </div>
    <img
        className="width-100 rounded"
        src={coappImage}
        alt={`CatMap web application screenshot`} />
    <div
        className="text-small text-indent">
        During testing, a teammate was able to start multiple sessions with the same coach and educator pair. This problem only occurred occasionally, and we weren't sure why.
    </div>
    <div
        className="text-small text-indent">
        After more testing and code review, I found that the one-session-per-coach-and-educator-pair rule was only validated on the front-end of the application. This means that if an educator opened the application, their coach started a new session, and the educator started a new session without refreshing, there would be a duplicate session.
    </div>
    <div
        className="text-small text-indent">
        To fix this problem, I updated the front-end code to request the latest sessions list before validating the one-session-per-coach-and-educator-pair rule. I also added the following code to the Create Session use case on the back-end of the application:
    </div>
    <CodeBlock
        code={`const formSessions = await formSessionRepo.get({ userId: user.id });
const sessionExists = formSessions.some(formSession =>
    formSession.coachId === coachId &&
    formSession.teacherId === teacherId &&
    formSession.completed === false);

if (sessionExists) {
    throw new Error("Cannot have multiple active sessions with the same coach and educator.");
}`}
        language="typescript" />
</>;

export default MyGreatestStrength;
