import { Dropdown } from "react-bootstrap";

export default function SortBy({ setSort }) {
    const handleChange = (e) => {
        const { name } = e.target;

        setSort(name);
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                Sort by:
            </Dropdown.Toggle>
            <Dropdown.Menu onClick={handleChange}>
                <Dropdown.Item name="created_at" value="created_at">
                    Date Created
                </Dropdown.Item>
                <Dropdown.Item name="comment_count" value="comment_count">
                    Comment Count
                </Dropdown.Item>
                <Dropdown.Item name="votes" value="votes">
                    Votes
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
