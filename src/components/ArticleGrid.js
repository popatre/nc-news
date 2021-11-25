import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

import { getAllArticles } from "../utils/api";

import ErrorPage from "../views/ErrorPage";
import Loading from "./Loading";

export default function ArticleGrid({ topic, sort }) {
    const [articles, setArticles] = useState([]);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getAllArticles(topic, sort)
            .then((articles) => {
                setIsLoading(false);
                setArticles(articles);
            })
            .catch((err) => {
                setIsLoading(false);
                const message = err.response.data.message;
                const errorCode = err.response.status;
                setError({ errorCode, message });
            });
    }, [topic, sort]);

    if (isLoading) return <Loading />;
    if (error)
        return (
            <ErrorPage errorCode={error.errorCode} message={error.message} />
        );

    return (
        <main>
            <div className="article-card">
                {articles.map((article) => {
                    return (
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
                        />
                    );
                })}
            </div>
        </main>
    );
}
