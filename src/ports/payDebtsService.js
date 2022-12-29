const {
  payDebtsInstance,
  amountInstance,
  accountInstance,
  transferInstance,
} = require('../adapters');
const payDebtsData = async (body) => payDebtsInstance(body);
const amountData = async ({ customerId }) => amountInstance({ customerId });
const accountData = async ({ customerId }) => accountInstance({ customerId });
const transferData = async ({ request, customerId }) =>
  transferInstance({ request, customerId });
module.exports = {
  payDebtsData,
  amountData,
  accountData,
  transferData,
};
