import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DCZrtpUB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BwFhCVBD.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-background dark:bg-dark-background"> <h1 class="text-5xl font-bold text-primary dark:text-dark-primary mb-4">
404
</h1> <p class="text-lg text-dark dark:text-dark-dark mb-6">
Lo sentimos, no pudimos encontrar esta página.
</p> <a href="/" title="Ir al inicio de PrometeonDev" aria-label="Ir al inicio de PrometeonDev" class="text-primary underline dark:text-dark-primary">Volver al inicio</a> </section> ` })}`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/pages/404.astro", void 0);

const $$file = "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
