const subscription = ({ dependencies }) => async (params) => {
  const { apiCall, loginInstance, configs } = dependencies;
  const body = params;
  //const { access_token } = await loginInstance();
  const paramsToApiCall = {
    data: body,
    method: 'POST',
    path: 'preapproval',
    headers: {
      Authorization: configs.authorization,
    },
  };

  return apiCall(paramsToApiCall);
};

module.exports = { subscription };
