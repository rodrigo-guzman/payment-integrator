const { amountInstance } = require('../');
const response = require('../../../test/cocosAmountResponse.json');
jest.mock('../');
const mockCocosAmountInstance = require('../');
mockCocosAmountInstance.amountInstance.mockResolvedValue({ data: response });

describe('amount instance adapter ', () => {
  it('get amount data properties object', async () => {
    let { data } = await amountInstance({ customerId: 10084 });

    expect(data).toEqual(
      expect.objectContaining({
        CI: expect.any(Object),
        '24hs': expect.any(Object),
        '48hs': expect.any(Object),
      }),
    );
  });

  it('get amount.CI data properties object', async () => {
    let {
      data: { CI },
    } = await amountInstance({ customerId: 10084 });

    expect(CI).toEqual(
      expect.objectContaining({
        ars: expect.any(Number),
        usd: expect.any(Number),
        ext: expect.any(Number),
      }),
    );
  });

  it('get amount.24hs data properties object', async () => {
    let {
      data: { '24hs': day },
    } = await amountInstance({ customerId: 10084 });

    expect(day).toEqual(
      expect.objectContaining({
        ars: expect.any(Number),
        usd: expect.any(Number),
        ext: expect.any(Number),
      }),
    );
  });

  it('get amount.48hs data properties object', async () => {
    let {
      data: { '48hs': day },
    } = await amountInstance({ customerId: 10084 });

    expect(day).toEqual(
      expect.objectContaining({
        ars: expect.any(Number),
        usd: expect.any(Number),
        ext: expect.any(Number),
      }),
    );
  });
});
