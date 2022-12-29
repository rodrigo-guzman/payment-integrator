const Schemy = require('schemy');

const debtsSchema = new Schemy({
  companyCode: {
    type: String,
    required: true,
  },
  modalityId: {
    type: String,
    required: true,
  },
  queryData: [
    {
      identifierName: {
        type: String,
        required: true,
      },
      identifierValue: {
        type: String,
        required: true,
      },
    },
  ],
  customerId: {
    type: String,
    required: true,
  },
  cvu: {
    type: String,
    required: true,
  },
});
module.exports = { debtsSchema };
