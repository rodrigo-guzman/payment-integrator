const axios = require('axios');
const { buildError } = require('../../utils');

const apiCall = (dependencies) => async (optionsParams) => {
  const { baseUrl } = dependencies;
  const { path, method, params = null, data, headers } = optionsParams;

  const url = `${baseUrl}/${path}`;

  const options = {
    url,
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    data,
    params,
    timeout: 27000,
  };
  const { data: response } = await axios(options).catch((e) => {
    buildError(500, 'Unknow error', e);
  });
  return response;
};

module.exports = { apiCall };
