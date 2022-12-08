import ReactGA from 'react-ga';

const google_key = "G-5T1EE05PEF";
let is_initialize = false;
export default class googleAnalytics {
    gaInitialize (user_id = undefined) {
        if (!is_initialize) {
            const options = {
                debug: true,
            }

            if (user_id) {
                options.gaOptions ={
                    userId: user_id.toString()
                }
            }

            console.log(options)

            ReactGA.initialize(google_key, options);
            ReactGA.pageview(window.location.pathname + window.location.hash + window.location.search);
            is_initialize = true;
        }
    }
    gaPageView () {
        if (is_initialize) {
            ReactGA.pageview(window.location.pathname + window.location.hash + window.location.search);
        }
    }

    gaEvent (category, action, value){
        if (is_initialize) {
            const event_data = {
                category: category,
                action: action
            }
            if (value) {
                event_data.value = value;
            }
            ReactGA.event(event_data);
        }
    }
}
