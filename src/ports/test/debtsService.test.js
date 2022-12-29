const { getDebtsData } = require('../debtsService');
const response = require('../../../test/debtsResponse.json');
const body = require('../../../test/debtsRequestBody.json');

jest.mock('../debtsService');
const mockDebtsServices = require('../debtsService');
mockDebtsServices.getDebtsData.mockResolvedValue({ data: response });

describe('test debts service', () => {
  test('should return debts ', async () => {
    let { data } = await getDebtsData(body);
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
