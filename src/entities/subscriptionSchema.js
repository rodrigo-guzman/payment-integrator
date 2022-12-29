const Schemy = require('schemy');

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

module.exports = { subscriptionschema };
