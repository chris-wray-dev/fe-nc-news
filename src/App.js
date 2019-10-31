import React from 'react';
import Header from './components/Header';
import { Router } from '@reach/router';
import './App.css';
import ArticlesList from './components/ArticlesList/ArticlesList';
import SingleArticle from './components/SingleArticle/SingleArticle';
import TopicsSidebar from './components/TopicsSidebar';




class App extends React.Component {

  state = {
    username: null
  }

  userLogin = (username) => {
    this.setState({ username });
  }

  render() {
    const { username } = this.state;
    return (
      

      <div className="App">
  
        <div className="app-header">
          <Header userLogin={ this.userLogin } username={ username }/>
        </div>
  
        <div className="app-body">
  
          <div className="sidebar">
            <TopicsSidebar />
          </div>
  
          <div className="app-main">
            
            <Router>
              <ArticlesList path="/" username={ username }/>
              <ArticlesList path="/articles" username={ username }/>
              <ArticlesList path="/topic/:topic" username={ username }/>
              <SingleArticle path="/articles/:article_id" username={ username }/>
            </Router>
          </div>
  
        </div>
        
      </div>
    );

  }

}

export default App;
