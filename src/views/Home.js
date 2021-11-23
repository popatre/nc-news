import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import TopicCard from "../components/TopicCard";

export default function Home({ topics, setTopics, isLoading }) {
    if (isLoading) return <CircularProgress color="success" />;
    return (
        <section className="home">
            <header className="home__header">
                <h1 className="home__title"> Welcome to NC News!</h1>
                <p className="home__subtitle">Please select a topic to view</p>
            </header>
            <main>
                <Link to={`/topics/all/articles`}>
                    <TopicCard
                        slug="All Articles"
                        description="View all the articles available for every topic"
                    />
                </Link>

                {topics.map((topic) => {
                    return (
                        <Link to={`/topics/${topic.slug}/articles`}>
                            <TopicCard
                                key={topic.slug}
                                slug={topic.slug}
                                description={topic.description}
                            />
                        </Link>
                    );
                })}
            </main>
        </section>
    );
}
