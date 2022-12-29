const {
  getCategories,
  getCategoriesById,
  getCompanies,
} = require('../adapters/getCategoriesRequest');
const {
  CATEGORIES_LIST,
  CATEGORY,
  COMPANIES_LIST,
} = require('../constants/default');

exports.handlerRequests = async (event) => {
  try {
    const path = event.resource;
    const categoryId = event.pathParameters
      ? event.pathParameters.category_id
      : null;
    switch (path) {
      case CATEGORIES_LIST:
        return getCategories();
      case CATEGORY:
        return getCategoriesById(categoryId);
      case COMPANIES_LIST:
        return getCompanies(categoryId);
    }
  } catch (error) {
    return error;
  }
};
