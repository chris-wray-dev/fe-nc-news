import React, { Component } from 'react';
import * as api from '../../utils/api';
import ArticleCard from './ArticleCard';
import SearchBar from './SortBar';
import '../styles/ArticlesList.css'

let defaultState = 
 {
  username: null,
  articles: [],
  requestParams: {
    sort_by: 'article_id',
    order: 'asc',
    limit: 10,
    p: 1,
    topic: null
  },
  pagination: null,
  isLoading: true
};

// if (localStorage.ncState) {
//   defaultState = JSON.parse(localStorage.ncState)
// }

class ArticlesList extends Component {
  state = defaultState;

  componentDidMount = () => {
    const { requestParams } = this.state;
    const { username } = this.props;
    this.setState({ username });
    this.fetchArticles(requestParams);
  }

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      const { requestParams } = this.state;
      this.fetchArticles(requestParams);
    }
    
  }

  sortItems = (requestParams) => {
    this.setState({ requestParams });
    this.fetchArticles(requestParams);
  }

  fetchArticles = (requestParams) => {
    api.getAllArticles({ ...requestParams, topic: this.props.topic,  })
      .then(({articles, pagination}) => {
        this.setState({ 
          articles, 
          pagination, 
          isLoading: false,
          requestParams: { ...requestParams, topic: this.props.topic }
        });
        localStorage.ncState = JSON.stringify(this.state);
      });
  }

  render() {
    const { articles, isLoading, requestParams, pagination, username } = this.state;
    if (isLoading) return <p>loading...</p>
    return (
      <div className="articles-list-container">
        <h2>Articles</h2>
        <p>{ `articles ${pagination.from} to ${pagination.to} of ${pagination.total}...`}</p>
        <SearchBar 
          sortItems={ this.sortItems } 
          requestParams={ requestParams }
          pagination={ pagination }
        />
        { articles.map(article => {
          return (
            <ArticleCard key={ article.article_id } article={ article } username={ username }/>
          )
        })}
      </div>
    );
  }
}

export default ArticlesList;