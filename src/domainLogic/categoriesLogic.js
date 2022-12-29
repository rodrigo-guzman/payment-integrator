const { getCategoriesData } = require('../ports/categoriesService');
const { validateCategoriesLength } = require('../utils');

const getCategoriesList = async () => {
  const categoriesList = await getCategoriesData();
  const result = categoriesList.map((categories) => ({
    id: categories.category_id,
    description: categories.description,
  }));
  return result;
};

const getCategoriesByIdList = async (categoryId) => {
  const categoryData = await getCategoriesData();
  const result = categoryData
    .filter((category) => category.category_id === categoryId)
    .map((category) => ({
      id: category.category_id,
      description: category.description,
    }));
  validateCategoriesLength(result, categoryId);
  return result;
};

const getCompaniesList = async (categoryId) => {
  const categoriesList = await getCategoriesData();
  const result = categoriesList.find(
    (companies) => companies.category_id === categoryId,
  ).companies;
  validateCategoriesLength(result, categoryId);
  return result;
};

module.exports = {
  getCategoriesList,
  getCategoriesByIdList,
  getCompaniesList,
};
