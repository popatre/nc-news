import "./App.scss";
import Nav from "./Nav";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./views/Articles";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/topics/:slug/articles"
                        element={<Articles />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
