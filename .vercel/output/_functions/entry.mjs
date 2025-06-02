import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B8hK9FA_.mjs';
import { manifest } from './manifest_CwYFWUVm.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/500.astro.mjs');
const _page3 = () => import('./pages/about/our-team.astro.mjs');
const _page4 = () => import('./pages/about.astro.mjs');
const _page5 = () => import('./pages/api/contact.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/portfolio/_id_.astro.mjs');
const _page8 = () => import('./pages/portfolio.astro.mjs');
const _page9 = () => import('./pages/services.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/500.astro", _page2],
    ["src/pages/about/our-team.astro", _page3],
    ["src/pages/about.astro", _page4],
    ["src/pages/api/contact.ts", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/portfolio/[id].astro", _page7],
    ["src/pages/portfolio.astro", _page8],
    ["src/pages/services.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "77a8a2ed-6bdd-4976-a515-aa086a11cdb2",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
