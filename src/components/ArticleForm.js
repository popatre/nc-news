import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";
import { postArticle } from "../utils/api";
import ArticleCard from './ArticleCard'


export default function ArticleForm({setPostSuccess, postSuccess}) {
    const { user } = useContext(UserContext);
    const [article, setArticle] = useState({ title: "", body: "" });
     
     const [postedArticle, setPostedArticle] = useState({})
    const { slug } = useParams();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setArticle((prevArticle) => {
            return { ...prevArticle, [name]: value };
        });
    };

    return (
        postSuccess?<div>
        
        <ArticleCard author={postedArticle.author}
                            topic={postedArticle.topic}
                            commentCount={postedArticle.comment_count}
                            body={postedArticle.body}
                            votes={postedArticle.votes}
                            title={postedArticle.title}
                            created={postedArticle.created_at}
                            article_id={postedArticle.article_id}/>
                            </div> :
        <form className="articles__post__form"
            onSubmit={(e) => {
                e.preventDefault();
                postArticle({
                    author: user.username,
                    topic: slug,
                    title: article.title,
                    body: article.body,
                })
                    .then((res) => {
                        setPostedArticle(res)
                        setPostSuccess(true)
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }}
        ><div>
           
            <input
                onChange={handleChange}
                id="title"
                name="title"
                value={article.title}
                type="text" placeholder="title"
                required
            ></input>
            </div>
            <textarea
                onChange={handleChange}
                required
                type="text"
                value={article.body}
                id="body"
                name="body"
                placeholder="Your interesting article..."
                rows="5"
            ></textarea>
            <Button className="articles__post__button" type="submit" variant="contained" endIcon={<SendIcon />}>
                Submit Article
            </Button>
        
        </form>
        
    );
}
