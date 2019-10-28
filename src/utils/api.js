import axios from 'axios';
const request = axios.create({ baseURL: 'https://chris-nc-news-api.herokuapp.com/api'})

export const getAllArticles = ( sort_by, order, author, topic, limit, p ) => {
  return request.get('/articles', {
    params: {
      'sort_by': sort_by,
      'order': order,
      'author': author,
      'topic': topic,
      'limit': limit,
      'p': p
    }
  })
    .then(({ data }) => {
      return data.articles;
    })
    .catch(err => console.log(err));
}

export const getArticleById = (article_id) => {
  return request.get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch(err => console.log(err));
}

export const getAllTopics = () => {
  return request.get('/topics')
    .then(({ data }) => {
      return data.topics;
    })
    .catch(err => console.log(err));
}

export const getCommentsForArticle = (article_id) => {
  return request.get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    })
    .catch(err => console.log(err));
}
