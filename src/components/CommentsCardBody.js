import Card from "@mui/material/Card";
import { useContext } from "react";
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

export default function CommentsCardBody({
    author,
    created,
    body,
    votes,
    comment_id,
    setComments,
}) {
    const { user } = useContext(UserContext);

    return (
        <Card sx={{ maxWidth: 345 }}>
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
                <IconButton aria-label="votes">
                    <VotesButton votes={votes} />
                </IconButton>
                {author === user.username ? (
                    <DeleteButton id={comment_id} setList={setComments} />
                ) : null}
            </CardActions>
        </Card>
    );
}
