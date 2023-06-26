import {Statistic,} from "../types/Statistic";
import daysDifference from "../utilities/daysDifference";

const today = new Date(),
    firstDayProgramming = new Date(`2017-06-01`,),
    averageHoursProgrammingPerDay = 6,
    daysSinceFirstDayProgramming = daysDifference(
        firstDayProgramming,
        today,
    ),
    programmingHours = averageHoursProgrammingPerDay * daysSinceFirstDayProgramming,
    averageLinesOfCodePerHour = 25,
    linesOfCodeContributed = programmingHours * averageLinesOfCodePerHour,
    averageLinesOfCodePerProject = 12000,
    completedSoftwareProjects = linesOfCodeContributed / averageLinesOfCodePerProject,
    statistics: Statistic[] = [
        {
            "title": `Software Development Hours`,
            "value": Math.round(programmingHours / 1000,) * 1000,
        },
        {
            "title": `Lines of Code Contributed`,
            "value": Math.round(linesOfCodeContributed / 1000,) * 1000,
        },
        {
            "title": `Completed Software Projects`,
            "value": Math.round(completedSoftwareProjects,),
        },
    ];

export default statistics;
