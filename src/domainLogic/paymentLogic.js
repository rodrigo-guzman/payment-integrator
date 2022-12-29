const {
  payDebtsData,
  amountData,
  accountData,
  transferData,
} = require('../ports/payDebtsService');
const { v4: uuidv4 } = require('uuid');
const { buildError } = require('../utils');

const payDebts = async (params) => {
  try {
    return payDebtsData(params);
  } catch (error) {
    return buildError(400, error.message, error);
  }
};

module.exports = { payDebts };
