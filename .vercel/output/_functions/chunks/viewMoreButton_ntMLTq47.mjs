import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_DCZrtpUB.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://prometeondev.com");
const $$ViewMoreButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ViewMoreButton;
  const { text, url, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute(title, "title")}${addAttribute(title, "aria-label")} class="flex items-center gap-2 group text-primary dark:text-white transition-all duration-300"> <span class="text-lg font-primary font-semibold">${text}</span> <i class="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-2"></i> </a>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/atoms/viewMoreButton.astro", void 0);

export { $$ViewMoreButton as $ };
