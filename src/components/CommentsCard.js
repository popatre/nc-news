import CommentsCardBody from "./CommentsCardBody";

export default function CommentCard({ author, votes, body, created }) {
    return (
        <CommentsCardBody
            author={author}
            created={created}
            body={body}
            votes={votes}
        />
    );
}
