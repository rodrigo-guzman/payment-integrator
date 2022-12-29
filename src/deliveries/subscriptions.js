const { subscriptionRequest } = require('../adapters/subscriptionRequest');
const { subscriptionschema } = require('../entities/subscriptionschema');
const { buildError } = require('../utils');

exports.handlerRequests = async (event) => {
  try {
    const body = JSON.parse(event.body);
    if (!subscriptionschema.validate(body)) {
      const error = subscriptionschema.getValidationErrors();
      buildError(400, `BAD REQUEST ${error}`);
    }
    return subscriptionRequest(body);
  } catch (error) {
    return error;
  }
};
