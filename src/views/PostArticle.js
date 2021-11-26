import Header from "../components/Header";
import { useParams } from "react-router-dom";
import ArticleForm from "../components/ArticleForm";

export default function PostArticle() {
    const { slug } = useParams();
    return (
        <div>
            <Header
                style={{ textAlign: "center" }}
                title="Posting in:"
                topic={slug}
            />
            <ArticleForm />
        </div>
    );
}
