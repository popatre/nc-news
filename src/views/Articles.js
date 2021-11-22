import { useParams } from "react-router-dom";

import Header from "../components/Header";
import ArticleGrid from "../components/ArticleGrid";

export default function Articles({ topics }) {
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
            <ArticleGrid topic={topic} topics={topics} />
        </section>
    );
}
