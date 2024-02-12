/*
* Note: Browsers can block access to window.top due to same origin policy. IE bugs also take place.
* @see https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
* */
if (import.meta.env.PROD&&!(()=>{try{return window.self!==window.top;}catch(e){return true;}})()){
    throw new Error('The buildwell.io widget must be placed inside an <iframe> element!');
}

(() => {
    fetch(import.meta.env.VITE_API_URL + '/v1/widget-app').then((res) => res.json()).then((res) => {
        console.log('Response:', res);
    });
})();

/* The app is in a <iframe>, loading */
import('./app/app');
