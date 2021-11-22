import { Link } from "react-router-dom";

export default function Home({ topics, setTopics }) {
    return (
        <section className="home">
            <header className="home__header">
                <h1 className="home__title"> Welcome to NC News!</h1>
                <p className="home__subtitle">Please select a topic to view</p>
            </header>
            <main>
                <Link to={`/topics/all/articles`}>
                    <div className="topic__card">
                        <h2>All topics</h2>
                        <p>View all the topics available</p>
                    </div>
                </Link>
                {topics.map((topic) => {
                    return (
                        <div key={topic.slug} className="topic__card">
                            <h2>{topic.slug}</h2>
                            <p>{topic.description}</p>
                        </div>
                    );
                })}
            </main>
        </section>
    );
}
