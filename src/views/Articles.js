import { useParams } from "react-router-dom";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Header from "../components/Header";
import SortBy from "../components/SortBy";
import TopicSelect from "../components/TopicSelect";
import ArticleGrid from "../components/ArticleGrid";
import PostButton from "../components/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Articles({ topics }) {
    const [sort, setSort] = useState();
    const [sortLabel, setSortLabel] = useState();
    const { slug } = useParams();
    const { isLoggedIn } = useContext(UserContext);
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
                <Grid item xs={6} style={{ textAlign: "center" }}>
                    <TopicSelect topics={topics} />
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                    <SortBy
                        setSort={setSort}
                        setSortLabel={setSortLabel}
                        sortLabel={sortLabel}
                    />
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    {
                    isLoggedIn&&topic!==undefined ? <Link to={`/topics/${topic}/post`} className="articles__post__link">
                        <PostButton  />
                    </Link> : null}
                </Grid>

                
            </Grid>
            <ArticleGrid topic={topic} topics={topics} sort={sort} />
        </section>
    );
}
