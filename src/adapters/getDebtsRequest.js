const { getDebts: getDebtsData } = require('../ports/httpHandler');
const { builResponse } = require('../utils');

const getDebts = async (body) => {
  const debtsData = await getDebtsData(body);
  return {
    statusCode: 200,
    body: JSON.stringify({ debtsData }),
  };
};

module.exports = { getDebts };
