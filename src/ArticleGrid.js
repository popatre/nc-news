import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "./utils/api";

export default function ArticleGrid({ topic }) {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        getAllArticles(topic).then((articles) => {
            setArticles(articles);
        });
    }, [articles]);

    return (
        <main>
            <div className="article-card">
                <ArticleCard articles={articles} />
            </div>
        </main>
    );
}
