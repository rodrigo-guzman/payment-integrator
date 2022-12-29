const debts = ({ dependencies }) => async (params) => {
  const { apiCall, loginInstance, configs } = dependencies;
  const body = params;
  const { accessToken } = await loginInstance();
  const paramsToApiCall = {
    data: body,
    method: 'POST',
    path: 'debts',
    headers: {
      'x-api-key': configs.apiKey,
      'x-authorization-token': accessToken,
    },
  };

  return apiCall(paramsToApiCall);
};

module.exports = { debts };
