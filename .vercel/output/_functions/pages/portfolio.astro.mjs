import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_DCZrtpUB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BwFhCVBD.mjs';
import { $ as $$ViewMoreButton } from '../chunks/viewMoreButton_ntMLTq47.mjs';
import { g as getCollection } from '../chunks/_astro_content_-7iAp8dw.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://prometeondev.com");
const $$PortfolioCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortfolioCard;
  const { slug, title, image, tools, description } = Astro2.props;
  const viewMoreTitle = `Ver m\xE1s detalles del proyecto ${title}`;
  return renderTemplate`${maybeRenderHead()}<div class="group flex flex-col md:flex-row gap-3 md:gap-8 mb-8 hover:scale-105 transition-transform duration-200 ease-in-out"> <a${addAttribute(`/portfolio/${slug}`, "href")}${addAttribute(`Ir al proyecto ${title}`, "title")}${addAttribute(`Ir al proyecto ${title} en PrometeonDev`, "aria-label")} class="relative overflow-hidden hover:bg-dark-background dark:hover:bg-background rounded-lg shadow-lg md:w-2/3 transition duration-300 ease-in-out object-contain items-center justify-center"> <img${addAttribute(`img-${title}`, "id")}${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")}${addAttribute(image.title, "title")} class="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-[1.02]"> </a> <div class="flex flex-col justify-center py-2 md:py-8 md:w-1/3 relative group text-dark-light dark:text-dark-dark-darker"> <h2 class="text-3xl font-bold text-primary group-hover:text-dark dark:group-hover:text-dark-primary dark:text-dark-dark group-hover mb-2 transition-all duration-300"> ${title} </h2> <p class="mb-4"> ${description} </p> <p> ${tools} </p> <div class="hover:underline"> ${renderComponent($$result, "ViewMoreButton", $$ViewMoreButton, { "text": `Ir a conocer ${title}`, "url": `/portfolio/${slug}`, "title": viewMoreTitle })} </div> </div> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/portfolio/molecules/PortfolioCard.astro", void 0);

const $$PortfolioGrid = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("projects")).sort(
    (a, b) => a.data.id - b.data.id
  );
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-4 md:gap-8 mt-10"> ${projects.map(({ data, slug }) => {
    const { title, gallery, tools, shortDescription } = data;
    const image = gallery[0];
    return renderTemplate`${renderComponent($$result, "PortfolioCard", $$PortfolioCard, { "slug": slug, "title": title, "image": image, "tools": tools, "description": shortDescription })}`;
  })} </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/portfolio/molecules/PortfolioGrid.astro", void 0);

const $$Astro$1 = createAstro("https://prometeondev.com");
const $$PortfolioTittle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortfolioTittle;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-6xl font-bold text-primary dark:text-dark-dark mt-10 text-center"> ${title} </h1>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/portfolio/atoms/PortfolioTittle.astro", void 0);

const $$Astro = createAstro("https://prometeondev.com");
const $$PortfolioSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PortfolioSection;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto pt-24 px-6 md:px-10 lg:px-12 flex flex-col gap-6"> ${renderComponent($$result, "PortfolioTittle", $$PortfolioTittle, { "title": title })} ${renderComponent($$result, "PortfolioGrid", $$PortfolioGrid, {})} </section>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/portfolio/organisms/PortfolioSection.astro", void 0);

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const title = "Portafolio de desarrollos web y m\xF3viles - PrometeonDev";
  const description = "Explora proyectos web, apps m\xF3viles, dashboards y sistemas desarrollados por PrometeonDev. Conoce nuestros casos de \xE9xito tecnol\xF3gicos.";
  const keywords = "portafolio desarrollo web, portafolio apps m\xF3viles, proyectos PrometeonDev, casos de \xE9xito, sistemas empresariales, dashboards interactivos, dise\xF1o de software a medida, soluciones tecnol\xF3gicas, Prometeon, PrometeonDev";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "keywords": keywords }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PortfolioSection", $$PortfolioSection, { "title": "Nuestro Portafolio" })} ` })}`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/pages/portfolio.astro", void 0);

const $$file = "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
