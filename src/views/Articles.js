import { useParams } from "react-router-dom";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Header from "../components/Header";
import SortBy from "../components/SortBy";
import TopicSelect from "../components/TopicSelect";
import ArticleGrid from "../components/ArticleGrid";
import PostButton from "../components/Button";
import { Link } from "react-router-dom";

export default function Articles({ topics }) {
    const [sort, setSort] = useState();
    const [sortLabel, setSortLabel] = useState();
    const { slug } = useParams();
    let topic = "";
    if (slug === "all") {
        topic = undefined;
    } else {
        topic = slug;
    }

    return (
        <section className="articles container">
            <Grid container rowSpacing={4} columnSpacing={4}>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Header title={slug} />
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <TopicSelect topics={topics} />
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Link to={`/topics/${topic}/post`}>
                        <PostButton />
                    </Link>
                </Grid>

                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <SortBy
                        setSort={setSort}
                        setSortLabel={setSortLabel}
                        sortLabel={sortLabel}
                    />
                </Grid>
            </Grid>
            <ArticleGrid topic={topic} topics={topics} sort={sort} />
        </section>
    );
}
