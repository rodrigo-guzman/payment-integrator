const { subscriptionData } = require('../ports/subscriptionservice');
const { buildError } = require('../utils');

const subscriptions = async (params) => {
  try {
    return subscriptionData(params);
  } catch (error) {
    return buildError(400, error.message, error);
  }
};

module.exports = { subscriptions };
