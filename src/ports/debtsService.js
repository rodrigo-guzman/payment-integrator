const { debtsInstance } = require('../adapters');
const getDebtsData = async (body) => debtsInstance(body);

module.exports = { getDebtsData };
