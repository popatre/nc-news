import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://jmg-nc-news.herokuapp.com/api",
});

export const getAllTopics = () => {
    return newsApi.get("/topics").then((res) => {
        return res.data.topics;
    });
};

export const getAllArticles = (topic, sort_by) => {
    return newsApi
        .get("/articles", { params: { topic: topic, sort_by: sort_by } })
        .then((res) => {
            return res.data.articles;
        });
};

export const getArticleById = (id) => {
    return newsApi.get(`/articles/${id}`).then((res) => {
        return res.data.article;
    });
};

export const getCommentsByArticleId = (id) => {
    return newsApi.get(`/articles/${id}/comments`).then((res) => {
        return res.data.comments;
    });
};

export const incrementVote = (id, incObj) => {
    return newsApi.patch(`/articles/${id}`, incObj).then((res) => {
        return res.data.article;
    });
};

export const getUserDetails = (username) => {
    return newsApi.get(`/users/${username}`).then((res) => {
        return res.data.users;
    });
};

export const postComment = (article_id, postObj) => {
    return newsApi
        .post(`/articles/${article_id}/comments`, postObj)
        .then((res) => {
            return res.data.comment;
        });
};

export const deleteComment = (commentId) => {
    return newsApi.delete(`/comments/${commentId}`);
};

export const getAllUsers = () => {
    return newsApi.get(`/users/`).then((res) => {
        return res.data.users;
    });
};
