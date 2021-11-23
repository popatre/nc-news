import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Fab, Zoom, ClickAwayListener } from "@mui/material";

import { useState } from "react";

export default function CommentForm() {
    const expand = () => {
        setIsExpanded(true);
    };

    const handleClickAway = () => {
        setIsExpanded(false);
    };

    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                console.log("hello");
            }}
        >
            <ClickAwayListener onClickAway={handleClickAway}>
                <textarea
                    onClick={expand}
                    type="text"
                    id="comment"
                    name="comment"
                    placeholder="Add a comment"
                    rows={isExpanded ? 5 : 1}
                ></textarea>
            </ClickAwayListener>
            <Zoom in={isExpanded}>
                <Fab
                    type="submit"
                    size="small"
                    aria-label="add-comment"
                    color="primary"
                >
                    <AddOutlinedIcon />
                </Fab>
            </Zoom>
        </form>
    );
}
