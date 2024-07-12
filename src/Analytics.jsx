import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { gaInitialize, gaPageView } from './gAnalytics';

function Analytics () {
  const [analyticsInitialized, setAnalyticsUsed] = useState(false);

  const location = useLocation();

  if (!analyticsInitialized) {
    gaInitialize();
    setAnalyticsUsed(true);
  }

  useEffect(() => {
    if (analyticsInitialized) {
      gaPageView();
    }
  }, [location, analyticsInitialized]);

  return <></>;
}

export default Analytics;
