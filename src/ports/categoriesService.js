const { getCategoriesData: getCategories } = require('../adapters/categories');

const getCategoriesData = async (params) => getCategories(params);

module.exports = { getCategoriesData };
