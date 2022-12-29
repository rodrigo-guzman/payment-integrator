const { payDebts } = require('../adapters/payDebtsRequest');
const {
  payDebtsSchemaPreferences,
} = require('../entities/payDebtsInputSchema');
const { buildError } = require('../utils');

exports.handlerRequests = async (event) => {
  try {
    const body = JSON.parse(event.body);
    if (!payDebtsSchemaPreferences.validate(body)) {
      const error = payDebtsSchemaPreferences.getValidationErrors();
      buildError(400, `BAD REQUEST ${error}`);
    }
    return payDebts(body);
  } catch (error) {
    return error;
  }
};
