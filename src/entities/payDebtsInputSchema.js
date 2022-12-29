const Schemy = require('schemy');

const payDebtsSchemaPayments = new Schemy({
  additional_info: {
    type: Object,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  external_reference: {
    type: String,
    required: true,
  },
  installments: {
    type: Number,
    required: true,
  },
  metadata: {
    type: Object,
    required: false,
  },
  payer: {
    type: Object,
    required: true,
  },
  payment_method_id: {
    type: String,
    required: true,
  },
  transaction_amount: {
    type: Number,
    required: true,
  },
});

const payDebtsSchemaPreferences = new Schemy({
  payer_email: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  back_urls: {
    type: Object,
    required: true,
  },
});

const subscriptionschema = new Schemy({
  reason: {
    type: String,
    required: true,
  },
  auto_recurring: {
    type: Object,
    required: true,
  },
  back_url: {
    type: String,
    required: true,
  },
  payer_email: {
    type: String,
    required: true,
  },
});

module.exports = {
  payDebtsSchemaPayments,
  payDebtsSchemaPreferences,
  subscriptionschema,
};
