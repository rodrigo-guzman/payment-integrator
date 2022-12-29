const { getCategoriesData } = require('../categories');
const categoriesData = require('../../dictionaries/categories.json');

describe('categories adapter ', () => {
  it('get all categories', async () => {
    const res = await getCategoriesData();
    expect(res).toStrictEqual(categoriesData.data);
  });
});
