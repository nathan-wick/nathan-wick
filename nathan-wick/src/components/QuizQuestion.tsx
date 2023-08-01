import {FC, useContext, useEffect, useState,} from "react";
import {ThemeContext,} from "../contexts/Theme";

const QuizQuestion: FC<{
    solution: string,
}> = ({solution,},) => {

    const {theme,} = useContext(ThemeContext,),
        [
            input,
            setInput,
        ] = useState(``,),
        [
            status,
            setStatus,
        ] = useState<boolean>(),
        verifyInput = () => {

            setStatus(input === solution,);

        };

    useEffect(
        () => {

            setStatus(undefined,);

        },
        [input,],
    );

    return <div
        className="width-100 align-horizontal-center">
        <input
            type="text"
            className={`${status
                ? `background-green`
                : status === false
                    ? `background-red`
                    : theme === `light`
                        ? `background-dark-white`
                        : `background-light-black`}`}
            onChange={(event,) => setInput(event.target.value,)}
            placeholder="Enter Your Answer Here" />
        <button
            onClick={() => verifyInput()}>
            Submit
        </button>
    </div>;

};

export default QuizQuestion;
