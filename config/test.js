const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  name: 'default',
  env: 'dev',
  offline: {
    baseUrl: process.env.URL_OFFLINE || 'http://localhost:8081',
  },
  loginData: {
    username: process.env.AUTH_CLIENT,
    password: process.env.AUTH_PASSWORD,
    apiKey: process.env.AUTH_API_KEY,
    baseUrlLogin: 'https://login.dev.tapila.cloud',
  },
  servicesData: {
    apiKey: 'MWrNcipAqi5mUBzebmfog8PsNcnM4RGy73Pgk29v',
    baseUrlServices: 'https://services.dev.tapila.cloud',
  },
};
