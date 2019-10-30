import React, { Component } from 'react';
import * as api from '../utils/api';

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
    
    if (vote === 0) {
      if (event.target.id === "up-vote") vote = 1;
      if (event.target.id === "down-vote") vote = -1;

      this.setState({ vote: vote, votes: votes + vote });

      if (type === "comment") {
        api.patchCommentVote(id, vote)
          .catch(err => {
            this.setState({
              err: {
                status: 500,
                msg: "oops - vote not counted"
              },
              vote: 0,
              votes: votes
            })
          });
      }

      if (type === "article") {
        api.patchArticleVote(id, vote)
        .catch(err => {
          this.setState({
            err: {
              status: 500,
              msg: "oops - vote not counted"
            },
            vote: 0,
            votes: votes
          })
        });
      }
    }

    

  }

  render() {
    const { votes, err } = this.state;
    return (
      <>
      <div>
        <i id="up-vote" onClick={ this.handleVote } className="far fa-2x fa-thumbs-up"></i>
        <p>{ votes }</p>
        <i id="down-vote" onClick={ this.handleVote } className="far fa-2x fa-thumbs-down"></i>
      </div>
      { err ? <p>{err.msg}</p> : null }
      </>
    );
  }
}

export default Voter;