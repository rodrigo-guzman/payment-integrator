const { loginInstance } = require('../');
jest.mock('../');
const mockLoginInstance = require('../');
const response = require('../../../test/loginResponseExample.json');

mockLoginInstance.loginInstance.mockResolvedValue({ data: response });

describe('login instance adapter ', () => {
  it('get auth tokens', async () => {
    let { data } = await loginInstance();
    expect(data).toHaveProperty(['accessToken']);
  });
});
