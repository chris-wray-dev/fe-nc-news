import React from 'react';
import './styles/CommentCard.css';
import Voter from '../Voter';

const CommentCard = ({ comment, username, deleteComment }) => {

  return (
    <div className="comment-container">
      <h4>author: { comment.author }</h4>
      <p className="comment-body">{ comment.body }</p>
      <p>{ (new Date(comment.created_at)).toLocaleString() }</p>
      <Voter 
        type="comment" 
        id={comment.comment_id} 
        votes={comment.votes}
      />
      { username === comment.author 
        ? <button className="delete-comment-button" 
            onClick={ () => { deleteComment(comment.comment_id) }}>Delete Comment</button>
        : null
      }
    </div>
  );
};

export default CommentCard;

/*
{
"comment_id": 116,
"author": "weegembump",
"article_id": 5,
"votes": 3,
"created_at": "2017-10-18T13:06:42.375Z",
"body": "Praesentium dolor doloribus sint. Quisquam molestiae dolorum asperiores animi omnis."
},
*/