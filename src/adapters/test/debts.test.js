const { debtsInstance } = require('../');
const body = require('../../../test/debtsBody.json');
const response = require('../../../test/debtsResponse.json');
jest.mock('../');
const mockDebtsInstance = require('../');
mockDebtsInstance.debtsInstance.mockResolvedValue({ data: response });

describe('debts instance adapter ', () => {
  it('get debt data properties object', async () => {
    let { data } = await debtsInstance({ body });
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
