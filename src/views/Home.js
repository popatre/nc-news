import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";

import TopicCard from "../components/TopicCard";
import Loading from "../components/Loading";

export default function Home({ topics, setTopics, isLoading }) {
    if (isLoading) return <Loading />;
    return (
        <section className="home container">
            <Grid container rowSpacing={4} columnSpacing={4}>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <header className="home__header">
                        <h1 className="home__title"> Welcome to NC News!</h1>
                        <p className="home__subtitle">
                            Please select a topic to view
                        </p>
                    </header>
                </Grid>
            </Grid>
            <main className="container">
                <Grid container rowSpacing={6} columnSpacing={4}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Link
                            className="home__links"
                            to={`/topics/all/articles`}
                        >
                            <TopicCard
                                slug="All Articles"
                                description="View all the articles"
                            />
                        </Link>
                    </Grid>

                    {topics.map((topic) => {
                        return (
                            <Grid key={topic.slug} item xs={12} sm={6} md={6}>
                                <Link
                                    className="home__links"
                                    to={`/topics/${topic.slug}/articles`}
                                    key={topic.slug}
                                >
                                    <TopicCard
                                        slug={topic.slug}
                                        description={topic.description}
                                    />
                                </Link>
                            </Grid>
                        );
                    })}
                </Grid>
            </main>
        </section>
    );
}
