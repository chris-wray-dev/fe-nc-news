import React, { Component } from 'react';
import * as api from '../../utils/api';

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

  render() {
    const { article, comments, isLoading } = this.state;
    if (isLoading) return <p>loading...</p>
    return (
      <div className="article-container">
        <h2>{ article.title }</h2>
        <h3>by { article.author }</h3>
        <hr/>
        <p>{ article.body }</p>
          <div className="comments-container">
            { comments.map(comment => {
              return (
                <p> comment from { comment.author } </p>
              )
            })}
          </div>
      </div>
    );
  }
}

export default SingleArticle;

