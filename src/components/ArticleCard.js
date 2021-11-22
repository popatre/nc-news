export default function ArticleCard({ articles }) {
    return (
        <div className="article-card__info">
            {articles.map((article) => {
                return (
                    <div key={article.article_id}>
                        <p className="article-card__title">{article.title}</p>
                        <p className="article-card__author">
                            Author: {article.author}
                        </p>
                        <p className="article-card__topic">
                            Topic: {article.topic}
                        </p>
                        <p className="article-card__votes">
                            Votes: {article.votes}
                        </p>
                        <p className="article-card__comments">
                            Comments: {article.comment_count}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
