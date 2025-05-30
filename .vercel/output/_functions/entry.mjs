import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_b08NWCAl.mjs';
import { manifest } from './manifest_CRFiCoL0.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/our-team.astro.mjs');
const _page6 = () => import('./pages/portfolio/_id_.astro.mjs');
const _page7 = () => import('./pages/portfolio.astro.mjs');
const _page8 = () => import('./pages/services.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/our-team.astro", _page5],
    ["src/pages/portfolio/[id].astro", _page6],
    ["src/pages/portfolio.astro", _page7],
    ["src/pages/services.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "fbc1367b-84fe-45c7-bb97-c5fcb3b66f13",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
