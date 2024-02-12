interface BootstrapOptions {
    variant: 'inline' | 'fullscreen';
}

function __bootstrap(): Promise<BootstrapOptions> {
    return new Promise<BootstrapOptions>((resolve, reject) => {
        if (import.meta.env.DEV) {
            return resolve({
                variant: import.meta.env.VITE_CURRENT_APP_TYPE,
            });
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
        const variant = (urlSearchParams.get('variant') ?? 'inline') as BootstrapOptions['variant'];
        const referrer = document.referrer;

        const requestParams = new URLSearchParams({ key, referrer });
        fetch(import.meta.env.VITE_API_URL + '/v1/widget-app/verify?' + requestParams)
            .then((response) => response.ok ? resolve({ variant }) : reject('The widget key or referrer is invalid!'))
            .catch((e) => reject(e));
    });
}


__bootstrap().then(({ variant }) => import(`./app/${variant}/app.tsx`)).catch((e) => {throw new Error(e);});
