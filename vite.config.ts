/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "tailwindcss";
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
    root: __dirname,
    cacheDir: './node_modules/.vite/.',

    server: {
        port: 4200,
        host: 'localhost',
    },

    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },

    preview: {
        port: 4300,
        host: 'localhost',
    },

    plugins: [ react(), nxViteTsPaths() ],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    build: {
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
                pure_funcs: [ 'console.info', 'console.debug', 'console.warn' ],
            },
            format: {
                comments: false,
                semicolons: false,
            },
        },
        cssCodeSplit: true,
        outDir: './dist/widget',
        reportCompressedSize: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },

    test: {
        globals: true,
        cache: {
            dir: './node_modules/.vitest',
        },
        environment: 'jsdom',
        include: [ 'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}' ],

        reporters: [ 'default' ],
        coverage: {
            reportsDirectory: './coverage/widget',
            provider: 'v8',
        },
    },
});
