import Typography from "@mui/material/Typography";
import CommentsCardBody from "./CommentsCardBody";

export default function CommentCard({ author, votes, body, created }) {
    return (
        <Typography paragraph>
            <CommentsCardBody
                author={author}
                created={created}
                body={body}
                votes={votes}
            />
        </Typography>
    );
}
