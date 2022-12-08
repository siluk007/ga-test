import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'
import { gtag, install } from 'ga-gtag';
const google_key = "G-5T1EE05PEF";
let is_initialize = false;


export default class gAnalytics {
    static gaInitialize (user_id = undefined) {
        if (!is_initialize) {
            // const options = {
            //     debug: true,
            // }
            //
            // if (user_id) {
            //     options.gaOptions ={
            //         userId: user_id.toString()
            //     }
            // }
            //
            // console.log(options)
            //
            // ReactGA.initialize(google_key, options);
            // ReactGA.pageview(window.location.pathname + window.location.hash + window.location.search);
            // const tagManagerArgs = {
            //     gtmId: google_key
            // }
            //
            // TagManager.initialize(tagManagerArgs)
            is_initialize = true;
            console.log(11111111111)

            install(google_key);
        }
    }
    static gaPageView () {
        if (is_initialize) {
            // const tagManagerArgs = {
            //     dataLayer: {
            //         userId: '001',
            //         userProject: 'project',
            //         page: 'home'
            //     },
            //     dataLayerName: 'PageDataLayer'
            // }
            // TagManager.dataLayer(tagManagerArgs)
            // ReactGA.pageview(window.location.pathname + window.location.hash + window.location.search);
        }
    }

    static gaEvent (category, action, value){
        if (is_initialize) {
            gtag('event', category, {
                'action': action
            });
            // const event_data = {
            //     category: category,
            //     action: action
            // }
            // if (value) {
            //     event_data.value = value;
            // }
            // ReactGA.event(event_data);
        }
    }
}
