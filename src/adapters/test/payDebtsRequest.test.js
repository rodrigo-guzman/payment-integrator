const { payDebts } = require('../payDebtsRequest');
const payDebtsBody = require('../../../test/paymetRequestBody.json');
const response = require('../../../test/paymentApiResponse.json');

jest.mock('../payDebtsRequest');
const mockPayDebtsRequest = require('../payDebtsRequest');
mockPayDebtsRequest.payDebts.mockResolvedValue({ data: response });

describe(' pay debts request', () => {
  it('should response with staus code 200', async () => {
    let { data } = await payDebts(payDebtsBody);
    expect(data.statusCode).toBe(200);
  });
});
