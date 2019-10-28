import React, { Component } from 'react';
import * as api from '../utils/api';
import './styles/TopicsSidebar.css'

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
      <div className="topics-container">
        <h3>Topics</h3>
        { topics.map(topic => {
          return (
            <p key={ topic.slug }>{ topic.slug }</p>
          )
        })}
      </div>
    );
  }
}

export default TopicsSidebar;