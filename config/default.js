const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  name: 'default',
  env: 'dev',
  offline: {
    baseUrl: process.env.URL_OFFLINE || 'http://localhost:8081',
  },
  loginData: {
    clientId: process.env.CLIENT_ID,
    responseType: process.env.RESPONSE_TYPE,
    platformId: process.env.PLATFORM_ID,
    state: process.env.STATE,
    redirectUrl: process.env.REDIRECT_URL,
    baseUrlLogin: process.env.BASE_URL_LOGIN,
    authorization: process.env.AUTHORIZATION,
  },
  servicesData: {
    apiKey: process.env.SERVICES_API_KEY,
    baseUrlServices: process.env.BASE_URL_SERVICES,
    authorization: process.env.AUTHORIZATION,
  },
  cocosData: {
    baseUrlCocos: 'https://cocos.staging.scala.ly/api',
    clientId: 'ed9dfd6d-78ed-4c53-bb06-cbafa742b123',
    clientSecret: 'OAOccTr9MA3phf3xPyn5rLoYr7efKsil',
  },
};
