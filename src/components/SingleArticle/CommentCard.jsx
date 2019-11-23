import React from 'react';
import './styles/CommentCard.css';
import Voter from '../Voter';

const CommentCard = ({ comment, username, deleteComment }) => {

  return (
    <div className="comment-container">
      <h4>author: { comment.author }</h4>
      <p className="comment-body">{ comment.body }</p>
      <p>{ (new Date(comment.created_at)).toLocaleString() }</p>
      { username && <Voter 
        type="comment" 
        id={comment.comment_id} 
        votes={comment.votes}
      /> }
      { username === comment.author 
        ? <button className="delete-comment-button" 
            onClick={ () => { deleteComment(comment.comment_id) }}>Delete Comment</button>
        : null
      }
    </div>
  );
};

export default CommentCard;
