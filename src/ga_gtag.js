export const install = () => {
    const scriptId = 'ga-gtag';

    if (document.getElementById(scriptId)) return;

    const {body} = document;
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!=='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MFQH35F')
    
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.height = '0';
    iframe.width = '0';
    iframe.style = 'display:none;visibility:hidden';
    iframe.src = `https://www.googletagmanager.com/ns.html?id=GTM-MFQH35F`;
    noscript.insertBefore(iframe, noscript.firstChild);
    body.insertBefore(noscript, body.firstChild);
};

export const installAnalytics = (trackingId, additionalConfigInfo = {}) => {
    const scriptId = 'ga-gtag';

    if (document.getElementById(scriptId)) return;

    const {head} = document;
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    head.insertBefore(script, head.firstChild);

    window.dataLayer = window.dataLayer || [];

    gtag('js', new Date());
    gtag('config', trackingId, additionalConfigInfo);
};

export const gtag = function() {
    // Can't use arrow func + destructuring as Google expects
    // arguments objects in dataLayer (not an array of arguments).
    window.dataLayer.push(arguments);
};

export default gtag;