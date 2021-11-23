import "./App.scss";
import { getAllTopics } from "./utils/api";
import NavbarComp from "./Nav";
import { useState, useEffect } from "react";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./views/Articles";
import ArticleView from "./views/ArticleView";

function App() {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getAllTopics()
            .then((topics) => {
                setTopics(topics);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
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
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
