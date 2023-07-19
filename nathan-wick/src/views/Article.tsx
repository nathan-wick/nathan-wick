import React, {useContext,} from "react";
import {Helmet,} from "react-helmet";
import PageNotFound from "../components/PageNotFound";
import {ThemeContext,} from "../contexts/Theme";
import {WindowContext,} from "../contexts/Window";
import articles from "../information/articles";
import person from "../information/person";
import {useParams,} from "react-router-dom";

const Article = () => {

    const {theme,} = useContext(ThemeContext,),
        {size,} = useContext(WindowContext,),
        {articleId,} = useParams(),
        article = articles.find((findArticle,) =>
            findArticle.name.toLowerCase().replace(
                / /gu,
                `-`,
            ) === articleId,);

    return <>
        {
            article
                ? <>
                    <Helmet>
                        <title>{article.name}</title>
                        <meta name="description" content={article.description} />
                        <meta name="robots" content="index, follow" />
                    </Helmet>
                    <style>
                        {
                            `.article:before {
                            background-image: url(${article.image});
                        }`
                        }
                    </style>
                    <div
                        className="background-parallax-blur article align-horizontal-center">
                        <div
                            className="position-relative">
                            <div
                                className="padding-1 padding-top-5">
                                <div
                                    className={`width-fit-content padding-1 rounded ${theme === `light`
                                        ? `background-white`
                                        : `background-black`}`}>
                                    <div
                                        className="text-medium">
                                        {article.name}
                                    </div>
                                    <div
                                        className="text-small padding-1">
                                        By {person.name}, {article.date.toLocaleString(
                                            `default`,
                                            {"month": `long`,},
                                        )} {article.date.getFullYear()}
                                    </div>
                                </div>
                            </div>
                            <div
                                className={theme === `light`
                                    ? `triangle-white-top-left`
                                    : `triangle-black-top-left`}>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`margin-auto ${
                            size === `large`
                                ? `max-width-30 padding-1`
                                : size === `medium`
                                    ? `max-width-60 padding-1`
                                    : `width-100`
                        }`}>
                        {article.body}
                    </div>
                </>
                : <PageNotFound />
        }
    </>;

};

export default Article;
