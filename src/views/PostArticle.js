import Header from "../components/Header";
import { useParams } from "react-router-dom";
import ArticleForm from "../components/ArticleForm";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function PostArticle() {
    const { slug } = useParams();
    const { isLoggedIn } = useContext(UserContext);

    return !isLoggedIn ?  <h2 className="signin-error"> You must be signed in to post</h2>:  (
        <div className="container articles__post__container">
            <Header className="articles__post__header"
                style={{ textAlign: "center" }}
                title="Posting in:"
                topic={slug}
            />
            <ArticleForm />
        </div>
    )
}
