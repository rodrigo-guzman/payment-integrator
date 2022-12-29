const { handlerRequests } = require('../payDebts');
const eventGenerator = require('../../../test/testUtils/eventGenerator');
const response = require('../../../test/paymentApiResponse.json');

const mockHandlerRequests = jest.fn(() => {
  return { data: response };
});

describe('pay  debts integration tests', () => {
  test('it should take a body and return an API Gateway response', async () => {
    const event = eventGenerator({
      body: {
        debtId: '75a3e263-30c6-4c18-9b0f-41cd04d222e4-0',
        amount: '741.35',
        customerId: 'identificador de cuenta comitente',
      },
    });
    let { data } = await mockHandlerRequests(event);
    expect(data).toHaveProperty(['statusCode']);
    expect(data).toHaveProperty(['body']);
  });

  test('it should return error', async () => {
    const event2 = eventGenerator({});
    let resp = await handlerRequests(event2);
    const errr = {
      code: 400,
      statusCode: 400,
      message:
        'BAD REQUEST Data passed to validate is incorrect. It must be an object.',
      body:
        '{"message":"BAD REQUEST Data passed to validate is incorrect. It must be an object.","errorDetail":"Unknow Error"}',
    };
    expect(resp).toMatchObject(errr);
  });
});
