import Typography from "@mui/material/Typography";

export default function CommentCard({ author, votes, body, created }) {
    return (
        <Typography paragraph>
            <p>{author}</p>
            <p>{created}</p>
            <p>{body}</p>
            <p>{votes}</p>
        </Typography>
    );
}
