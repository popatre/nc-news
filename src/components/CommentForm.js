import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Fab, Zoom, ClickAwayListener } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";

import { useState } from "react";

export default function CommentForm({ setComments }) {
    const { article_id } = useParams();
    const [postSuccess, setPostSuccess] = useState(false);
    const { user, isLoggedIn } = useContext(UserContext);
    const [comment, setComment] = useState("");

    const expand = () => {
        setIsExpanded(true);
        setPostSuccess(false);
    };
    const handlePlaceholder = () => {
        if (!isLoggedIn) {
            return "Must be logged in to comment";
        } else {
            return !postSuccess ? "Add a comment" : "Successfully posted!";
        }
    };

    const handleClickAway = () => {
        setIsExpanded(false);
    };
    const handleChange = (e) => {
        const { value } = e.target;
        setComment(value);
    };

    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <form
            className="comments__form"
            onSubmit={(e) => {
                e.preventDefault();

                postComment(article_id, {
                    username: user.username,
                    body: comment,
                })
                    .then((res) => {
                        console.log("success");
                        console.log(res);
                        setComments((prevComments) => {
                            return [...prevComments, res];
                        });
                        setPostSuccess(true);
                        setComment("");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }}
        >
            <ClickAwayListener onClickAway={handleClickAway}>
                <textarea
                    required
                    onClick={expand}
                    onChange={handleChange}
                    type="text"
                    value={comment}
                    id="comment"
                    name="comment"
                    placeholder={handlePlaceholder()}
                    rows={isExpanded ? 5 : 1}
                    disabled={!isLoggedIn}
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
