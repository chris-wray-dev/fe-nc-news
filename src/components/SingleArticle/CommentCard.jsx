import React from 'react';
import '../styles/CommentCard.css';
import Voter from '../Voter';

const CommentCard = ({ comment }) => {

  return (
    <div className="comment-container">
      <p>{ comment.author }</p>
      <p>{ comment.body }</p>
      <Voter 
        type="comment" 
        id={comment.comment_id} 
        votes={comment.votes}
      />
    </div>
  );
};

export default CommentCard;