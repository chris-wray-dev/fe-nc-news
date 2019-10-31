import React, { Component } from 'react';
import * as api from '../utils/api';
import './styles/TopicsSidebar.css';
import { Link } from '@reach/router';

class TopicsSidebar extends Component {
  state = {
    topics: [],
    isLoading: true
  }

  componentDidMount = () => {
    api.getAllTopics()
      .then(topics => {
        this.setState({ topics, isLoading: false })
      });
  }

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <p>...Loading</p>
    return (
      <>
      <h3>Topics</h3>
      <div className="topics-container">
        
        <Link to="/articles">all articles</Link>
        { topics.map(topic => {
          return (
            <Link to={`/topic/${topic.slug}`} key={topic.slug}>{topic.slug}</Link>
          )
        })}
      </div>
      </>
    );
  }
}

export default TopicsSidebar;