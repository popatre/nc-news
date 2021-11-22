import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import TopicSelect from "./TopicSelect";
import { getAllArticles } from "./utils/api";

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
                <ArticleCard articles={articles} />
            </div>
        </main>
    );
}
