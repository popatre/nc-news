import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteArticle } from "../utils/api";

export default function DeleteArticleButton({ id, setList }) {
    const handleClick = () => {
        setList((prevList) => {
            return prevList.filter((item) => {
                return item.article_id !== id;
            });
        });
        deleteArticle(id).catch((err) => {
            console.dir(err);
            <p>error screen here</p>;
        });
    };

    return (
        <IconButton aria-label="delete" onClick={handleClick}>
            <DeleteIcon />
        </IconButton>
    );
}
