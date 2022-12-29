const login = ({ dependencies }) => async () => {
  const { apiCall, loginData } = dependencies;

  const paramsToApiCall = {
    data: { clientUsername: loginData.username, password: loginData.password },
    method: 'POST',
    path: 'token',
    headers: {
      Authorization:
        loginData.authorization ||
        'Bearer TEST-1775708494105470-122217-e20ac40b926b764e74a2c6db823dd069-51604438',
    },
  };
  return apiCall(paramsToApiCall);
};
module.exports = { login };
