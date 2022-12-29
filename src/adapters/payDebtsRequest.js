const { payDebts: payDebtsData } = require('../ports/httpHandler');
const { builResponse } = require('../utils');

const payDebts = async (body) => {
  const paymentData = await payDebtsData(body);
  return builResponse(200, { paymentData });
};

module.exports = { payDebts };
