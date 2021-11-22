import { useParams } from "react-router-dom";

import Header from "../Header";
import ArticleGrid from "../ArticleGrid";

export default function Articles() {
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
            <ArticleGrid topic={topic} />
        </section>
    );
}
