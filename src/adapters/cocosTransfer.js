const cocosTransfer = ({ dependencies }) => async (params) => {
  const { apiCall, cocosAuthInstance } = dependencies;
  const { access_token } = await cocosAuthInstance();
  const { request, customerId } = params;

  const paramsToApiCall = {
    data: request,
    method: 'POST',
    path: 'v1/transfers/withdraw',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'x-account-id': customerId,
    },
  };
  return apiCall(paramsToApiCall);
};
module.exports = { cocosTransfer };
