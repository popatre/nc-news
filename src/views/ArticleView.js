import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import { getArticleById } from "../utils/api";

export default function ArticleView() {
    const { article_id } = useParams();
    const [article, setArticle] = useState([]);
    useEffect(() => {
        getArticleById(article_id).then((article) => {
            setArticle([article]);
        });
    }, [article_id]);

    return (
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
    );
}
