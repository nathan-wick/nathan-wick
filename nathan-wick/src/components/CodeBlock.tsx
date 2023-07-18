import React, {FC, useContext,} from "react";
import {CodeBlock as ReactCodeBlock, dracula, monoBlue,} from "react-code-blocks";
import {ThemeContext,} from "../contexts/Theme";

const CodeBlock: FC<{
    code: string,
    language: string,
}> = ({code, language,},) => {

    const {theme,} = useContext(ThemeContext,);

    return <div
        className="text-small">
        <ReactCodeBlock
            text={code}
            language={language}
            showLineNumbers={false}
            theme={theme === `light`
                ? monoBlue
                : dracula}
            wrapLongLines={true} />
    </div>;

};

export default CodeBlock;
