import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderTemplate, b as addAttribute, d as renderComponent, k as renderSlot } from '../../chunks/astro/server_DCZrtpUB.mjs';
import 'kleur/colors';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_-7iAp8dw.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BgXMIiwx.mjs';
import 'clsx';
import { $ as $$SocialLink } from '../../chunks/socialLink_DqKkDo-R.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$8 = createAstro("https://prometeondev.com");
const $$ProjectLabel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ProjectLabel;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="text-md font-semibold text-primary dark:text-dark-dark">${label}</p>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/project/atoms/projectLabel.astro", void 0);

const $$Astro$7 = createAstro("https://prometeondev.com");
const $$ProjectText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ProjectText;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="text-base text-dark dark:text-dark-dark-darker prose">${text}</p>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/project/atoms/projectText.astro", void 0);

const $$Astro$6 = createAstro("https://prometeondev.com");
const $$ExternalLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ExternalLink;
  const { link, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(text, "title")}${addAttribute(text, "aria-label")} target="_blank" rel="noopener noreferrer" class="text-primary dark:text-dark-dark-darker hover:underline decoration-[1.5px] hover:text-dark dark:hover:text-dark-primary hover:scale-[1.02] transition-all duration-200"> ${text} </a>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/project/atoms/externalLink.astro", void 0);

const $$Astro$5 = createAstro("https://prometeondev.com");
const $$ProjectInfoBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ProjectInfoBlock;
  const { entry } = Astro2.props;
  const {
    title,
    shortDescription,
    tools,
    author,
    link,
    socials = []
  } = entry.data;
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return renderTemplate`${maybeRenderHead()}<div class="space-y-4"> <h2 class="text-3xl font-bold text-primary dark:text-dark-dark">
Información de ${title} </h2> ${renderComponent($$result, "ProjectText", $$ProjectText, { "text": shortDescription })} <div class="flex flex-col gap-2"> ${renderComponent($$result, "ProjectLabel", $$ProjectLabel, { "label": "Tecnolog\xEDas utilizadas" })} ${renderComponent($$result, "ProjectText", $$ProjectText, { "text": tools })} </div> <div class="flex items-center gap-2"> ${renderComponent($$result, "ProjectLabel", $$ProjectLabel, { "label": "Autor:" })} ${renderComponent($$result, "ProjectText", $$ProjectText, { "text": author })} </div> ${link && renderTemplate`<div class="flex items-center gap-2"> ${renderComponent($$result, "ProjectLabel", $$ProjectLabel, { "label": "Sitio web: " })} ${renderComponent($$result, "ExternalLink", $$ExternalLink, { "link": `https://${link}`, "text": `\xA1Visitar ${title}!` })} </div>`} ${socials.length > 0 && renderTemplate`<div class="flex gap-6"> ${socials.map((s) => renderTemplate`${renderComponent($$result, "SocialLink", $$SocialLink, { "url": s.url, "icon": s.icon, "title": `${s.icon === "x" ? "Twitter/X" : capitalize(s.icon)} de ${author}` })}`)} </div>`} </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/project/molecules/projectInfoBlock.astro", void 0);

const $$Astro$4 = createAstro("https://prometeondev.com");
const $$ProjectGalleryGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProjectGalleryGrid;
  const { gallery } = Astro2.props;
  const mainImage = gallery[1];
  const gridImages = gallery.slice(-2);
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${gridImages.map((img, i) => renderTemplate`<img${addAttribute(img.src, "src")}${addAttribute(img.alt, "alt")}${addAttribute(img.title, "title")} class="w-full h-full object-cover rounded-xl shadow md:col-span-1">`)} <img${addAttribute(mainImage.src, "src")}${addAttribute(mainImage.alt, "alt")}${addAttribute(mainImage.title, "title")} alt="Vista principal" class="md:col-span-2 w-full rounded-xl shadow-md"> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/project/molecules/projectGalleryGrid.astro", void 0);

const $$Astro$3 = createAstro("https://prometeondev.com");
const $$ProjectDetailSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectDetailSection;
  const { entry } = Astro2.props;
  const { title, gallery } = entry.data;
  return renderTemplate`${maybeRenderHead()}<section class="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:gap-x-10 px-6 md:px-8 lg:px-20 py-12 bg-background dark:bg-dark-background"> <div class="order-1 md:order-2 md:sticky md:top-1/7 self-start"> ${renderComponent($$result, "ProjectInfoBlock", $$ProjectInfoBlock, { "entry": entry })} </div> <div class="order-2 md:order-1 space-y-6 col-span-2"> <img${addAttribute(`img-${title}`, "id")}${addAttribute(gallery[0].src, "src")}${addAttribute(gallery[0].alt, "alt")}${addAttribute(gallery[0].title, "title")} class="w-full rounded-xl shadow-lg"> <h2 class="text-4xl font-bold text-primary dark:text-dark-dark mb-4">
