const { handlerRequests } = require('../getDebts');
const eventGenerator = require('../../../test/testUtils/eventGenerator');
const response = require('../../../test/debtsRequestResponse.json');

const mockHandlerRequests = jest.fn(() => {
  return { data: response };
});

describe('get  debts integration tests', () => {
  test('it should take a body and return an API Gateway response', async () => {
    const event = eventGenerator({
      body: {
        companyCode: 'AR-S-0003',
        modalityId: '0e00c24e-97bd-40bb-a862-fecbff20dd44',
        queryData: [
          {
            identifierName: 'barcode',
            identifierValue:
              '63500174888085301000073965000074135511150209015072',
          },
        ],
        customerId: 'external-client-mock',
        cvu: '123123123123123123',
      },
    });

    let { data } = await mockHandlerRequests(event);
    expect(data).toHaveProperty(['body']);
    expect(data).toHaveProperty(['statusCode']);
  });

  test('it should return error', async () => {
    const event2 = eventGenerator({});
    let resp = await handlerRequests(event2);
    const err = {
      code: 400,
      statusCode: 400,
      message:
        'BAD REQUEST Data passed to validate is incorrect. It must be an object.',
      body:
        '{"message":"BAD REQUEST Data passed to validate is incorrect. It must be an object.","errorDetail":"Unknow Error"}',
    };
    expect(resp).toMatchObject(err);
  });
});
