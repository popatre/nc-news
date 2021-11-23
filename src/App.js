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

    useEffect(() => {
        getAllTopics().then((topics) => {
            setTopics(topics);
        });
    }, []);
    return (
        <BrowserRouter>
            <NavbarComp />
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={<Home topics={topics} setTopics={setTopics} />}
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
