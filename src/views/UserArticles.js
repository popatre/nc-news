import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import ArticleCard from "../components/ArticleCard";
import Loading from "../components/Loading";

export default function UserArticles() {
    const { username } = useParams();
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getAllArticles()
            .then((res) => {
                setIsLoading(false);
                const filtered = res.filter((article) => {
                    return article.author === username;
                });
                setArticle(filtered);
            })
            .catch((err) => {
                setIsLoading(false);
            });
    }, [username]);
    if (isLoading) return <Loading />;

    return (
        <section className="account__articles container">
            <header>
                <h2 className="account__username__title"> Articles by {username}</h2>
            </header>
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
        </section>
    );
}
