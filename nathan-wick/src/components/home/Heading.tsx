import {ThemeContext,} from "../../contexts/Theme";
import {WindowContext,} from "../../contexts/Window";
import person from "../../information/person";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import portrait from "../../images/portrait.webp";
import {useContext,} from "react";

const Heading = () => {

    const {theme,} = useContext(ThemeContext,),
        {size,} = useContext(WindowContext,);

    return <div
        className="container">
        <div
            className={`viewport-height-90 ${
                size === `large`
                    ? `row-2`
                    : `row`
            }`}>
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
                        {person.title}<br />
                        <i
                            className="text-muted">
                            {person.tagline}
                        </i>
                    </div>
                </div>
            </div>
            <div
                className="column container">
                <div
                    className="width-100">
                    <img
                        alt={person.name}
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
