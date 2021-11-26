import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function PostButton() {
    return (
        <Button color={"info"} className="post__button" variant="contained" endIcon={<SendIcon />}>
            Add Article
        </Button>
    );
}
