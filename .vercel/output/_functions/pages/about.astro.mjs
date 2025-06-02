import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderTemplate, d as renderComponent, b as addAttribute, l as renderScript, F as Fragment } from '../chunks/astro/server_DCZrtpUB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BgXMIiwx.mjs';
import 'clsx';
import { $ as $$ViewMoreButton } from '../chunks/viewMoreButton_ntMLTq47.mjs';
import { $ as $$TeamMemberCard, a as $$SectionTitleUp, b as $$ValuesCarousel } from '../chunks/sectionTitleUp_HKvT9Wdw.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro("https://prometeondev.com");
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Heading;
  const { text = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="text-3xl text-center md:text-4xl font-bold text-primary dark:text-dark-dark mb-4"> ${text} </h2>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/atoms/heading.astro", void 0);

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
const $$TeamPreviewSection = createComponent(($$result, $$props, $$slots) => {
  const textHeading = "Nuestro equipo";
  const textButton = "Ver todo el equipo";
  const urlButton = "/about/our-team";
  const titleButton = "Ver todos los miembros del equipo PrometeonDev";
  const selected = team.sort(() => 0.5 - Math.random()).slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<section class="py-6 md:py-12 px-6 lg:px-12 text-dark dark:text-dark-dark"> <div class="max-w-11/12 mx-auto"> <div class="flex flex-col md:flex-row justify-between items-center mb-10 gap-4"> ${renderComponent($$result, "Heading", $$Heading, { "text": textHeading })} ${renderComponent($$result, "ViewMoreButton", $$ViewMoreButton, { "text": textButton, "url": urlButton, "title": titleButton })} </div> <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"> ${selected.map((member) => renderTemplate`${renderComponent($$result, "TeamMemberCard", $$TeamMemberCard, { ...member, "headingLevel": 3 })}`)} </div> </div> </section>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/organisms/teamPreviewSection.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://prometeondev.com");
const $$Paragraph = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Paragraph;
  const { text } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="relative inline group" data-astro-cid-5voyvpb7> <p class="text-dark-light dark:text-gray-400 text-base leading-relaxed m-0 prose" data-astro-cid-5voyvpb7> ', ' </p> <p class="highlight-layer absolute top-0 left-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in text-black dark:text-dark-dark text-base leading-relaxed m-0 prose" data-astro-cid-5voyvpb7> ', ' </p> </div>  <script>\n  document.querySelectorAll(".group").forEach((container) => {\n    const layer = container.querySelector(".highlight-layer");\n    container.addEventListener("mousemove", (e) => {\n      const rect = container.getBoundingClientRect();\n      const x = `${e.clientX - rect.left}px`;\n      const y = `${e.clientY - rect.top}px`;\n      layer?.style.setProperty("--mouse-x", x);\n      layer?.style.setProperty("--mouse-y", y);\n    });\n  });\n<\/script>'], ["", '<div class="relative inline group" data-astro-cid-5voyvpb7> <p class="text-dark-light dark:text-gray-400 text-base leading-relaxed m-0 prose" data-astro-cid-5voyvpb7> ', ' </p> <p class="highlight-layer absolute top-0 left-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in text-black dark:text-dark-dark text-base leading-relaxed m-0 prose" data-astro-cid-5voyvpb7> ', ' </p> </div>  <script>\n  document.querySelectorAll(".group").forEach((container) => {\n    const layer = container.querySelector(".highlight-layer");\n    container.addEventListener("mousemove", (e) => {\n      const rect = container.getBoundingClientRect();\n      const x = \\`\\${e.clientX - rect.left}px\\`;\n      const y = \\`\\${e.clientY - rect.top}px\\`;\n      layer?.style.setProperty("--mouse-x", x);\n      layer?.style.setProperty("--mouse-y", y);\n    });\n  });\n<\/script>'])), maybeRenderHead(), text, text);
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/atoms/paragraph.astro", void 0);

const $$Astro$3 = createAstro("https://prometeondev.com");
const $$ImageTextBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ImageTextBlock;
  const { image, title, ariaLabel, text, reverse = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-4 md:gap-6 lg:gap-8 py-6 md:py-12`, "class")}> <div class="w-full md:w-1/2 overflow-hidden shadow-sm shadow-gray-600 dark:shadow-none rounded-lg"> <img${addAttribute(image, "src")}${addAttribute(`Imagen ilustrativa: ${title}`, "alt")}${addAttribute(ariaLabel, "title")} loading="lazy" class="w-full h-auto object-cover transition-transform duration-300 hover:scale-105 hover:brightness-90"> </div> <div class="md:w-1/2 text-justify px-4"> ${renderComponent($$result, "Heading", $$Heading, { "text": title })} ${renderComponent($$result, "Paragraph", $$Paragraph, { "text": text })} </div> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/molecules/imageTextBlock.astro", void 0);

const $$MissionSection = createComponent(($$result, $$props, $$slots) => {
  const title = "Nuestra misi\xF3n";
  const image = "/images/about/mision.webp";
  const text = "En PrometeOnDev tenemos como misi\xF3n dise\xF1ar y desarrollar soluciones tecnol\xF3gicas innovadoras y personalizadas que impulsen la transformaci\xF3n digital de empresas, startups y emprendedores. Nos comprometemos a ofrecer productos funcionales, escalables y alineados con los objetivos de nuestros clientes, combinando creatividad, eficiencia y un acompa\xF1amiento cercano en cada etapa del proceso.";
  const ariaLabel = "Ilustraci\xF3n representando la misi\xF3n de PrometeonDev: impulsar la transformaci\xF3n digital con tecnolog\xEDa personalizada";
  return renderTemplate`${maybeRenderHead()}<section> <div class="max-w-6xl flex mx-auto px-6 md:px-12"> ${renderComponent($$result, "ImageTextBlock", $$ImageTextBlock, { "title": title, "image": image, "text": text, "ariaLabel": ariaLabel })} </div> </section>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/organisms/missionSection.astro", void 0);

const $$HistorySection = createComponent(($$result, $$props, $$slots) => {
  const title = "Nuestra historia";
  const image = "/images/about/historia.webp";
  const text = "PrometeOnDev nace de la iniciativa de seis estudiantes de Ingenier\xEDa de Sistemas que decidieron transformar su pasi\xF3n por la tecnolog\xEDa en soluciones reales. Nos enfocamos en el desarrollo de aplicaciones web y m\xF3viles, sistemas de gesti\xF3n y plataformas personalizadas que impulsan la transformaci\xF3n digital de empresas, startups y emprendedores. Combinamos innovaci\xF3n, eficiencia y acompa\xF1amiento cercano para crear productos funcionales y escalables.F";
  const ariaLabel = "Representaci\xF3n del origen de PrometeonDev por estudiantes de Ingenier\xEDa de Sistemas";
  return renderTemplate`${maybeRenderHead()}<section class="max-w-6xl flex mx-auto px-6 md:px-12"> ${renderComponent($$result, "ImageTextBlock", $$ImageTextBlock, { "title": title, "image": image, "text": text, "reverse": true, "ariaLabel": ariaLabel })} </section>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/organisms/historySection.astro", void 0);

const $$Astro$2 = createAstro("https://prometeondev.com");
const $$StatValue = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StatValue;
  const { value } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="stat-value text-[140px] md:text-[180px] font-bold text-dark/25 dark:text-dark-dark/30 leading-none"${addAttribute(value, "data-target")}>
0
</span>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/atoms/statValue.astro", void 0);

const $$Astro$1 = createAstro("https://prometeondev.com");
const $$StatLabel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StatLabel;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="text-dark dark:text-dark-dark text-xl md:text-2xl font-semibold absolute top-1/2 -translate-y-1/2">${label}</span>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/atoms/statLabel.astro", void 0);

const $$Astro = createAstro("https://prometeondev.com");
const $$StatCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StatCard;
  const { value, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative flex flex-col items-center"> ${renderComponent($$result, "StatValue", $$StatValue, { "value": value })} ${renderComponent($$result, "StatLabel", $$StatLabel, { "label": label })} </div> ${renderScript($$result, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/molecules/statCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/molecules/statCard.astro", void 0);

const $$StatsSection = createComponent(($$result, $$props, $$slots) => {
  const stats = [
    { value: "26", label: "Proyectos" },
    { value: "2", label: "A\xF1os" },
    { value: "10", label: "Clientes" },
    { value: "6", label: "En desarrollo" }
  ];
  return renderTemplate`${maybeRenderHead()}<section> <div class="max-w-10/12 mx-auto w-full px-6 grid grid-cols-2 md:flex items-center justify-center md:justify-between gap-4 text-center"> ${stats.map((stat, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StatCard", $$StatCard, { "value": stat.value, "label": stat.label })} ${index < stats.length - 1 && renderTemplate`<div class="hidden md:block h-16 w-px bg-dark dark:bg-dark-dark"></div>`}` })}`)} </div> </section>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/organisms/statsSection.astro", void 0);

const $$WhoWeAreSection = createComponent(($$result, $$props, $$slots) => {
  const title = "\xBFQui\xE9nes somos?";
  const text = "PrometeonDev es una empresa enfocada en el desarrollo de soluciones tecnol\xF3gicas a la medida, creada para apoyar a empresas, startups y emprendedores en su transformaci\xF3n digital. Nos especializamos en el dise\xF1o y desarrollo de aplicaciones web y m\xF3viles, sistemas de gesti\xF3n empresarial y plataformas personalizadas que se adaptan a las necesidades de cada cliente. Nuestro enfoque combina innovaci\xF3n, eficiencia y acompa\xF1amiento cercano, permitiendo entregar productos escalables, funcionales y alineados con los objetivos de negocio. Creemos en el poder de la tecnolog\xEDa como motor de crecimiento y transformaci\xF3n.";
  const image = "/images/about/somos.webp";
  const ariaLabel = "Equipo de PrometeonDev trabajando";
  return renderTemplate`${maybeRenderHead()}<section class="lg:max-w-6xl flex mx-auto px-6 md:px-12"> ${renderComponent($$result, "ImageTextBlock", $$ImageTextBlock, { "title": title, "text": text, "image": image, "ariaLabel": ariaLabel })} </section>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/about/organisms/whoWeAreSection.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const title = "Qui\xE9nes somos en PrometeonDev - Historia, misi\xF3n y equipo";
  const description = "Descubre qui\xE9nes somos en PrometeonDev: conoce nuestra historia, misi\xF3n, valores y al equipo que impulsa soluciones digitales a tu medida.";
  const keywords = "qui\xE9nes somos, equipo de desarrollo, historia PrometeonDev, misi\xF3n empresarial, valores corporativos, empresa de software, soluciones digitales, desarrollo web Colombia, Prometeon, PrometeonDev, PrometeonDev Colombia";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "keywords": keywords }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitleUp", $$SectionTitleUp, {})} ${renderComponent($$result2, "WhoWeAreSection", $$WhoWeAreSection, {})} ${renderComponent($$result2, "StatsSection", $$StatsSection, {})} ${renderComponent($$result2, "HistorySection", $$HistorySection, {})} ${renderComponent($$result2, "ValuesCarousel", $$ValuesCarousel, {})} ${renderComponent($$result2, "MissionSection", $$MissionSection, {})} ${renderComponent($$result2, "TeamPreviewSection", $$TeamPreviewSection, {})} ` })}`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/pages/about.astro", void 0);

const $$file = "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
