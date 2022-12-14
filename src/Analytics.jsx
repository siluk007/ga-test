import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {gaInitialize, gaPageView} from './gAnalytics'

function Analytics(){
    const [analytics_initialized, setAnalyticsUsed] = useState(false);
    
    const location = useLocation();

    if (!analytics_initialized) {
        // gaInitialize()
        // setAnalyticsUsed(true)
    }

    useEffect(() => {
        if (analytics_initialized) {
            gaPageView();
        }
    }, [location]);

    return <></>;
};

export default Analytics;

