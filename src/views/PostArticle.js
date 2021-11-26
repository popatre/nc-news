import Header from "../components/Header";
import { useParams } from "react-router-dom";
import ArticleForm from "../components/ArticleForm";
import { useContext,useState} from "react";
import { UserContext } from "../contexts/UserContext";

import PostSuccess from '../components/PostSuccess'


export default function PostArticle() {
    const { slug } = useParams();
    const { isLoggedIn } = useContext(UserContext);
    const [postSuccess, setPostSuccess] = useState(false)
   

    return !isLoggedIn ?  <h2 className="signin-error"> You must be signed in to post</h2>:  (
        postSuccess ? <div className="container"><PostSuccess /> 
        <ArticleForm setPostSuccess={setPostSuccess} postSuccess={postSuccess}/></div> : <div className="container articles__post__container">
            <Header className="articles__post__header"
                style={{ textAlign: "center" }}
                title="Posting in:"
                topic={slug}
            />
            
            <ArticleForm setPostSuccess={setPostSuccess} postSuccess={postSuccess}/>
        </div>
    )
}
