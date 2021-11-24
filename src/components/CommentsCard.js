import CommentsCardBody from "./CommentsCardBody";

export default function CommentCard({
    author,
    votes,
    body,
    created,
    comment_id,
    setComments,
}) {
    return (
        <CommentsCardBody
            author={author}
            created={created}
            body={body}
            votes={votes}
            comment_id={comment_id}
            setComments={setComments}
        />
    );
}
