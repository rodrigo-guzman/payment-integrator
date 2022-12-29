const { getDebts } = require('../getDebtsRequest');
const debtsBody = require('../../../test/debtsRequestBody.json');
const response = require('../../../test/debtsRequestResponse.json');

jest.mock('../getDebtsRequest');
const mockGetDebtsRequest = require('../getDebtsRequest');
mockGetDebtsRequest.getDebts.mockResolvedValue({ data: response });

describe('debts request', () => {
  it('should response with staus code 200', async () => {
    let { data } = await getDebts(debtsBody);
    expect(data.statusCode).toBe(200);
  });
});
