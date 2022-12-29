const { cocosAuthInstance } = require('../');
const response = require('../../../test/cocosAuthResponse.json');
const body = require('../../../test/cocosAuthBody.json');
jest.mock('../');
const mockCocosAuthInstance = require('../');
mockCocosAuthInstance.cocosAuthInstance.mockResolvedValue({ data: response });

describe('auth instance adapter ', () => {
  it('get auth data properties object', async () => {
    let { data } = await cocosAuthInstance(body);

    expect(data).toEqual(
      expect.objectContaining({
        access_token: expect.any(String),
      }),
    );
  });
});
