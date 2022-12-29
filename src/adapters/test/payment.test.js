const { payDebtsInstance } = require('../');
const body = require('../../../test/paymetRequestBody.json');
const response = require('../../../test/paymentResponse.json');
jest.mock('../');
const mockPayDebtsInstance = require('../');
mockPayDebtsInstance.payDebtsInstance.mockResolvedValue({ data: response });

describe('payment instance adapter ', () => {
  it('pay debt data properties object', async () => {
    let { data } = await payDebtsInstance({ body });
    expect(data.paymentData).toEqual(
      expect.objectContaining({
        operationId: expect.any(String),
        companyCode: expect.any(String),
        companyName: expect.any(String),
        externalPaymentId: expect.any(String),
        externalClientId: expect.any(String),
        status: expect.any(String),
        createdAt: expect.any(String),
        amount: expect.any(Number),
        paymentMethod: expect.any(String),
        agent: expect.any(String),
        clientUsername: expect.any(String),
        identifiers: expect.any(Array),
        tx: expect.any(String),
        mainTx: expect.any(String),
      }),
    );
  });
});
