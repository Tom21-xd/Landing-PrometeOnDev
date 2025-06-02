import { a as createComponent, m as maybeRenderHead, d as renderComponent, r as renderTemplate } from '../../chunks/astro/server_DCZrtpUB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BgXMIiwx.mjs';
import { $ as $$TeamMemberCard, a as $$SectionTitleUp, b as $$ValuesCarousel } from '../../chunks/sectionTitleUp_HKvT9Wdw.mjs';
export { renderers } from '../../renderers.mjs';

const team = [
  {
    name: "Brayan Estupi\xF1\xE1n",
    role: "Desarrollador Fullstack y M\xF3vil",
    image: "/images/about/brayan-esupinian.webp",
    socials: {
      github: "https://github.com/Angarita-17",
      linkedin: "https://www.linkedin.com/in/brayangarita/"
    }
  },
  {
    name: "Johan Ramirez",
    role: "Director de Proyectos y Arquitecto de Software",
    image: "/images/about/johan-ramirez.webp",
    socials: {
      github: "https://github.com/Tom21-xd",
      linkedin: "https://www.linkedin.com/in/johan-steven-ramirez-murcia-95ab80295/"
    }
  },
  {
    name: "Sebasti\xE1n Sierra",
    role: "L\xEDder T\xE9cnico y Desarrollador Backend",
    image: "/images/about/sebastian-sierra.webp",
    socials: {
      github: "https://github.com/SebastianSierra15",
      linkedin: "https://www.linkedin.com/in/sebastian-sierra-417358263/"
    }
  },
  {
    name: "Brayan G\xF3mez",
    role: "Ingeniero QA y Tester Automatizado",
    image: "/images/about/brayan-gomez.webp",
    socials: {
      github: "https://github.com/SeitoUwU",
      linkedin: "https://www.linkedin.com/in/brayan-gomez-ing/"
    }
  },
  {
    name: "Michael Martinez",
    role: "Analista de Negocio y Requerimientos",
    image: "/images/about/michael-martinez.webp",
    socials: {
      github: "https://github.com/Micha852",
      linkedin: "https://www.linkedin.com/in/mamg0852/"
    }
  },
  {
    name: "Danna Navia",
    role: "CEO y Dise\xF1adora UX/UI",
    image: "/images/about/danna-navia.webp",
    socials: {
      github: "https://github.com/Dannanavia",
      linkedin: "http://www.linkedin.com/in/danna-vanessa-navia-01b24b315"
    }
  }
];
const $$TeamFullSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-12 text-white"> <div class="max-w-[1200px] mx-auto px-4"> <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8"> ${team.map((member) => renderTemplate`${renderComponent($$result, "TeamMemberCard", $$TeamMemberCard, { ...member })}`)} </div> </div> </section>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/organisms/teamFullSection.astro", void 0);

const $$OurTeam = createComponent(($$result, $$props, $$slots) => {
  const title = "Equipo de expertos en software - PrometeonDev";
  const description = "Conoce al equipo de PrometeonDev: desarrolladores, dise\xF1adores y especialistas que crean soluciones tecnol\xF3gicas a tu medida.";
  const keywords = "equipo de desarrollo, expertos en software, desarrolladores web, dise\xF1adores UX/UI, PrometeonDev, equipo tecnol\xF3gico, soluciones digitales, empresa de software Colombia";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "keywords": keywords }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitleUp", $$SectionTitleUp, { "text": "Nuestro equipo" })} ${renderComponent($$result2, "TeamFullSection", $$TeamFullSection, {})} ${renderComponent($$result2, "ValuesCarousel", $$ValuesCarousel, {})} ` })}`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/pages/about/our-team.astro", void 0);

const $$file = "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/pages/about/our-team.astro";
const $$url = "/about/our-team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OurTeam,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
