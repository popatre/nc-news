import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import SortBy from "../components/SortBy";
import TopicSelect from "../components/TopicSelect";
import ArticleGrid from "../components/ArticleGrid";

export default function Articles({ topics }) {
    const [sort, setSort] = useState();
    const [sortLabel, setSortLabel] = useState();
    const { slug } = useParams();
    let topic = "";
    if (slug === "all") {
        topic = undefined;
    } else {
        topic = slug;
    }

    return (
        <section className="articles">
            <Header title={slug} />
            <TopicSelect topics={topics} />
            <SortBy
                setSort={setSort}
                setSortLabel={setSortLabel}
                sortLabel={sortLabel}
            />
            <ArticleGrid topic={topic} topics={topics} sort={sort} />
        </section>
    );
}
