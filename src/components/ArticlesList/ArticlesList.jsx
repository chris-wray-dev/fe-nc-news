import React, { Component } from 'react';
import * as api from '../../utils/api';
import ArticleCard from './ArticleCard';
import SearchBar from './SearchBar';

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true
  }

  componentDidMount = () => {
    api.getAllArticles()
      .then(articles => {
        this.setState({ articles, isLoading: false })
      });
  }

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>loading...</p>
    return (
      <div className="articles-list-container">
        <h2>Articles</h2>
        <SearchBar />
        { articles.map(article => {
          return (
            <ArticleCard key={article.article_id} article={article} />
          )
        })}
      </div>
    );
  }
}

export default ArticlesList;