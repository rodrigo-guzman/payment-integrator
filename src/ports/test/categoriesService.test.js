const categoriesService = require('../categoriesService');
const data = require('../../dictionaries/categories.json');

describe('test categories services', () => {
  test('should return categories list', async () => {
    const res = await categoriesService.getCategoriesData();
    expect(res).toBe(data.data);
  });
});
