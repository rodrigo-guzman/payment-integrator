const {
  getCategoriesList,
  getCategoriesByIdList,
  getCompaniesList,
} = require('../categoriesLogic');
const categoriesResponses = require('../../../test/categoriesLogicResponses.json');

describe('categories Logic methods', () => {
  const categoryId = 'Category_ID_1';
  it('get all categories', async () => {
    const res = await getCategoriesList();
    expect(res).toStrictEqual(categoriesResponses.categoriesList);
  });
  it('get a category by id', async () => {
    const res = await getCategoriesByIdList(categoryId);
    expect(res).toStrictEqual(categoriesResponses.categoryById);
  });
  it('get companies by categoryId', async () => {
    const res = await getCompaniesList(categoryId);
    expect(res).toStrictEqual(categoriesResponses.companiesByCategory);
  });
});
