export const install = (trackingId, additionalConfigInfo = {}) => {
    const scriptId = 'ga-gtag';

    if (document.getElementById(scriptId)) return;

    const {body} = document;
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!=='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MFQH35F')
    // const script = document.createElement('script');
    // script.id = scriptId;
    // script.type = 'text/javascript';
    // script.async = true;
    // script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    // head.insertBefore(script, head.firstChild);

    // const script2 = document.createElement('script');
    // script2.id = script2Id;
    // script2.type = 'text/javascript';
    // script2.async = true;
    // script2.src = `https://www.googletagmanager.com/gtm.js?id=GTM-MFQH35F`;
    // head.insertBefore(script2, head.firstChild);

    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.height = '0';
    iframe.width = '0';
    iframe.style = 'display:none;visibility:hidden';
    iframe.src = `https://www.googletagmanager.com/ns.html?id=GTM-MFQH35F`;
    noscript.insertBefore(iframe, noscript.firstChild);
    body.insertBefore(noscript, body.firstChild);


    // window.dataLayer = window.dataLayer || [];

    // gtag('js', new Date());
    // gtag('config', trackingId, additionalConfigInfo);
    // gtag({'gtm.start': new Date().getTime(), event: 'gtm.js'});
};

export const gtag = function() {
    // Can't use arrow func + destructuring as Google expects
    // arguments objects in dataLayer (not an array of arguments).
    window.dataLayer.push(arguments);
};

export default gtag;