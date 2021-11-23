import { styled } from "@mui/material/styles";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CommentCard from "./CommentsCard";

import { useEffect } from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentBadge from "./CommentButton";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

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
                        <CardHeader
                            avatar={
                                <Avatar
                                    sx={{ bgcolor: red[500] }}
                                    aria-label="author"
                                >
                                    {author[0].toUpperCase()}
                                </Avatar>
                            }
                            title={title}
                            subheader={`${author} posted on: ${created.slice(
                                0,
                                16
                            )} in ${topic}`}
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
                    <IconButton aria-label="votes">
                        <FavoriteIcon />
                        {votes}
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
