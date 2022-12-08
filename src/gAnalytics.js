import { gtag, install } from './ga_gtag';
const google_key = "G-D2KQ2NJB5B";
let is_initialize = false;

export const gaEvent = function (){
    if (is_initialize) {
        gtag(...arguments);
    }
}

export const gaInitialize = function (user_id = undefined) {
    if (!is_initialize) {
        is_initialize = true;
        install(google_key);
    }
}

export const gaPageView = function () {
    if (is_initialize) {
    }
}