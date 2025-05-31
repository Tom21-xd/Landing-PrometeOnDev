import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_CDbgqzxC.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$ViewMoreButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ViewMoreButton;
  const { text, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="flex items-center gap-2 group text-primary dark:text-white transition-all duration-300"> <span class="text-lg font-primary font-semibold">${text}</span> <i class="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-2"></i> </a>`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/index/atoms/viewMoreButton.astro", void 0);

export { $$ViewMoreButton as $ };
