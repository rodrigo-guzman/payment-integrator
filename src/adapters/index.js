const { apiCall } = require('./utilities/apiCall');
const { apiCallCache } = require('./utilities/apiCallCache');
const { login } = require('./login');
const { debts } = require('./debts');
const { payment } = require('./payment');
const { cocosAuth } = require('./cocosAuth');
const { cocosAmount } = require('./cocosAmount');
const { cocosAccount } = require('./cocosAccount');
const { cocosTransfer } = require('./cocosTransfer');
const { subscription } = require('./subscription');

const { loginData, servicesData, cocosData } = require('config');

const loginInstance = login({
  dependencies: {
    apiCall: apiCallCache({
      baseUrl: loginData.baseUrlLogin,
    }),
    loginData: {
      clientId: loginData.clientId,
      responseType: loginData.responseType,
      platformId: loginData.platformId,
      state: loginData.state,
      redirectUrl: loginData.redirectUrl,
    },
  },
});

const cocosAuthInstance = cocosAuth({
  dependencies: {
    apiCall: apiCallCache({
      baseUrl: cocosData.baseUrlCocos,
    }),
    cocosData,
  },
});

const amountInstance = cocosAmount({
  dependencies: {
    apiCall: apiCall({
      baseUrl: cocosData.baseUrlCocos,
    }),
    cocosAuthInstance,
  },
});

const accountInstance = cocosAccount({
  dependencies: {
    apiCall: apiCall({
      baseUrl: cocosData.baseUrlCocos,
    }),
    cocosAuthInstance,
  },
});

const transferInstance = cocosTransfer({
  dependencies: {
    apiCall: apiCall({
      baseUrl: cocosData.baseUrlCocos,
    }),
    cocosAuthInstance,
  },
});

const debtsInstance = debts({
  dependencies: {
    apiCall: apiCall({
      baseUrl: servicesData.baseUrlServices,
    }),
    loginInstance,
    configs: {
      apiKey: servicesData.apiKey,
    },
  },
});

const payDebtsInstance = payment({
  dependencies: {
    apiCall: apiCall({
      baseUrl: servicesData.baseUrlServices,
    }),
    loginInstance,
    configs: {
      authorization: servicesData.authorization,
    },
  },
});

const subscriptionInstance = subscription({
  dependencies: {
    apiCall: apiCall({
      baseUrl: servicesData.baseUrlsubscriptionservices,
    }),
    loginInstance,
    configs: {
      authorization: servicesData.authorization,
    },
  },
});

module.exports = {
  loginInstance,
  debtsInstance,
  payDebtsInstance,
  cocosAuthInstance,
  amountInstance,
  accountInstance,
  transferInstance,
  subscriptionInstance,
};
