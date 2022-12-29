const {
  getCategories,
  getCategoriesById,
  getCompanies,
} = require('../getCategoriesRequest');

describe('categories request', () => {
  const categoryId = 'Category_ID_1';
  it('should response with staus code 200', async () => {
    const res = await getCategories();
    expect(res.statusCode).toBe(200);
  });
  it('should response with staus code 200', async () => {
    const res = await getCategoriesById(categoryId);
    expect(res.statusCode).toBe(200);
  });
  it('should response with staus code 200', async () => {
    const res = await getCompanies(categoryId);
    expect(res.statusCode).toBe(200);
  });
});
