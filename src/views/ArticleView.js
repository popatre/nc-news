import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import Loading from "../components/Loading";
import { getArticleById } from "../utils/api";
import ErrorPage from "../views/ErrorPage";

export default function ArticleView() {
    const { article_id } = useParams();
    const [article, setArticle] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        getArticleById(article_id)
            .then((article) => {
                setIsLoading(false);
                setArticle([article]);
            })
            .catch((err) => {
                setIsLoading(false);
                const message = err.response.data.message;
                const errorCode = err.response.status;
                setError({ errorCode, message });
            });
    }, [article_id]);
    if (isLoading) return <Loading />;
    if (error)
        return (
            <ErrorPage errorCode={error.errorCode} message={error.message} />
        );

    return (
        <section className="article__single__viewer container">
            <div className="article__single">
                {article.map((article) => {
                    return (
                        <ArticleCard
                            key={article.article_id}
                            author={article.author}
                            topic={article.topic}
                            commentCount={article.comment_count}
                            body={article.body}
                            votes={article.votes}
                            title={article.title}
                            created={article.created_at}
                            article_id={article.article_id}
                        />
                    );
                })}
            </div>
        </section>
    );
}
