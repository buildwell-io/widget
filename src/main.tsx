/*
* Note: Browsers can block access to window.top due to same origin policy. IE bugs also take place.
* @see https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
* */
if (!__DEV__&&!(()=>{try{return window.self!==window.top;}catch(e){return true;}})()){
    throw new Error('The buildwell.io widget must be placed inside an <iframe> element!');
}

/* The app is in a <iframe>, loading */
import('./app/app');
