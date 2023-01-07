import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

import { getAllArticles } from "../utils/api";

import ErrorPage from "../views/ErrorPage";
import Loading from "./Loading";
import Grid from "@mui/material/Grid";
import axios from "axios";

export default function ArticleGrid({ topic, sort, page }) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const [articles, setArticles] = useState([]);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getAllArticles(topic, sort, page, source)
            .then((articles) => {
                setIsLoading(false);
                setArticles(articles);
            })
            .catch((err) => {
                if (axios.isCancel(err)) {
                    console.log("successfully aborted");
                } else {
                    setIsLoading(false);
                    const message = err.response.data.message;
                    const errorCode = err.response.status;
                    setError({ errorCode, message });
                }
                return () => {
                    // cancel the request before component unmounts
                    source.cancel();
                };
            });
    }, [topic, sort, page]);

    if (isLoading) return <Loading />;
    if (error)
        return (
            <ErrorPage errorCode={error.errorCode} message={error.message} />
        );

    if (articles.length === 0)
        return (
            <p className="article__noDisplay">
                No articles to display. Why not be the first to post one?
            </p>
        );

    return (
        <main>
            <div className="article-card">
                <Grid container rowSpacing={4} columnSpacing={4}>
                    {articles.map((article) => {
                        return (
                            <Grid
                                key={article.article_id}
                                item
                                style={{ display: "flex" }}
                                xs={12}
                                sm={6}
                                md={6}
                                lg={4}
                            >
                                <ArticleCard
                                    key={article.article_id}
                                    author={article.author}
                                    topic={article.topic}
                                    commentCount={article.comment_count}
                                    body={article.body}
                                    votes={article.votes}
                                    created={article.created_at}
                                    title={article.title}
                                    article_id={article.article_id}
                                    showContent="false"
                                    setArticles={setArticles}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        </main>
    );
}
