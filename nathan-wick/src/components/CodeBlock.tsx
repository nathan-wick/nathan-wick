import React, {FC, useContext,} from "react";
import {a11yDark, a11yLight,} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {ThemeContext,} from "../contexts/Theme";

const CodeBlock: FC<{
    code: string,
    language: string,
}> = ({code, language,},) => {

    const {theme,} = useContext(ThemeContext,);

    return <div
        className="text-small">
        <SyntaxHighlighter
            language={language}
            style={theme === `light`
                ? a11yLight
                : a11yDark}>
            {code}
        </SyntaxHighlighter>
    </div>;

};

export default CodeBlock;
