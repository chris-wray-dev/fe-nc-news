import axios from 'axios';
const request = axios.create({ baseURL: 'https://chris-nc-news-api.herokuapp.com/api'})

export const getAllArticles = ( requestParams ) => {
  return request.get('/articles', { params: requestParams })
    .then(({ data }) => {
      return data;
    })
}

export const getArticleById = (article_id) => {
  return request.get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    })
}

export const getAllTopics = () => {
  return request.get('/topics')
    .then(({ data }) => {
      return data.topics;
    })
}

export const getCommentsForArticle = (article_id) => {
  return request.get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    })
}

export const patchArticleVote = (article_id, vote) => {
  return request.patch(`/articles/${article_id}`, { inc_votes: vote })
    .then(({ data }) => {
      return data.article
    })
}

export const patchCommentVote = (comment_id, vote) => {
  return request.patch(`/comments/${comment_id}`, { inc_votes: vote })
    .then(({ data }) => {
      return data.comment
    })
}

export const addArticleComment = ({ article_id, username, body }) => {
  return request.post(`articles/${article_id}/comments`, {
      username,
      body
    })
    .then(({data}) => {
      return data.comment
    })
}

export const deleteComment = (comment_id) => {
  return request.delete(`comments/${comment_id}`)
    .then(comment => {
      return comment;
    })
}

export const getUserByUsername = (username) => {
  return request.get(`users/${username}`)
    .then(user => {
      return user;
    })
}

/*
exports.deleteCommentById = ({ comment_id }) => {
  return connection('comments')
    .where('comment_id', comment_id)
    .del()
    .then(commentsDeleted => {
      if (!commentsDeleted) {
        return Promise.reject({
          status: 404,
          msg: `comment ${comment_id} not found!!!`
        });
      }
      return commentsDeleted;
    })
}
*/
