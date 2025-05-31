import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_CDbgqzxC.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$SocialLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialLink;
  const { url, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" class="text-dark dark:text-dark-dark hover:text-primary dark:hover:text-primary transition duration-300 hover:scale-95"> <i${addAttribute(`fa-brands fa-${icon} text-3xl`, "class")}></i> </a>`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/project/atoms/socialLink.astro", void 0);

export { $$SocialLink as $ };
