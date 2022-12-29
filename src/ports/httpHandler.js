const categories = require('../domainLogic/categoriesLogic');
const { getDebts: debts } = require('../domainLogic/debtsLogic');
const { payDebts: payment } = require('../domainLogic/paymentLogic');

const getCategories = async () => categories.getCategoriesList();

const getCategoriesById = async (categoryId) =>
  categories.getCategoriesByIdList(categoryId);

const getCompanies = async (categoryId) =>
  categories.getCompaniesList(categoryId);

const getDebts = async (body) => debts(body);

const payDebts = async (body) => payment(body);

module.exports = {
  getCategories,
  getCategoriesById,
  getCompanies,
  getDebts,
  payDebts,
};
