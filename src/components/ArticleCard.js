import {
    CardActionArea,
    Card,
    CardContent,
    CardActions,
    Collapse,
    IconButton,
    Typography,
} from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CommentCard from "./CommentsCard";
import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentBadge from "./CommentButton";
import VotesButton from "./votesButton";
import { incrementVote } from "../utils/api";
import ArticleCardHeader from "./ArticleCardHeader";
import { ExpandMore } from "../utils/ExpandMore";
import CommentForm from "./CommentForm";
import DeleteArticleButton from "./DeleteArticleButton";
import { useParams } from "react-router-dom";

export default function ArticleCard({
    author,
    title,
    topic,
    commentCount,
    votes,
    body,
    created,
    showContent,
    article_id,
    setArticles,
}) {
    const [expanded, setExpanded] = useState(false);
    const [comments, setComments] = useState([]);
    const [addVote, setAddVote] = useState(0);
    const [isError, setIsError] = useState(null);
    const [voted, setVoted] = useState(false);
    const { user, isLoggedIn } = useContext(UserContext);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    console.log();
    const checker = useParams().article_id;
    useEffect(() => {
        if (checker) {
            getCommentsByArticleId(article_id).then((articles) => {
                setComments(articles);
            });
        }
    }, [article_id]);

    const handleClick = () => {
        setIsError(false);
        setVoted(true);
        setAddVote((prevVote) => prevVote + 1);
        incrementVote(article_id, {
            inc_votes: 1,
        }).catch((err) => {
            setIsError(true);
            setAddVote((prevVote) => prevVote - 1);
        });
    };

    return (
        // <div className="article-card__info">
        <Card style={{ width: "100%" }}>
            <CardActionArea onClick={!!showContent ? null : handleExpandClick}>
                <Link
                    className="article-card__info--link"
                    key={article_id}
                    to={`/topics/${topic}/articles/${article_id}`}
                >
                    <ArticleCardHeader
                        author={author}
                        created={created}
                        topic={topic}
                        title={title}
                    />

                    {!!showContent ? null : (
                        <CardContent className="article__body">
                            <Typography variant="body2" color="text.secondary">
                                {body}
                            </Typography>
                        </CardContent>
                    )}
                </Link>
            </CardActionArea>
            <CardActions disableSpacing>
                <IconButton
                    disabled={user.username === author || !isLoggedIn || voted}
                    aria-label="votes"
                    onClick={handleClick}
                >
                    <VotesButton
                        className="votes-btn"
                        votes={votes + addVote}
                    />
                    {isError && (
                        <p className="error-msg">
                            Something went wrong, please try again
                        </p>
                    )}
                </IconButton>
                <IconButton
                    aria-label="comment"
                    onClick={!!showContent ? null : handleExpandClick}
                >
                    {!!showContent ? (
                        <Link to={`/topics/${topic}/articles/${article_id}`}>
                            <CommentBadge commentCount={commentCount} />{" "}
                        </Link>
                    ) : (
                        <CommentBadge commentCount={commentCount} />
                    )}
                </IconButton>

                {author === user.username ? (
                    <DeleteArticleButton
                        id={article_id}
                        setList={setArticles}
                    />
                ) : null}

                {!!showContent ? null : (
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                )}
            </CardActions>

            {!!showContent ? null : <CommentForm setComments={setComments} />}
            <Collapse
                className="comments__collapse"
                in={expanded}
                timeout="auto"
                unmountOnExit
            >
                <CardContent className="comments__display">
                    {comments.map((comment) => {
                        return (
                            <CommentCard
                                key={comment.comment_id}
                                author={comment.author}
                                votes={comment.votes}
                                body={comment.body}
                                created={comment.created_at}
                                comment_id={comment.comment_id}
                                setComments={setComments}
                            />
                        );
                    })}
                </CardContent>
            </Collapse>
        </Card>
    );
}
