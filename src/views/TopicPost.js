import TopicForm from "../components/TopicForm";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import PostSuccess from "../components/PostSuccess";

export default function TopicPost({ setTopics, setNewTopic }) {
    const { isLoggedIn } = useContext(UserContext);
    const [topicSuccess, setTopicSuccess] = useState(false);
    console.log(isLoggedIn);
    return !isLoggedIn ? (
        <h2>Must be logged in create a topic</h2>
    ) : !topicSuccess ? (
        <TopicForm
            setTopicSuccess={setTopicSuccess}
            setTopics={setTopics}
            setNewTopic={setNewTopic}
        />
    ) : (
        <PostSuccess />
    );
}
