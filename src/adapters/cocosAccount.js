const { buildError } = require('../utils');

const cocosAccount = ({ dependencies }) => async (params) => {
  const { apiCall, cocosAuthInstance } = dependencies;
  const { customerId } = params;
  const { access_token } = await cocosAuthInstance();

  if (customerId && access_token) {
    const paramsToApiCall = {
      method: 'GET',
      path: 'v1/tapi/cbu',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'x-account-id': customerId,
      },
    };

    return apiCall(paramsToApiCall);
  } else {
    return buildError(500, 'Missing params', 'Account Adapter');
  }
};

module.exports = { cocosAccount };
