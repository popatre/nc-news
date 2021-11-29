import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

import Button from "@mui/material/Button";
import { postTopic } from "../utils/api";

export default function TopicForm({ setTopicSuccess, setTopics, setNewTopic }) {
    const [topic, setTopic] = useState({ slug: "", description: "" });

    const [postedTopic, setPostedTopic] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTopic((prevTopic) => {
            return { ...prevTopic, [name]: value };
        });
    };

    return (
        <div className="container topic__main">
            <form
                className="topic__post__form"
                onSubmit={(e) => {
                    e.preventDefault();
                    postTopic({
                        slug: topic.slug,

                        description: topic.description,
                    })
                        .then((res) => {
                            setPostedTopic(res);
                            setTopicSuccess(true);
                            setNewTopic(true);
                            setTopics((prevTopics) => {
                                return [...prevTopics, postedTopic];
                            });
                            console.log(res);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }}
            >
                <div>
                    <input
                        onChange={handleChange}
                        id="slug"
                        name="slug"
                        value={topic.title}
                        type="text"
                        placeholder="topic"
                        required
                    ></input>
                </div>
                <textarea
                    onChange={handleChange}
                    required
                    type="text"
                    value={topic.body}
                    id="description"
                    name="description"
                    placeholder="What's it about?..."
                    rows="5"
                ></textarea>
                <Button
                    className="topic__post__button"
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                >
                    Submit Topic
                </Button>
            </form>
        </div>
    );
}
