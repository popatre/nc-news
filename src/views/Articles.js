import { useParams } from "react-router-dom";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Header from "../components/Header";
import SortBy from "../components/SortBy";
import TopicSelect from "../components/TopicSelect";
import ArticleGrid from "../components/ArticleGrid";
import PostButton from "../components/Button";
import { Link, useSearchParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { totalCount } from "../utils/api";

export default function Articles({ topics }) {
    const [searchParams, setSearchParams] = useSearchParams({});
    const [sort, setSort] = useState();
    const [sortLabel, setSortLabel] = useState();
    const { isLoggedIn } = useContext(UserContext);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);

    const { slug } = useParams();

    let topic = "";
    if (slug === "all") {
        topic = undefined;
    } else {
        topic = slug;
    }

    const handleChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    useEffect(() => {
        setPage(1);
    }, [topic]);

    useEffect(() => {
        totalCount(topic).then((res) => {
            const totalPages = Math.floor(res / 10);
            setTotal(totalPages);
        });
    }, [topic]);

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
                        setSearchParams={setSearchParams}
                        searchParams={searchParams}
                    />
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    {isLoggedIn && topic !== undefined ? (
                        <Link
                            to={`/topics/${topic}/post`}
                            className="articles__post__link"
                        >
                            <PostButton />
                        </Link>
                    ) : null}
                </Grid>
            </Grid>
            <ArticleGrid
                topic={topic}
                topics={topics}
                sort={sort}
                page={page}
            />
            <Stack sx={{ alignItems: "center" }} spacing={2}>
                <Pagination
                    sx={{
                        margin: "4em",
                        background: "none",
                    }}
                    count={total + 1}
                    color="primary"
                    page={parseInt(page)}
                    onChange={(e) => handleChange(e.target.textContent)}
                />
            </Stack>
        </section>
    );
}
