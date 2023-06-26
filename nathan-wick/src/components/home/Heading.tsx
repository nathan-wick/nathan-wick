import {ThemeContext,} from "../../contexts/Theme";
import person from "../../information/person";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import portrait from "../../images/portrait.png";
import {useContext,} from "react";

const Heading = () => {

    const {theme,} = useContext(ThemeContext,);

    return <div
        className="container">
        <div
            className="row-2 viewport-height-90">
            <div
                className="column container align-horizontal-center">
                <div
                    className="width-100 align-vertical-center">
                    <div
                        className="text-large">
                        {person.name}
                    </div>
                    <div
                        className="text-small">
                        {person.title}
                    </div>
                </div>
            </div>
            <div
                className="column container">
                <div
                    className="width-100">
                    <img
                        className="heading-portrait"
                        src={portrait} />
                </div>
            </div>
        </div>
        <div
            className={`overlap-triangle ${theme === `light`
                ? `triangle-dark-white-top-left`
                : `triangle-light-black-top-left`}`}>
        </div>
    </div>;

};

export default Heading;
