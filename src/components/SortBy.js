import { Dropdown } from "react-bootstrap";
import { useEffect } from "react";

export default function SortBy({
    setSort,
    setSortLabel,
    sortLabel,
    setSearchParams,
    searchParams,
}) {
    let query = searchParams.get("sort_by");

    useEffect(() => {
        if (query !== null) {
            setSort(query);
        }
    }, [query]);

    const handleChange = (e) => {
        const { name } = e.target;
        // setSort(name);
        setSearchParams({ sort_by: name });
        // setSortLabel(searchParams.get("sort_by"));
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                {query !== null ? query : "Sort by:"}
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
