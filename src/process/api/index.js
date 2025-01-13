import axios from 'axios';

const api = axios.create({
  baseURL: 'https://duckduckgo.com',
  headers: {
    Accept: 'application/json',
  },
});

export const getSuggestions = (query) => {
  return api.get('/ac/', {
    params: {
      q: query,
      type: 'list',
    },
  });
};