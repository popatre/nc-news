import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import TopicSelect from "./TopicSelect";
import { getAllArticles } from "../utils/api";
import SortBy from "./SortBy";

export default function ArticleGrid({ topic, topics }) {
    const [articles, setArticles] = useState([]);
    const [sort, setSort] = useState();

    useEffect(() => {
        getAllArticles(topic, sort).then((articles) => {
            setArticles(articles);
        });
    }, [topic, sort]);

    return (
        <main>
            <TopicSelect topics={topics} />
            <SortBy setSort={setSort} />
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
