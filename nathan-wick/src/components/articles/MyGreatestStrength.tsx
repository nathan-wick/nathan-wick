import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import catmapImage from "../../images/projects/catmap/cover.webp";

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
</>;

export default MyGreatestStrength;
