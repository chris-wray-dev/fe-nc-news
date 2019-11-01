import React from 'react';
import './styles/AddComment.css';

class AddComment extends React.Component {
  state = {
    article_id: 0,
    username: '',
    body: ''
  }

  componentDidMount() {
    const { article_id, username } = this.props;
    this.setState({
      article_id,
      username
    });
  }

  handleChange = (event) => {
    this.setState({
        [event.target.id]: event.target.value
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { submitComment } = this.props
    submitComment(this.state);
  }

  render() {
    return (
      <div className="add-comment-container">
        <form onSubmit={ this.handleSubmit } id="add-comment-form">
          <label htmlFor="body">Comment : </label>
          <textarea onChange={ this.handleChange } id="body" cols="70" rows="10" required/>
          <button type="submit">Submit</button>
        </form>
        
      </div>
    );
  }
  
};

export default AddComment;