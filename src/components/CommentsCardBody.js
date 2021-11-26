import Card from "@mui/material/Card";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import VotesButton from "./votesButton";
import DeleteButton from "./DeleteButton";
import {
    CardHeader,
    CardContent,
    CardActions,
    IconButton,
    Typography,
} from "@mui/material";
import { incrementCommentsVote } from "../utils/api";

export default function CommentsCardBody({
    author,
    created,
    body,
    votes,
    comment_id,
    setComments,
}) {
    const { user } = useContext(UserContext);
    const [isError, setIsError] = useState(false);
    const [addVote, setAddVote] = useState(0);

    const handleClick = () => {
        setIsError(false);
        setAddVote((prevVote) => prevVote + 1);
        incrementCommentsVote(comment_id, {
            inc_votes: 1,
        }).catch((err) => {
            setIsError(true);
            setAddVote((prevVote) => prevVote - 1);
        });
    };

    return (
        <Card className="comments__content">
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {body}
                </Typography>
            </CardContent>
            <CardHeader
                subheader={`${author} posted on ${created.slice(
                    0,
                    11
                )} at ${created.slice(11, 16)}`}
            />
            <CardActions disableSpacing>
                <IconButton
                    onClick={handleClick}
                    aria-label="votes"
                    disabled={user.username === author || !user.username}
                >
                    <VotesButton votes={votes + addVote} />
                </IconButton>
                {author === user.username ? (
                    <DeleteButton id={comment_id} setList={setComments} />
                ) : null}
            </CardActions>
        </Card>
    );
}
