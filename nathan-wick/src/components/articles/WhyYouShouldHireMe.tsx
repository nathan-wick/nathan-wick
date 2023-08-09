import React from "react";
import educations from "../../information/educations";
import person from "../../information/person";
import statistics from "../../information/statistics";

const softwareDevelopmentHours = statistics.find((statistic,) => statistic.title === `Software Development Hours`,)?.value.toLocaleString(),
    softwareProjectsCompleted = statistics.find((statistic,) => statistic.title === `Software Projects Completed`,)?.value.toLocaleString(),
    lastEducationSchool = educations[0].school,
    lastEducationGradePointAverage = educations[0].gradePointAverage.toFixed(1,),
    WhyYouShouldHireMe = <>
        <div
            className="text-medium">
            Introduction
        </div>
        <div
            className="text-small text-indent">
            I'm {person.name}, a passionate Software Developer with a knack for turning ideas into code. With about {softwareDevelopmentHours} hours of software development under my belt, I've contributed over a million lines of unique code across {softwareProjectsCompleted} completed projects. As a student at the {lastEducationSchool}, I've maintained a perfect {lastEducationGradePointAverage} GPA, proving my dedication to excellence.
        </div>
    </>;

export default WhyYouShouldHireMe;
