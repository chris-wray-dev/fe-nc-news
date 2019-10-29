import React from 'react';
import '../styles/ArticleCard.css'

const ArticleCard = ({ article }) => {
  return (
    <a href={`/articles/${article.article_id}`} className="article-card">
      <p>{ article.title }</p>
      <p>{ article.topic }</p>
      <p>{ article.author }</p>
      <p>{ article.votes }</p>
      <p>{ article.comment_count }</p>
    </a>
  );
};

export default ArticleCard;