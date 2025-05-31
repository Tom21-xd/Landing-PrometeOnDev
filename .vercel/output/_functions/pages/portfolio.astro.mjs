import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_CDbgqzxC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B_G6hxh1.mjs';
import { $ as $$ViewMoreButton } from '../chunks/viewMoreButton_BjyAtCTw.mjs';
import { g as getCollection } from '../chunks/_astro_content_C5ZMXmmA.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$PortfolioCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortfolioCard;
  const { slug, title, image, tools, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group flex flex-col md:flex-row gap-8 mb-8 hover:scale-105 transition-transform duration-200 ease-in-out">  <a${addAttribute(`/portfolio/${slug}`, "href")} class="relative overflow-hidden hover:bg-dark-background dark:hover:bg-background rounded-lg shadow-lg md:w-2/3 transition duration-300 ease-in-out object-contain items-center justify-center"> <img${addAttribute(`img-${title}`, "id")}${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-[1.02]"> </a> <div class="flex flex-col justify-center py-8 md:w-1/3 relative group text-dark-light dark:text-dark-dark-darker"> <h3 class="text-3xl font-bold text-primary group-hover:text-dark dark:group-hover:text-dark-primary dark:text-dark-dark group-hover mb-2 transition-all duration-300"> ${title} </h3> <p class="mb-4"> ${description} </p> <p> ${tools} </p> <div class="hover:underline"> ${renderComponent($$result, "ViewMoreButton", $$ViewMoreButton, { "text": "Ir a conocer", "url": `/portfolio/${slug}` })} </div> </div> </div>`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/portfolio/molecules/PortfolioCard.astro", void 0);

const $$PortfolioGrid = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("projects")).sort(
    (a, b) => a.data.id - b.data.id
  );
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-8 mt-10"> ${projects.map(({ data, slug }) => {
    const { title, gallery, tools, shortDescription } = data;
    const image = gallery[0];
    const image2 = gallery[1];
    return renderTemplate`${renderComponent($$result, "PortfolioCard", $$PortfolioCard, { "slug": slug, "title": title, "image": image, "image2": image2, "tools": tools, "description": shortDescription })}`;
  })} </div>`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/portfolio/molecules/PortfolioGrid.astro", void 0);

const $$Astro$1 = createAstro();
const $$PortfolioTittle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortfolioTittle;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="text-6xl font-bold text-primary dark:text-dark-dark mt-10 text-center"> ${title} </h2>`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/portfolio/atoms/PortfolioTittle.astro", void 0);

const $$Astro = createAstro();
const $$PortfolioSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PortfolioSection;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto pt-24 md:px-10 lg:px-12 flex flex-col gap-6"> ${renderComponent($$result, "PortfolioTittle", $$PortfolioTittle, { "title": title })} ${renderComponent($$result, "PortfolioGrid", $$PortfolioGrid, {})} </section>`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/portfolio/organisms/PortfolioSection.astro", void 0);

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio - PrometeonDev", "description": "Explora nuestros proyectos destacados y casos de \xE9xito." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PortfolioSection", $$PortfolioSection, { "title": "Nuestro Portafolio" })} ` })}`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/pages/portfolio.astro", void 0);

const $$file = "D:/PrometeonDev/Landing-PrometeOnDev/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
