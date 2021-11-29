import CommentCard from "../components/CommentsCard";
import { getComments } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserComments() {
    const { username } = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then((res) => {
            const userComments = res.filter((comment) => {
                return comment.author === username;
            });
            setComments(userComments);
        });
    }, [username]);

    return (
        <div className="user-comments container">
            {comments.map((comment) => {
                return (
                    <CommentCard
                        key={comment.comment_id}
                        author={comment.author}
                        votes={comment.votes}
                        body={comment.body}
                        created={comment.created_at}
                        comment_id={comment.comment_id}
                    />
                );
            })}
        </div>
    );
}
