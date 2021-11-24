import Card from "@mui/material/Card";
import {
    CardHeader,
    CardContent,
    CardActions,
    IconButton,
    Typography,
} from "@mui/material";
import VotesButton from "./votesButton";
import DeleteButton from "./DeleteButton";
export default function CommentsCardBody({
    author,
    created,
    body,
    votes,
    comment_id,
    setComments,
}) {
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
                <DeleteButton id={comment_id} setList={setComments} />
            </CardActions>
        </Card>
    );
}
