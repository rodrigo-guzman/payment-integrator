const { getDebtsData } = require('../ports/debtsService');
const { v4: uuidv4 } = require('uuid');

const getDebts = async (params) => {
  const body = {
    ...params,
    externalRequestId: uuidv4(),
  };
  delete Object.assign(body, {
    externalClientId: `${body.cvu}-${body.customerId}`,
  })['customerId'];
  console.log(body);
  return getDebtsData(body);
};

module.exports = { getDebts };
