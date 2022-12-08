import { gtag, install } from './ga_gtag';
const google_key = "G-D2KQ2NJB5B";
let is_initialize = false;


export default class gAnalytics {
    static gaInitialize (user_id = undefined) {
        if (!is_initialize) {
            is_initialize = true;
            install(google_key);
        }
    }
    static gaPageView () {
        if (is_initialize) {
        }
    }

    static gaEvent (category, action, value){
        if (is_initialize) {
            gtag('event', category, {
                'action': action
            });
        }
    }
}
