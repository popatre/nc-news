export default function TopicSelect({ topics }) {
    console.log(topics);
    return (
        <form>
            <p>Please choose a category from the dropdown</p>
            <label htmlFor="topics">Topics:</label>
            <select
                onChange={(e) => {
                    const { value } = e.target;
                    window.location = `/topics/${value}/articles`;
                }}
                name="topics"
                id="topics"
            >
                <option value="" selected disabled>
                    Please select
                </option>
                {topics.map((topic) => {
                    return (
                        <option
                            key={topic}
                            value={topic.slug}
                            name={topic.slug}
                        >
                            {topic.slug}
                        </option>
                    );
                })}

                {/* <option value="Football">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Household">Household</option> */}
            </select>
        </form>
    );
}
