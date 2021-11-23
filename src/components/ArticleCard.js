import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
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
}) {
    const [expanded, setExpanded] = useState(false);
    const [comments, setComments] = useState([]);
    const [addVote, setAddVote] = useState(0);
    const [isError, setIsError] = useState(null);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        if (article_id) {
            getCommentsByArticleId(article_id).then((articles) => {
                setComments(articles);
            });
        }
    }, [article_id]);

    const handleClick = () => {
        setIsError(false);
        setAddVote((prevVote) => prevVote + 1);
        incrementVote(article_id, {
            inc_votes: 1,
        }).catch((err) => {
            setIsError(true);
            setAddVote((prevVote) => prevVote - 1);
        });
    };

    return (
        <div className="article-card__info">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                    onClick={!!showContent ? null : handleExpandClick}
                >
                    <Link
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
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {body}
                                </Typography>
                            </CardContent>
                        )}
                    </Link>
                </CardActionArea>
                <CardActions disableSpacing>
                    <IconButton aria-label="votes" onClick={handleClick}>
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
                            <Link
                                to={`/topics/${topic}/articles/${article_id}`}
                            >
                                <CommentBadge commentCount={commentCount} />{" "}
                            </Link>
                        ) : (
                            <CommentBadge commentCount={commentCount} />
                        )}
                    </IconButton>
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
                {!!showContent ? null : <CommentForm />}
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {comments.map((comment) => {
                            return (
                                <CommentCard
                                    key={comment.comment_id}
                                    author={comment.author}
                                    votes={comment.votes}
                                    body={comment.body}
                                    created={comment.created_at}
                                />
                            );
                        })}
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}
