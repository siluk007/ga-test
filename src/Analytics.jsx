import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import gAnalytics from './gAnalytics'

function Analytics(){
    const [analytics_initialized, setAnalyticsUsed] = useState(false);
    
    const location = useLocation();

    if (!analytics_initialized) {
        gAnalytics.gaInitialize()
        setAnalyticsUsed(true)
    }

    useEffect(() => {
        if (analytics_initialized) {
            gAnalytics.gaPageView();
        }
    }, [location]);

    return <></>;
};

export default Analytics;

