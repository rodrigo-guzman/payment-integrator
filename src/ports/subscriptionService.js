const { subscriptionInstance } = require('../adapters');

const subscriptionData = async (body) => subscriptionInstance(body);

module.exports = { subscriptionData };
