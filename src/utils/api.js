import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://jmg-nc-news.herokuapp.com/api",
});

export const getAllTopics = () => {
    return newsApi.get("/topics").then((res) => {
        return res.data.topics;
    });
};

export const getAllArticles = (topic) => {
    return newsApi
        .get("/articles", { params: { topic: topic } })
        .then((res) => {
            return res.data.articles;
        });
};
