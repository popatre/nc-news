import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import VotesButton from "./votesButton";
export default function CommentsCardBody({ author, created, body, votes }) {
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
            </CardActions>
        </Card>
    );
}
