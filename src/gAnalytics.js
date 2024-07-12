import { gtag, install, installAnalytics } from './ga_gtag';
const googleKey = 'G-D2KQ2NJB5B';
let isInitialize = false;

export const gaEvent = function () {
  if (isInitialize) {
    gtag(...arguments);
  }
};

export const gaInitialize = function () {
  if (!isInitialize) {
    isInitialize = true;
    install();
    installAnalytics(googleKey);
  }
};

export const gaPageView = function () {
};
