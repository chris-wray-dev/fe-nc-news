import React, { Component } from 'react';
import * as api from '../../utils/api';
import '../styles/SingleArticle.css'
import CommentCard from './CommentCard';

class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true
  }

  componentDidMount = () => {
    Promise.all([ 
        api.getArticleById(this.props.article_id), 
        api.getCommentsForArticle(this.props.article_id)
      ])
      .then(([article, comments]) => {
        this.setState({ article, comments, isLoading: false });
      })
  }

  componentDidUpdate = (prevState) => {
    if (this.state !== prevState) {
      this.componentDidMount();
    }
  }

  handleClick = (event, comment_id) => {
    const { article } = this.state;
    if (event.target.id === 'article-thumb-up') this.updateArticleVote(article.article_id, 1);
    if (event.target.id === 'article-thumb-down') this.updateArticleVote(article.article_id, -1);
    if (event.target.id === 'comment-thumb-up') this.updateCommentVote(comment_id, 1);
    if (event.target.id === 'comment-thumb-down') this.updateCommentVote(comment_id, -1);
  }

  updateArticleVote = (article_id, vote) => {
    api.patchArticleVote(article_id, vote)
      .then((article) => {
        this.setState(article);
      })
  }

  updateCommentVote = (comment_id, vote) => {
    api.patchCommentVote(comment_id, vote)
      .then((article) => {
        this.setState(article);
      })
  }

  render() {
    const { article, comments, isLoading } = this.state;
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
          <i id="article-thumb-up" onClick={ this.handleClick } className="far fa-2x fa-thumbs-up"></i>
          <p>{ article.votes }</p>
          <i id="article-thumb-down" onClick={ this.handleClick } className="far fa-2x fa-thumbs-down"></i>
        </div>

        <div className="comments-container">
          { comments.map(comment => {
            return (
              <CommentCard key={ comment.comment_id } comment={ comment } handleClick={ this.handleClick }/>
            )
          })}
        </div>

      </div>
    );
  }
}

export default SingleArticle;

