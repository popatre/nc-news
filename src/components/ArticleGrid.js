import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import TopicSelect from "./TopicSelect";
import { getAllArticles } from "../utils/api";
import { Link } from "react-router-dom";
export default function ArticleGrid({ topic, topics }) {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        getAllArticles(topic).then((articles) => {
            setArticles(articles);
        });
    }, [topic]);

    return (
        <main>
            <TopicSelect topics={topics} />
            <div className="article-card">
                {articles.map((article) => {
                    return (
                        <Link
                            key={article.article_id}
                            to={`/topics/${article.topic}/articles/${article.article_id}`}
                        >
                            <ArticleCard
                                author={article.author}
                                topic={article.topic}
                                commentCount={article.comment_count}
                                body={article.body}
                                votes={article.votes}
                                created={article.created_at}
                                title={article.title}
                                showContent="false"
                            />
                        </Link>
                    );
                })}
            </div>
        </main>
    );
}
