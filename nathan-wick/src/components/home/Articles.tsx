import {ThemeContext,} from "../../contexts/Theme";
import {WindowContext,} from "../../contexts/Window";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import articleDark from "../../icons/article-dark.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import articleLight from "../../icons/article-light.svg";
import articles from "../../information/articles";
import {useContext,} from "react";

const Articles = () => {

    const {theme,} = useContext(ThemeContext,),
        {size,} = useContext(WindowContext,);

    return <>
        <div
            id="articles"
            className="align-horizontal-center">
            <img
                alt="Articles"
                className="icon-large"
                src={theme === `light`
                    ? articleDark
                    : articleLight}/>
            <div
                className="text-large">
                Articles
            </div>
        </div>
        <div
            className={theme === `light`
                ? `triangle-dark-white-top-left`
                : `triangle-light-black-top-left`}>
        </div>
        <div
            className={`align-horizontal-center ${
                theme === `light`
                    ? `background-dark-white`
                    : `background-light-black`
            }`}>
            <div
                className={`${
                    size === `large`
                        ? `row-3`
                        : `row`
                }`}>
                {
                    articles.slice(
                        0,
                        3,
                    ).map((article, articleIndex,) => <div
                        key={articleIndex}
                        className="column padding-1">
                        <div
                            className={`rounded ${
                                theme === `light`
                                    ? `background-white`
                                    : `background-black`
                            }`}>
                            <img
                                className="width-100 rounded"
                                src={article.image}
                                alt={article.name} />
                            <div
                                className="text-medium">
                                {article.name}
                            </div>
                            <div
                                className="text-small">
                                {article.description}
                            </div>
                            <button
                                onClick={() => window.open(
                                    `/articles/${article.name.toLowerCase().replace(
                                        / /gu,
                                        `-`,
                                    )}`,
                                    `_self`,
                                )}>
                                Learn More
                            </button>
                        </div>
                    </div>,)
                }
            </div>
            <button
                className={`margin-top-3 ${theme === `light`
                    ? `button-white`
                    : `button-black`}`}>
                View More Articles
            </button>
        </div>
        <div
            className={theme === `light`
                ? `triangle-dark-white-bottom-right`
                : `triangle-light-black-bottom-right`}>
        </div>
    </>;

};

export default Articles;
