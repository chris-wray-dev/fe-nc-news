import React from 'react';
import '../styles/ArticleCard.css';
import { Link } from '@reach/router';

const ArticleCard = ({ article }) => {
  return (
    <Link
      className="article-card"
      to={`/articles/${article.article_id}`}
      key={article.article_id}
    >
      <div className="article-topic">
        <p>{article.topic}</p>
      </div>

      <div className="article-details">
        <div className="article-title">
          <h4>{article.title}</h4>
        </div>
        <p>by author {article.author}</p>

        <div className="article-stats">
          <p>votes : {article.votes}</p>
          <p>comments : {article.comment_count}</p>
          <p>date : {article.created_at}</p>
        </div>

      </div>
    </Link>
  );
};

export default ArticleCard;