Sobre el proyecto ${title} </h2> <div class="prose dark:prose-invert max-w-none text-justify"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "ProjectGalleryGrid", $$ProjectGalleryGrid, { "gallery": gallery })} </div> </section>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/project/organisms/projectDetailSection.astro", void 0);

const $$Astro$2 = createAstro("https://prometeondev.com");
const $$ProjectNavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectNavLink;
  const { href, label, direction } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`Siguiente proyecto - ${label}`, "title")}${addAttribute(`Siguiente proyecto - ${label}`, "aria-label")} class="flex font-primary font-semibold items-center text-lg gap-2 group text-primary dark:text-dark-dark hover:text-primary-dark dark:hover:text-dark-dark-darker transition-all duration-300"> ${direction === "prev" && renderTemplate`<i class="fa-solid fa-arrow-left transition-transform duration-300 group-hover:-translate-x-2"></i>`} <span>${label}</span> ${direction === "next" && renderTemplate`<i class="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-2"></i>`} </a>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/project/atoms/projectNavLink.astro", void 0);

const $$Astro$1 = createAstro("https://prometeondev.com");
const $$ProjectNavigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectNavigation;
  const { prev, next } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between items-center gap-4"> ${prev ? renderTemplate`${renderComponent($$result, "ProjectNavLink", $$ProjectNavLink, { "href": `/portfolio/${prev.slug}`, "label": prev.data.title, "direction": "prev" })}` : renderTemplate`<div></div>`} ${next ? renderTemplate`${renderComponent($$result, "ProjectNavLink", $$ProjectNavLink, { "href": `/portfolio/${next.slug}`, "label": next.data.title, "direction": "next" })}` : renderTemplate`<div></div>`} </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/project/molecules/projectNavigation.astro", void 0);

const $$Astro = createAstro("https://prometeondev.com");
async function getStaticPaths() {
  const projects = await getCollection("projects");
  const sorted = projects.sort((a, b) => a.data.id - b.data.id);
  return sorted.map((project, index) => {
    const prev = index > 0 ? sorted[index - 1] : null;
    const next = index < sorted.length - 1 ? sorted[index + 1] : null;
    return {
      params: { id: project.slug },
      props: { entry: project, prev, next }
    };
  });
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { entry, prev, next } = Astro2.props;
  if (!entry) {
    return Astro2.redirect("/404");
  }
  const { Content } = await renderEntry(entry);
  const defaultKeywords = "desarrollo web, app m\xF3vil, software personalizado, PrometeonDev, proyecto tecnol\xF3gico";
  const keywords = entry.data.keywords ? Array.isArray(entry.data.keywords) ? entry.data.keywords.join(", ") : entry.data.keywords : `${entry.data.title}, ${defaultKeywords}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${entry.data.title} - Proyecto desarrollado por PrometeonDev`, "description": entry.data.shortDescription, "keywords": keywords }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto text-center py-28 px-4 pb-4"> <h1 class="text-5xl font-primary font-bold text-primary dark:text-dark-dark mb-6"> ${entry.data.title} </h1> </div> ${renderComponent($$result2, "ProjectDetailSection", $$ProjectDetailSection, { "entry": entry }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} <div class="container mx-auto px-4 sm:px-12 pb-12 mt-16"> ${renderComponent($$result2, "ProjectNavigation", $$ProjectNavigation, { "prev": prev, "next": next })} </div> ` })}`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/pages/portfolio/[id].astro", void 0);

const $$file = "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/pages/portfolio/[id].astro";
const $$url = "/portfolio/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
