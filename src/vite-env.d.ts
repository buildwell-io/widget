/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_CURRENT_APP_TYPE: 'inline' | 'fullscreen';
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
