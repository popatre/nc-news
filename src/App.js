import "./App.scss";
import { getAllTopics } from "./utils/api";
import NavbarComp from "./Nav";
import { useState, useEffect } from "react";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./views/Articles";
import Account from "./views/Account";
import ArticleView from "./views/ArticleView";
import ErrorPage from "./views/ErrorPage";
import UserArticles from "./views/UserArticles";
import PostArticle from "./views/PostArticle";
import UserComments from "./views/UserComments";
import TopicPost from "./views/TopicPost";
import Footer from "./views/Footer";

function App() {
    const [topics, setTopics] = useState([]);
    const [newTopic, setNewTopic] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getAllTopics()
            .then((topics) => {
                setTopics(topics);
                setIsLoading(false);
            })
            .catch((err) => {
                // const error = err.response.status;
            });
    }, [newTopic]);

    return (
        <BrowserRouter>
            <NavbarComp />
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                topics={topics}
                                setTopics={setTopics}
                                isLoading={isLoading}
                            />
                        }
                    />
                    <Route
                        path="/topics/:slug/articles"
                        element={<Articles topics={topics} />}
                    />

                    <Route
                        path="/topics/:slug/articles/:article_id"
                        element={<ArticleView />}
                    />
                    <Route path="/account" element={<Account />} />
                    <Route
                        path="/account/:username/articles"
                        element={<UserArticles />}
                    />
                    <Route
                        path="/account/:username/comments"
                        element={<UserComments />}
                    />
                    <Route
                        path="/topics/:slug/post"
                        element={<PostArticle />}
                    />
                    <Route
                        path="/topics/create"
                        element={
                            <TopicPost
                                setTopics={setTopics}
                                setNewTopic={setNewTopic}
                            />
                        }
                    />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
            {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default App;
