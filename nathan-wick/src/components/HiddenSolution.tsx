import {FC, useState,} from "react";

const HiddenSolution: FC<{
    solution: JSX.Element,
}> = ({solution,},) => {

    const [
        display,
        setDisplay,
    ] = useState(false,);

    return <>
        {
            display &&
                <>{solution}</>
        }
        <div
            className="width-100 align-horizontal-center">
            <button
                onClick={() => setDisplay(!display,)}>
                {display
                    ? `Hide`
                    : `Show`} Solution
            </button>
        </div>
    </>;

};

export default HiddenSolution;
