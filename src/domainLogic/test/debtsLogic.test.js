const { getDebts } = require('../debtsLogic');
const response = require('../../../test/debtsResponse.json');
const body = require('../../../test/debtsBody.json');
jest.mock('../debtsLogic');
const mockDebtsLogic = require('../debtsLogic');
mockDebtsLogic.getDebts.mockResolvedValue({ data: response });

describe('categories Logic methods', () => {
  it('get all categories', async () => {
    let { data } = await getDebts(body);
    expect(data).toEqual(
      expect.objectContaining({
        operationId: expect.any(String),
        companyCode: expect.any(String),
        companyName: expect.any(String),
        customerId: expect.any(String),
        customerName: expect.any(String),
        customerAddress: expect.any(String),
        debts: expect.any(Object),
        tx: expect.any(String),
        mainTx: expect.any(String),
      }),
    );
  });
});
