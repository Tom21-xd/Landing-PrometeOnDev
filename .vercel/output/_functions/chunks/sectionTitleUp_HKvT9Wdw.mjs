import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent, F as Fragment, u as unescapeHTML } from './astro/server_DCZrtpUB.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$5 = createAstro("https://prometeondev.com");
const $$SocialIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SocialIcon;
  const { icon, href, title, delay = 100 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(title, "title")} target="_blank" rel="noopener noreferrer"${addAttribute(`text-background text-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-[${delay}ms]`, "class")}> <i${addAttribute(icon, "class")}></i> </a>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/atoms/socialIcon.astro", void 0);

const $$Astro$4 = createAstro("https://prometeondev.com");
const $$TeamMemberCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TeamMemberCard;
  const {
    name,
    role,
    image,
    socials = {},
    headingLevel = "2"
  } = Astro2.props;
  const HeadingTag = `h${headingLevel}`;
  return renderTemplate`${maybeRenderHead()}<div class="bg-background-dark dark:bg-dark-background-dark text-dark dark:text-dark-dark group relative overflow-hidden rounded-md shadow-sm shadow-dark dark:shadow-dark-dark w-full max-w-80 mx-auto"> <div class="relative h-[400px] overflow-hidden"> <img${addAttribute(image, "src")}${addAttribute(name, "alt")}${addAttribute(`${name} - ${role} en PrometeonDev`, "title")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"> <div class="absolute inset-0 bg-black/40 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"> <div class="flex space-x-6"> ${socials.github && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "icon": "fab fa-github", "href": socials.github, "title": `Ver perfil de ${name} en GitHub` })}`} ${socials.linkedin && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "icon": "fab fa-linkedin-in", "href": socials.linkedin, "title": `Ver perfil de ${name} en Linkedin` })}`} </div> </div> </div> <div class="p-4"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(`<${HeadingTag} class="text-lg font-semibold">${name}</${HeadingTag}>`)}` })} <p class="text-sm">${role}</p> </div> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/molecules/teamMemberCard.astro", void 0);

const $$Astro$3 = createAstro("https://prometeondev.com");
const $$CarouselText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CarouselText;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="carousel-text px-8 whitespace-nowrap text-[clamp(3rem,10vw,8rem)] font-extrabold leading-[0.9] tracking-[-0.05em] text-transparent select-none flex-shrink-0" data-astro-cid-kiouxkik> ${text} </div> `;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/atoms/carouselText.astro", void 0);

const $$Astro$2 = createAstro("https://prometeondev.com");
const $$InfiniteTextCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$InfiniteTextCarousel;
  const { items = [], speed = 100 } = Astro2.props;
  const duplicatedItems = [...items, ...items];
  return renderTemplate`${maybeRenderHead()}<div class="flex" data-astro-cid-5idduyaq> <div class="flex items-center transform py-8 animate-scroll whitespace-nowrap"${addAttribute(`--speed: ${speed}s`, "style")} data-astro-cid-5idduyaq> ${duplicatedItems.map((item, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5idduyaq": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CarouselText", $$CarouselText, { "text": item.text, "data-astro-cid-5idduyaq": true })} ${index !== duplicatedItems.length - 1 && renderTemplate`<span class="text-[clamp(3rem,10vw,4rem)] px-4 font-bold leading-[0.9] select-none flex-shrink-0 text-dark dark:text-dark-dark" data-astro-cid-5idduyaq>
|
</span>`}` })}`)} </div> </div> `;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/molecules/infiniteTextCarousel.astro", void 0);

const $$ValuesCarousel = createComponent(($$result, $$props, $$slots) => {
  const values = [
    { text: "INNOVACI\xD3N" },
    { text: "EFICIENCIA" },
    { text: "PASI\xD3N" },
    { text: "CRECIMIENTO" },
    { text: "IMPACTO" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full overflow-hidden my-4"> ${renderComponent($$result, "InfiniteTextCarousel", $$InfiniteTextCarousel, { "items": values, "speed": 20 })} </section>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/organisms/valuesCarousel.astro", void 0);

const $$Astro$1 = createAstro("https://prometeondev.com");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-5xl text-primary dark:text-dark-dark font-bold text-center mb-10"> ${text} </h1>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/atoms/sectionTitle.astro", void 0);

const $$Astro = createAstro("https://prometeondev.com");
const $$SectionTitleUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionTitleUp;
  const { text = "Sobre nosotros" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="pt-24 mx-auto px-4"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "text": text })} </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/organisms/sectionTitleUp.astro", void 0);

export { $$TeamMemberCard as $, $$SectionTitleUp as a, $$ValuesCarousel as b };
