function __bootstrap(): Promise<void> {
    return new Promise((resolve, reject) => {
        if (import.meta.env.DEV) {
            return resolve();
        }

        /*
        * Note: Browsers can block access to window.top due to same origin policy. IE bugs also take place.
        * @see https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
        * */
        if (!(() => {try {return window.self !== window.top;} catch (e) {return true;}})()) {
            return reject('The widget must be placed inside an <iframe> element!');
        }

        const url = new URL(window.location.href);
        const urlSearchParams = new URLSearchParams(url.search);
        const key = urlSearchParams.get('key') ?? '';
        const referrer = document.referrer;

        const requestParams = new URLSearchParams({ key, referrer });
        fetch(import.meta.env.VITE_API_URL + '/v1/widget-app/verify?' + requestParams)
            .then((response) => response.ok ? resolve() : reject('The widget key or referrer is invalid!'))
            .catch((e) => reject(e));
    });
}


__bootstrap().then(() => import('./app/app')).catch((e) => {throw new Error(e);});
