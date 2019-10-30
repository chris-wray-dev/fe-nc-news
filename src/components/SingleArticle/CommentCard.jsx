import React from 'react';
import '../styles/CommentCard.css'

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-container">
      <p>{ comment.author }</p>
      <p>{ comment.body }</p>
      <p>{ comment.votes }</p>
    </div>
  );
};

export default CommentCard;