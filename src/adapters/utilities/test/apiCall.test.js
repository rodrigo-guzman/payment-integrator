const axios = require('axios');
const { apiCall } = require('../apiCall');

jest.mock('axios', () => jest.fn(() => Promise.resolve({ data: 'response' })));

describe('apiCall test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

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
    const response = await apiCall({ baseUrl })(params);
    expect(axios).toHaveBeenCalled();
    expect(response).toEqual('response');
  });
});
