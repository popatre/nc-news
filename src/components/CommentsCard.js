import Typography from "@mui/material/Typography";
import ArticleCard from "./ArticleCard";

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
