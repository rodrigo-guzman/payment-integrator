const categories = require('../domainLogic/categoriesLogic');
const { getDebts: debts } = require('../domainLogic/debtsLogic');
const {
  subscriptions: subscriptionsL,
} = require('../domainLogic/subscriptionLogic');

const getCategories = async () => categories.getCategoriesList();

const getCategoriesById = async (categoryId) =>
  categories.getCategoriesByIdList(categoryId);

const getCompanies = async (categoryId) =>
  categories.getCompaniesList(categoryId);

const getDebts = async (body) => debts(body);

const payDebts = async (body) => payment(body);

const subscriptions = async (body) => subscriptionsL(body);

module.exports = {
  getCategories,
  getCategoriesById,
  getCompanies,
  getDebts,
  payDebts,
  subscriptions,
};
