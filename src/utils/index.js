const buildError = (code, message, error = 'Unknow Error') => {
  console.log(error);
  const response = {};
  response.code = code;
  response.statusCode = code;
  response.message = message;
  response.body = JSON.stringify({
    message,
    error: error.body || error.message,
    errorDetail: error,
  });
  throw response;
};

const builResponse = (status, body) => {
  const response = {};
  response.statusCode = status;
  response.body = JSON.stringify(body);
  return response;
};

const validateCategoriesLength = (data = [], categoryId = '') => {
  return data.length
    ? true
    : buildError(404, `CATEGORY_ID ${categoryId} NOT FOUND`);
};
module.exports = { buildError, validateCategoriesLength, builResponse };
