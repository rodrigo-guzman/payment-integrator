const { transferInstance } = require('../');
const response = require('../../../test/cocosTransferResponse.json');
const body = require('../../../test/cocosTransferBody.json');
jest.mock('../');
const mockCocosTransferInstance = require('../');
mockCocosTransferInstance.transferInstance.mockResolvedValue({
  data: response,
});

describe('transfer instance adapter ', () => {
  it('get transfer data properties object', async () => {
    let { data } = await transferInstance(body);

    expect(data).toEqual(
      expect.objectContaining({
        date: expect.any(String),
        currency: expect.any(String),
        amount: expect.any(String),
        cbu_cvu: expect.any(String),
      }),
    );
  });
});
