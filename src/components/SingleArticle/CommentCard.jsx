import React from 'react';
import '../styles/CommentCard.css'

const CommentCard = ({ comment, handleClick }) => {

  const handleVote = (event) => {
    handleClick(event, comment.comment_id);
  }

  return (
    <div className="comment-container">
      <p>{ comment.author }</p>
      <p>{ comment.body }</p>
      <i id="comment-thumb-up" onClick={ handleVote } className="far fa-2x fa-thumbs-up"></i>
      <p>{ comment.votes }</p>
      <i id="comment-thumb-down" onClick={ handleVote } className="far fa-2x fa-thumbs-down"></i>
    </div>
  );
};

export default CommentCard;