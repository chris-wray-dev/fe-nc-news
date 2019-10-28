import React from 'react';
import '../styles/ArticleCard.css'

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <p>{ article.title }</p>
      <p>{ article.topic }</p>
      <p>{ article.author }</p>
      <p>{ article.votes }</p>
      <p>{ article.comment_count }</p>
      
    </div>
  );
};

export default ArticleCard;