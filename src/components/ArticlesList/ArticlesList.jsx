import React, { Component } from 'react';
import * as api from '../../utils/api';
import ArticleCard from './ArticleCard';
import SearchBar from './SearchBar';

class ArticlesList extends Component {
  state = {
    articles: [],
    sortParams: {
      'sort_by': 'article_id',
      'order': 'asc',
      'limit': 5,
      'p': 1
    },
    pagination: null,
    isLoading: true
  }

  componentDidMount = () => {
    const { sortParams } = this.state;
    this.fetchArticles(sortParams);
  }

  sortItems = (sortParams) => {
    this.fetchArticles(sortParams);
  }

  fetchArticles = (sortParams) => {
    api.getAllArticles(sortParams)
    .then(({articles, pagination}) => {
      this.setState({ articles, pagination, isLoading: false })
    })
  }

  render() {
    const { articles, isLoading, sortParams } = this.state;
    if (isLoading) return <p>loading...</p>
    return (
      <div className="articles-list-container">
        <h2>Articles</h2>
        <SearchBar sortItems={ this.sortItems } sortParams={ sortParams }/>
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