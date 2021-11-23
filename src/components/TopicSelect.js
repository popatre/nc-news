import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

export default function TopicSelect({ topics }) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                Select a topic:
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {topics.map((topic) => {
                    return (
                        <Dropdown.Item
                            key={topic.slug}
                            as={Link}
                            to={`/topics/${topic.slug}/articles`}
                        >
                            {topic.slug}
                        </Dropdown.Item>
                    );
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
}
