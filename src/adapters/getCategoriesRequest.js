const httpHandler = require('../ports/httpHandler');

const getCategories = async () => {
  const categoriesData = await httpHandler.getCategories();
  return {
    statusCode: 200,
    body: JSON.stringify({ categories: categoriesData }),
  };
};

const getCategoriesById = async (categoryId) => {
  const categoryData = await httpHandler.getCategoriesById(categoryId);
  return {
    statusCode: 200,
    body: JSON.stringify({ category: categoryData }),
  };
};

const getCompanies = async (categoryId) => {
  const companiesData = await httpHandler.getCompanies(categoryId);
  return {
    statusCode: 200,
    body: JSON.stringify({ companies: companiesData }),
  };
};

module.exports = { getCategories, getCategoriesById, getCompanies };
