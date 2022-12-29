const { payDebtsData } = require('../payDebtsService');
const response = require('../../../test/paymentResponse.json');
const body = require('../../../test/paymetRequestBody.json');

jest.mock('../payDebtsService');
const mockPayDebtsServices = require('../payDebtsService');
mockPayDebtsServices.payDebtsData.mockResolvedValue({ data: response });

describe('test payment debts service', () => {
  test('should validate object keys ', async () => {
    let { data } = await payDebtsData(body);
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
