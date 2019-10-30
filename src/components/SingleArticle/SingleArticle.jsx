import React, { Component } from 'react';
import * as api from '../../utils/api';
import '../styles/SingleArticle.css'
import CommentCard from './CommentCard';
import Voter from '../Voter';

class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true
  }

  componentDidMount = () => {
    this.fetchArticleAndComments();
  }

  fetchArticleAndComments = () => {
    Promise.all([ 
      api.getArticleById(this.props.article_id), 
      api.getCommentsForArticle(this.props.article_id)
    ])
    .then(([article, comments]) => {
      this.setState({ article, comments, isLoading: false });
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
          <Voter 
            type="article" 
            id={article.article_id} 
            votes={article.votes}
          />
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

