const axios = require('axios');
const { apiCall } = require('./apiCall');

let cache = {};

const apiCallCache = (dependencies) => async (optionsParams) => {
  const { path, method } = optionsParams;
  const { baseUrl } = dependencies;
  const url = `${baseUrl}/${path}`;

  if (cache[url] && cache[url][method]) {
    return cache[url][method];
  } else {
    const api = apiCall(dependencies);
    const response = api(optionsParams);

    const cacheMethod = { [method]: response };
    const cacheItem = { [url]: cacheMethod };

    if (cache[url]) {
      cache[url] = { ...cache[url], ...cacheMethod };
    } else {
      cache = { ...cache, ...cacheItem };
    }
    return response;
  }
};

module.exports = { apiCallCache, cache };
