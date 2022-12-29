const axios = require('axios');
const { apiCallCache, cache } = require('../apiCallCache');

jest.mock('axios', () => jest.fn(() => Promise.resolve({ data: 'response' })));

describe('apiCallCache test', () => {
  it('should call axios and return a response', async () => {
    const baseUrl = 'https://google.com';
    const params = {
      method: 'GET',
      path: 'v1/tapi/cbu',
      headers: {
        Authorization: 'Bearer token',
        'x-account-id': 'account',
      },
    };
    const response = await apiCallCache({ baseUrl })(params);
    expect(axios).toHaveBeenCalled();
    expect(response).toEqual('response');
  });

  it('should return cached response', async () => {
    const baseUrl = 'https://google.com';
    const params = {
      method: 'GET',
      path: 'v1/tapi/cbu',
      headers: {
        Authorization: 'Bearer token',
        'x-account-id': 'account',
      },
    };
    const response = await apiCallCache({ baseUrl })(params);
    expect(axios).not.toHaveBeenCalled();
    expect(response).toEqual('response');
  });
});
