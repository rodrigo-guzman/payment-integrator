const { subscriptions: subscriptionsData } = require('../ports/httpHandler');
const { builResponse } = require('../utils');

const subscriptionRequest = async (body) => {
  const paymentData = await subscriptionsData(body);
  return builResponse(200, { paymentData });
};

module.exports = { subscriptionRequest };
