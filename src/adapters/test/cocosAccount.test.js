const { accountInstance } = require('../');
const response = require('../../../test/cocosAccountResponse.json');
const error = require('../../../test/cocosAccountErrorResponse.json');

const mockAccountInstance = jest.fn(() => {
  return { data: response };
});

const mockAccountInstanceError = jest.fn(() => error);

describe('account instance adapter ', () => {
  it('get account data properties object', async () => {
    const { data } = await mockAccountInstance({ customerId: 10084 });
    expect(data).toEqual(
      expect.objectContaining({
        account: expect.any(String),
        cbu_cvu: expect.any(String),
      }),
    );
  });

  it('should response error', async () => {
    const resp = await mockAccountInstanceError({ customerId: 10084 });
    expect(resp).toMatchObject(error);
  });
});
