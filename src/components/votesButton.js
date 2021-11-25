import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
export default function VotesButton({ votes }) {
    return (
        <Badge>
            <FavoriteIcon sx={{ color: "red" }} /> {votes}
        </Badge>
    );
}
