const { getDebts } = require('../adapters/getDebtsRequest');
const { debtsSchema } = require('../entities/debtsInputSchema');
const { buildError } = require('../utils');

exports.handlerRequests = async (event) => {
  try {
    const body = JSON.parse(event.body);

    if (!debtsSchema.validate(body)) {
      const error = debtsSchema.getValidationErrors();
      buildError(400, `BAD REQUEST ${error}`);
    }
    return getDebts(body);
  } catch (error) {
    return error;
  }
};
