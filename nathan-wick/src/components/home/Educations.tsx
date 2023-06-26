import educations from "../../information/educations";

const Educations = () => <>
    <div
        className="align-horizontal-center">
        <div
            className="text-large">
                Education
        </div>
    </div>
    {
        educations.map((education, educationIndex,) => <div
            key={educationIndex}
            className="row-2">
            <div
                className="column align-horizontal-center">
                <div
                    className="text-medium">
                    {education.title}
                </div>
            </div>
            <div
                className="column">
                <div
                    className="text-medium">
                    {education.title}
                </div>
                <div
                    className="text-small">
                    {education.degree}, {education.major}, {education.graduation.toLocaleString(
                        `default`,
                        {"month": `long`,},
                    )} {education.graduation.getFullYear()} <br />
                        Grade Point Average (GPA): {education.gradePointAverage.toFixed(1,)}
                </div>
                <div
                    className="text-small">
                        Featured Coursework:
                    <ul>
                        {
                            education.featuredCoursework.map((featuredCoursework, featuredCourseworkIndex,) => <li
                                key={featuredCourseworkIndex}>
                                {featuredCoursework}
                            </li>,)
                        }
                    </ul>
                </div>
                <div>
                    <button
                        className="button-small button-red">
                            Learn More
                    </button>
                </div>
            </div>
        </div>,)
    }
</>;

export default Educations;
