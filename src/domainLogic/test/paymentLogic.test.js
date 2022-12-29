const { payDebts } = require('../paymentLogic');
const response = require('../../../test/paymentResponse.json');
const body = require('../../../test/paymetRequestBody.json');
jest.mock('../paymentLogic');
const mockPaymentDebtsLogic = require('../paymentLogic');
mockPaymentDebtsLogic.payDebts.mockResolvedValue({ data: response });

describe('payment Logic methods', () => {
  it('should match an object keys', async () => {
    let { data } = await payDebts(body);
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
