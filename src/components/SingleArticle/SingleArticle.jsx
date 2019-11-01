import React, { Component } from 'react';
import * as api from '../../utils/api';
import './styles/SingleArticle.css'
import CommentCard from './CommentCard';
import Voter from '../Voter';
import AddComment from './AddComment';
import Error from '../Error';

class SingleArticle extends Component {
  state = {
    username: null,
    article: {},
    comments: [],
    isLoading: true,
    showAddComment: false,
    err: null
  }

  componentDidMount = () => {
    const { username } = this.props;
    this.setState({ username, err: null });
    this.fetchArticleAndComments();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      const { username } = this.props;
      this.setState({ username });
    }
  }

  fetchArticleAndComments = () => {
    Promise.all([ 
      api.getArticleById(this.props.article_id), 
      api.getCommentsForArticle(this.props.article_id)
    ])
    .then(([article, comments]) => {
      this.setState({ article, comments, isLoading: false });
    })
    .catch(err => {
      this.setState({
        err: {
          status: err.response.status,
          msg: err.response.data.msg
        }
      })
    })
  }

  handleAddCommentClick = () => {
    this.setState({ showAddComment: !this.state.showAddComment });
  }

  submitComment = (comment) => {
    api.addArticleComment(comment)
      .then(comment => {
        this.setState({
          comments: [ comment, ...this.state.comments ]
        })
      })
      .catch(err => {
        this.setState({
          err: {
            status: err.response.status,
            msg: err.response.data.msg
          }
        })
      })
  }

  deleteComment = (comment_id) => {
    api.deleteComment(comment_id)
      .then(comment => {
        api.getCommentsForArticle(this.props.article_id)
          .then(comments => {
            this.setState({ comments }) 
        });
      })
      .catch(err => {
        this.setState({
          err: {
            status: err.response.status,
            msg: err.response.data.msg
          }
        })
      })
  }


  render() {
    const { 
      article, 
      comments, 
      isLoading, 
      showAddComment, 
      username,
      err } = this.state;
    if (err) return <Error err={ err }/>
    if (isLoading) return <p>loading...</p>
    return (
      <div className="article-container">

        <div className = "article-header">
          <h2>{ article.title }</h2>
          <h3>by { article.author }</h3>
        </div>

        <hr/>

        <div className="article-body">
          <p>{ article.body }</p>
        </div>

        <div className="votes-container">
          <Voter 
            type="article" 
            id={article.article_id} 
            votes={article.votes}
          />
        </div>

        { username && <button className="add-comment-button" onClick={ this.handleAddCommentClick }>Add A Comment</button>}
        <div className="add-comment-container">
          { showAddComment 
            ? <AddComment 
                article_id={ article.article_id } 
                username={ username }
                submitComment={ this.submitComment }
                err={ err } /> 
            : null }
        </div>

        <div className="comments-container">
          { comments.map(comment => {
            return (
              <CommentCard 
                key={ comment.comment_id } 
                comment={ comment } 
                username={ username }
                deleteComment= { this.deleteComment }
                err={ err }
              />
            )
          })}
        </div>

      </div>
    );
  }
}

export default SingleArticle;

