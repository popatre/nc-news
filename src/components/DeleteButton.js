import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteComment } from "../utils/api";

export default function DeleteButton({ id, setList }) {
    const handleClick = () => {
        setList((prevList) => {
            return prevList.filter((item) => {
                return item.comment_id !== id;
            });
        });
        deleteComment(id);
    };

    return (
        <IconButton aria-label="delete" onClick={handleClick}>
            <DeleteIcon />
        </IconButton>
    );
}
