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

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

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
}) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="article-card__info">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
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
                            <Typography variant="body2" color="text.secondary">
                                {body}
                            </Typography>
                        </CardContent>
                    )}
                </CardActionArea>
                <CardActions disableSpacing>
                    <IconButton aria-label="votes">
                        <FavoriteIcon />
                        {votes}
                    </IconButton>
                    <IconButton aria-label="comment">
                        <InsertCommentIcon />
                        {commentCount}
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
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>comments</Typography>
                        <Typography paragraph>comments</Typography>
                        <Typography paragraph>comments</Typography>
                        <Typography>comments</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}
