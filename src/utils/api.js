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
