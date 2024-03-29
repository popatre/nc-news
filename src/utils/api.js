import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-ts.onrender.com/api",
});

export const getAllTopics = () => {
    return newsApi.get("/topics").then((res) => {
        return res.data.topics;
    });
};

export const getAllArticles = (topic, sort_by, p, source) => {
    return newsApi
        .get("/articles", {
            params: { topic: topic, sort_by: sort_by, p: p },
            // cancelToken: source.token,
        })
        .then((res) => {
            return res.data.articles;
        });
};
export const totalCount = (topic, sort_by, limit = 1000) => {
    return newsApi
        .get("/articles", {
            params: { topic: topic, sort_by: sort_by, limit: limit },
        })
        .then((res) => {
            return res.data.articles.length;
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
    console.log(username);
    return newsApi.get(`/users/${username}`).then((res) => {
        return res.data.user;
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

export const incrementCommentsVote = (id, incObj) => {
    return newsApi.patch(`/comments/${id}`, incObj).then((res) => {
        return res.data.comment;
    });
};

export const postArticle = (postObj) => {
    return newsApi.post(`/articles`, postObj).then((res) => {
        return res.data.article;
    });
};

export const deleteArticle = (articleId) => {
    return newsApi.delete(`/articles/${articleId}`);
};

export const getComments = (limit = 1000) => {
    return newsApi
        .get(`/comments`, {
            params: { limit: limit },
        })
        .then((res) => {
            return res.data.comments;
        });
};

export const postTopic = (postObj) => {
    return newsApi.post(`/topics`, postObj).then((res) => {
        return res.data.topic;
    });
};
