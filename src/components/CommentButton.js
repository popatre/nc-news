import Badge from "@mui/material/Badge";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

export default function CommentBadge({ commentCount }) {
    return (
        <Badge badgeContent={commentCount} color="warning">
            <InsertCommentIcon />
        </Badge>
    );
}
