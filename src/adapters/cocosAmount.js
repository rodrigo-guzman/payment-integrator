const cocosAmount = ({ dependencies }) => async (params) => {
  const { apiCall, cocosAuthInstance } = dependencies;
  const { customerId } = params;
  const { access_token } = await cocosAuthInstance();
  const paramsToApiCall = {
    method: 'GET',
    path: 'v2/orders/buying-power',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'x-account-id': customerId,
    },
  };

  return apiCall(paramsToApiCall);
};

module.exports = { cocosAmount };
