const cocosAuth = ({ dependencies }) => async () => {
  const { apiCall, cocosData } = dependencies;

  const paramsToApiCall = {
    data: {
      client_id: cocosData.clientId,
      client_secret: cocosData.clientSecret,
    },
    method: 'POST',
    path: 'v1/oauth/token',
  };
  return apiCall(paramsToApiCall);
};
module.exports = { cocosAuth };
