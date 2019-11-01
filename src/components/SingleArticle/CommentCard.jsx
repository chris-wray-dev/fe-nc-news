import React from 'react';
import './styles/CommentCard.css';
import Voter from '../Voter';

const CommentCard = ({ comment, username, deleteComment }) => {

  return (
    <div className="comment-container">
      <p>{ comment.author }</p>
      <p>{ comment.body }</p>
      <Voter 
        type="comment" 
        id={comment.comment_id} 
        votes={comment.votes}
      />
      { username === comment.author 
        ? <button onClick={ () => { deleteComment(comment.comment_id) }}>Delete Comment!!!</button>
        : null
      }
    </div>
  );
};

export default CommentCard;