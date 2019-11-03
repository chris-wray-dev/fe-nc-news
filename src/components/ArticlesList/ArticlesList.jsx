import React, { Component } from 'react';
import * as api from '../../utils/api';
import ArticleCard from './ArticleCard';
import SearchBar from './SortBar';
import Error from '../Error';
import './styles/ArticlesList.css';

let defaultState = 
 {
  username: null,
  articles: [],
  requestParams: {
    sort_by: 'created_at',
    order: 'asc',
    limit: 10,
    p: 1,
    topic: null
  },
  pagination: null,
  isLoading: true,
  err: null
};

class ArticlesList extends Component {
  state = defaultState;

  componentDidMount = () => {
    if (localStorage.pagination) defaultState.pagination = JSON.parse(localStorage.pagination);
    if (localStorage.requestParams) defaultState.requestParams = JSON.parse(localStorage.requestParams);
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
        localStorage.pagination = JSON.stringify(this.state.pagination);
        localStorage.requestParams = JSON.stringify(this.state.requestParams);
      })
      .catch(err => {
        console.dir(err);
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
      articles, 
      isLoading, 
      requestParams, 
      pagination, 
      username,
      err } = this.state; 
      
    if ( err ) return <Error err={err}/>
    if (isLoading) return <p>loading...</p>
    return (
      <div className="articles-list-container">
        <h2>Articles</h2>
        <p>{ `articles ${pagination.from} 
          to ${pagination.to > pagination.total 
              ? pagination.total : pagination.to } 
          of ${pagination.total}...`}</p>
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