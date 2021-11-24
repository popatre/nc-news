import "./App.scss";
import { getAllTopics } from "./utils/api";
import NavbarComp from "./Nav";
import { useState, useEffect } from "react";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./views/Articles";
import Account from "./views/Account";
import ArticleView from "./views/ArticleView";
// import { UserContext } from "./contexts/UserContext";

function App() {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const { user } = useContext(UserContext);

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
                    <Route path="/account" element={<Account />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
