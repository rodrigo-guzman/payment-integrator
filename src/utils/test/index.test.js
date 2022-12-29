const {
  buildError,
  validateCategoriesLength,
  builResponse,
} = require('../index');

describe('utils functions', () => {
  test(' build response case', () => {
    const statusCode = 404;
    const body = { message: 'custom message' };
    const response = builResponse(statusCode, body);
    const result = { statusCode, body: JSON.stringify(body) };
    expect(response).toMatchObject(result);
  });

  test(' build custom error case', () => {
    expect(() => buildError(404, 'custom message')).toThrow('custom message');
  });

  test(' custom categories list validation should return 404 error when validation fail', async () => {
    expect(() => validateCategoriesLength([], 'id_1')).toThrow(
      'CATEGORY_ID id_1 NOT FOUND',
    );
  });

  test(' custom categories list validation should return true  when has data', async () => {
    const validation = validateCategoriesLength([1, 2, 3], 'id_1');
    expect(validation).toBe(true);
  });
});
