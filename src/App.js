import React from 'react';
import Header from './components/Header';
import { Router } from '@reach/router';
import './App.css';
import Navbar from './components/Navbar';
import ArticlesList from './components/ArticlesList/ArticlesList';
import SingleArticle from './components/SingleArticle/SingleArticle';
import TopicsSidebar from './components/TopicsSidebar';


function App() {
  return (
    <div className="App">

      <div className="app-header">
        <Header />
      </div>

      <div className="app-body">

        <div className="sidebar">
          <TopicsSidebar />
        </div>

        <div className="app-main">
          <Navbar />
          <Router>
            <ArticlesList path="/" />
            <ArticlesList path="/articles" />
            <SingleArticle path="/articles/:article_id" />
          </Router>
        </div>

      </div>
      
    </div>
  );
}

export default App;
