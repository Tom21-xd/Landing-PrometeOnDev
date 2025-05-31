import { c as createComponent, m as maybeRenderHead, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_CDbgqzxC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B_G6hxh1.mjs';
import { $ as $$TeamMemberCard, a as $$SectionTitleUp, b as $$ValuesCarousel } from '../chunks/sectionTitleUp_Dy3YF8i8.mjs';
export { renderers } from '../renderers.mjs';

const team = [
  {
    name: "Brayan Estupi\xF1\xE1n",
    role: "Photographer",
    image: "/images/about/brayan-esupinian.webp",
    socials: {
      github: "https://github.com/Angarita-17",
      linkedin: "https://www.linkedin.com/in/brayangarita/"
    }
  },
  {
    name: "Johan Ramirez",
    role: "Photographer",
    image: "/images/about/johan-ramirez.webp",
    socials: {
      github: "https://github.com/Tom21-xd",
      linkedin: "https://www.linkedin.com/in/johan-steven-ramirez-murcia-95ab80295/"
    }
  },
  {
    name: "Sebasti\xE1n Sierra",
    role: "Photographer",
    image: "/images/about/sebastian-sierra.webp",
    socials: {
      github: "https://github.com/SebastianSierra15",
      linkedin: "https://www.linkedin.com/in/sebastian-sierra-417358263/"
    }
  },
  {
    name: "Brayan G\xF3mez",
    role: "Photographer",
    image: "/images/about/brayan-gomez.webp",
    socials: {
      github: "https://github.com/SeitoUwU",
      linkedin: "https://www.linkedin.com/in/brayan-gomez-ing/"
    }
  },
  {
    name: "Michael Martinez",
    role: "Photographer",
    image: "/images/about/michael-martinez.webp",
    socials: {
      github: "https://github.com/Micha852",
      linkedin: "https://www.linkedin.com/in/mamg0852/"
    }
  },
  {
    name: "Danna Navia",
    role: "Photographer",
    image: "/images/about/danna-navia.webp",
    socials: {
      github: "https://github.com/Dannanavia",
      linkedin: "http://www.linkedin.com/in/danna-vanessa-navia-01b24b315"
    }
  }
];
const $$TeamFullSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-12 text-white"> <div class="max-w-[1200px] mx-auto px-4"> <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8"> ${team.map((member) => renderTemplate`${renderComponent($$result, "TeamMemberCard", $$TeamMemberCard, { ...member })}`)} </div> </div> </section>`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/about/organisms/teamFullSection.astro", void 0);

const $$OurTeam = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nuestro equipo - PrometeonDev", "description": "Conoce a nuestro talentoso equipo de profesionales." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitleUp", $$SectionTitleUp, { "text": "Conoce a todo el equipo" })} ${renderComponent($$result2, "TeamFullSection", $$TeamFullSection, {})} ${renderComponent($$result2, "ValuesCarousel", $$ValuesCarousel, {})} ` })}`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/pages/our-team.astro", void 0);

const $$file = "D:/PrometeonDev/Landing-PrometeOnDev/src/pages/our-team.astro";
const $$url = "/our-team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OurTeam,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
