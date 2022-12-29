const categories = require('../categories');
const eventGenerator = require('../../../test/testUtils/eventGenerator');
const companiesResponse = require('../../../test/companiesResponse.json');

describe('get categories integration tests', () => {
  const categoryId = 'Category_ID_1';

  test('it should take a body and return an API Gateway response', async () => {
    const event = eventGenerator({
      path: '/categories',
    });

    const res = await categories.handlerRequests(event);

    expect(res).toBeDefined();
  });

  test('should return a 200 with category information', async () => {
    const event = eventGenerator({
      path: '/categories/{category_id}',
      pathParametersObject: {
        category_id: categoryId,
      },
    });
    const res = await categories.handlerRequests(event);

    expect(res.statusCode).toBe(200);
    const body = JSON.parse(res.body);
    expect(body).toEqual({
      category: [{ id: 'Category_ID_1', description: 'Luz' }],
    });
  });

  test('should return a 200 with companies information', async () => {
    const event = eventGenerator({
      path: '/categories/{category_id}/companies',
      pathParametersObject: {
        category_id: categoryId,
      },
    });
    const res = await categories.handlerRequests(event);

    expect(res.statusCode).toBe(200);
    const body = JSON.parse(res.body);
    expect(body).toEqual(companiesResponse);
  });
});
