import React, { Component } from 'react';
import * as api from '../utils/api';
import './styles/Voter.css';

class Voter extends Component {
  state = {
    type: this.props.type,
    id: this.props.id,
    votes: this.props.votes,
    vote: 0,
    err: null
  }

  handleVote = (event) => {
    let { type, id, vote, votes } = this.state;
  
    if (event.target.id === "up-vote") {
      vote = 1
    }

    if (event.target.id === "down-vote") {
      vote = -1;
    }

    this.setState({ vote: this.state.vote + vote, votes: votes + vote });

    const errorState = (err) => {
      this.setState({
        err: {
          status: 500,
          msg: "oops - vote not counted"
        },
        vote: 0,
        votes: votes
      })
    }

    const addVotes = (apiFunc, id, vote) => {
      apiFunc(id, vote).catch(err => {
        errorState(err);
      });
    }

    if (type === "comment") addVotes(api.patchCommentVote, id, vote);
    if (type === "article") addVotes(api.patchArticleVote, id, vote);
 
  }

  render() {
    const { votes, err, vote } = this.state;
    return (
      <div className="voter-container">
        { vote < 1 
          && <i id="up-vote" onClick={ this.handleVote } className="far fa-2x fa-thumbs-up"></i>
        }
        <p>{ votes }</p>

        { vote > -1 
          && <i id="down-vote" onClick={ this.handleVote } className="far fa-2x fa-thumbs-down"></i>
        }
        { err ? <p>{ err.msg }</p> : null }
      </div>
    );
  }
}

export default Voter;