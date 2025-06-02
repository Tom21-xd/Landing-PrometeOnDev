import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent, l as renderScript } from '../chunks/astro/server_DCZrtpUB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BwFhCVBD.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$e = createAstro("https://prometeondev.com");
const $$ServiceHeroButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ServiceHeroButton;
  const {
    href = "#services-section",
    text = "Ver m\xE1s",
    title
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(title, "title")}${addAttribute(title, "aria-label")} class="inline-block bg-primary dark:bg-dark-primary text-white text-sm font-semibold px-8 py-3 rounded-full shadow-md transition-transform transform hover:bg-primary-dark dark:hover:bg-dark-primary-dark"> ${text} </a>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/atoms/serviceHeroButton.astro", void 0);

const $$Astro$d = createAstro("https://prometeondev.com");
const $$ServiceHeroText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ServiceHeroText;
  const { title, text, hrefButton, titleButton } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-center md:text-left space-y-4 lg:space-y-6"> <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-dark-primary dark:text-dark-dark prose"> ${title} </h1> <p class="md:text-lg text-dark dark:text-dark-dark-darker max-w-md md:max-w-none mx-auto md:mx-0 prose"> ${text} </p> <div class="pt-3 md:pt-4 lg:pt-6"> ${renderComponent($$result, "ServiceHeroButton", $$ServiceHeroButton, { "href": hrefButton, "title": titleButton, "text": "Explora nuestros servicios" })} </div> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/molecules/serviceHeroText.astro", void 0);

const $$Astro$c = createAstro("https://prometeondev.com");
const $$ServiceHeroImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ServiceHeroImage;
  const { src, alt, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center md:justify-center md:pb-6 bg-transparent mb-10 md:mb-0 w-full md:w-2/5 cursor-crosshair"> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(title, "title")} class="w-80 h-auto rounded-xl rotate-4 transition-transform duration-500 hover:scale-105 hover:-rotate-1 shadow-lg shadow-dark dark:shadow-dark-background-light"> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/molecules/serviceHeroImage.astro", void 0);

const $$ServiceHeroSection = createComponent(($$result, $$props, $$slots) => {
  const titleHero = "Creamos soluciones digitales que transforman tu negocio";
  const textHero = "Impulsamos tu transformaci\xF3n digital mediante herramientas inteligentes, desarrollo de software a medida y un soporte t\xE9cnico constante, para que tu negocio crezca con innovaci\xF3n y eficiencia.";
  const imageHero = "/images/services/prometeon-services.png";
  const altImage = "Ilustraci\xF3n de servicio";
  const titleImage = "Soluciones digitales para tu negocio con PrometeonDev";
  const hrefButton = "#services-section";
  const titleButton = "Ir a la secci\xF3n de servicios";
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen flex flex-col gap-10 md:gap-6 md:flex-row items-center justify-between px-6 md:px-16 lg:px-20 pt-20 lg:pt-28 pb-10 md:pb-14 bg-gradient-to-br from-blue-200 dark:from-dark-background-light via-50% to-30%"> <div class="w-full md:w-3/5"> ${renderComponent($$result, "ServiceHeroText", $$ServiceHeroText, { "title": titleHero, "text": textHero, "hrefButton": hrefButton, "titleButton": titleButton })} </div> ${renderComponent($$result, "ServiceHeroImage", $$ServiceHeroImage, { "src": imageHero, "alt": altImage, "title": titleImage })} </section>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/organims/serviceHeroSection.astro", void 0);

const $$Astro$b = createAstro("https://prometeondev.com");
const $$SectionHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SectionHeading;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-center max-w-2xl mx-auto mb-14"> <h2 class="text-3xl md:text-4xl font-bold text-dark-primary dark:text-dark-dark mb-4"> ${title} </h2> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/molecules/sectionHeading.astro", void 0);

const $$Astro$a = createAstro("https://prometeondev.com");
const $$ServiceImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ServiceImage;
  const { src, alt, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-48 bg-primary-light dark:bg-dark-primary-light overflow-hidden rounded-t-xl flex items-center justify-center"> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(title, "title")} class="object-cover w-full h-full group-hover:grayscale-25 transition-transform duration-1000 ease-in-out group-hover:scale-105"> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/atoms/serviceImage.astro", void 0);

const $$Astro$9 = createAstro("https://prometeondev.com");
const $$ServiceTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ServiceTitle;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3 class="text-xl font-semibold mb-3 text-primary dark:text-background"> ${title} </h3>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/atoms/serviceTitle.astro", void 0);

const $$Astro$8 = createAstro("https://prometeondev.com");
const $$ServiceDescription = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ServiceDescription;
  const { description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="text-sm text-dark-light dark:text-background-dark mb-6"> ${description} </p>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/atoms/serviceDescription.astro", void 0);

const $$Astro$7 = createAstro("https://prometeondev.com");
const $$ServiceButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ServiceButton;
  const { url, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute(`Ver m\xE1s sobre ${title}`, "title")}${addAttribute(`Ver m\xE1s sobre ${title}`, "aria-label")} class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-background dark:bg-dark-primary dark:text-background hover:bg-primary-dark dark:hover:bg-dark-primary-dark transition" aria-label="Ver más"> <i class="fas fa-arrow-right text-sm"></i> </a>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/atoms/serviceButton.astro", void 0);

const $$Astro$6 = createAstro("https://prometeondev.com");
const $$ServiceContentCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ServiceContentCard;
  const { id, title, description, url = "#" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-6 flex flex-col items-center text-center"> ${renderComponent($$result, "ServiceTitle", $$ServiceTitle, { "title": title })} ${renderComponent($$result, "ServiceDescription", $$ServiceDescription, { "description": description })} ${renderComponent($$result, "ServiceButton", $$ServiceButton, { "url": id, "title": title })} </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/molecules/serviceContentCard.astro", void 0);

const $$Astro$5 = createAstro("https://prometeondev.com");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { id, icon, title, description, url = "#", titleImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group flex flex-col items-center bg-gray-50 dark:bg-dark-background-light rounded-xl shadow-gray-700 dark:shadow-gray-500 shadow-md transform transition duration-300 hover:-translate-y-3 max-w-xl min-h-96 w-full mx-auto group cursor-pointer"> ${renderComponent($$result, "ServiceImage", $$ServiceImage, { "src": icon, "alt": title, "title": titleImage })} ${renderComponent($$result, "ServiceContentCard", $$ServiceContentCard, { "id": id, "title": title, "description": description, "url": url })} </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/organims/serviceCard.astro", void 0);

const $$ServiceOverView = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      id: "section-soluciones-digitales",
      title: "Soluciones Digitales",
      imageSrc: "/images/services/soluciones-digitales.webp",
      url: "",
      description: "Desarrollamos plataformas web y m\xF3viles a medida para digitalizar procesos, mejorar la experiencia del usuario y optimizar el rendimiento de tu negocio."
    },
    {
      id: "section-ia-automatizacion",
      title: "IA y Automatizaci\xF3n",
      imageSrc: "/images/services/ia.webp",
      url: "",
      description: "Implementamos inteligencia artificial, bots y automatizaci\xF3n de tareas repetitivas para que tu empresa sea m\xE1s eficiente, precisa e innovadora."
    },
    {
      id: "section-soporte-escalabilidad",
      title: "Soporte y Escalabilidad",
      imageSrc: "/images/services/soporte.webp",
      url: "",
      description: "Te acompa\xF1amos en cada etapa del crecimiento de tu sistema, ofreciendo mantenimiento t\xE9cnico, asesor\xEDa continua y soluciones escalables seg\xFAn tus necesidades."
    }
  ];
  const titleSection = "Nuestros Servicios";
  return renderTemplate`${maybeRenderHead()}<section id="services-section" class="p-6 md:p-10 lg:p-20 mx-auto"> ${renderComponent($$result, "SectionHeading", $$SectionHeading, { "title": titleSection })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> ${services.map((service) => renderTemplate`${renderComponent($$result, "ServiceCard", $$ServiceCard, { "id": service.id, "icon": service.imageSrc, "title": service.title, "description": service.description, "url": service.url, "titleImage": `Ilustraci\xF3n del servicio ${service.title}` })}`)} </div> </section>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/organims/serviceOverView.astro", void 0);

const $$Astro$4 = createAstro("https://prometeondev.com");
const $$ImageDetailService = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ImageDetailService;
  const { src, alt, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative w-full h-80 overflow-hidden rounded-lg shadow-md dark:shadow-lg group cursor-crosshair"> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(title, "title")} class="block w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/atoms/imageDetailService.astro", void 0);

const $$Astro$3 = createAstro("https://prometeondev.com");
const $$TitleDetailService = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TitleDetailService;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="text-xl md:text-2xl text-center font-semibold text-primary dark:text-dark-background"> ${title} </h2>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/atoms/titleDetailService.astro", void 0);

const $$Astro$2 = createAstro("https://prometeondev.com");
const $$DetailServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$DetailServiceCard;
  const { imageSrc, title, alt, titleImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-50 dark:bg-dark-dark rounded-lg shadow-md shadow-gray-700 dark:shadow-none px-5 pt-5 pb-3 space-y-3 transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"> ${renderComponent($$result, "ImageDetailService", $$ImageDetailService, { "src": imageSrc, "alt": alt, "title": titleImage })} ${renderComponent($$result, "TitleDetailService", $$TitleDetailService, { "title": title })} </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/molecules/detailServiceCard.astro", void 0);

const $$Astro$1 = createAstro("https://prometeondev.com");
const $$InfoCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InfoCard;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-50 dark:bg-dark-dark w-full rounded-lg shadow-md shadow-gray-700 dark:shadow-none p-6 transform transition duration-500 opacity-0"> <h3 class="text-xl font-semibold mb-3 text-primary dark:text-dark-background"> ${title} </h3> <p class="text-dark-light dark:text-dark-background-light"> ${description} </p> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/atoms/infoCard.astro", void 0);

const $$Astro = createAstro("https://prometeondev.com");
const $$DetailService = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DetailService;
  const {
    id,
    imageSrc,
    title,
    alt,
    infoCards = [],
    reversed = false
  } = Astro2.props;
  const titleImage = `Ilustraci\xF3n representativa del servicio ${title}`;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="py-10 md:py-12 lg::py-20 px-6"> <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"> <div${addAttribute(`w-full max-w-[500px] mx-auto md:sticky md:top-32 md:self-start ${reversed ? "md:order-2" : "md:order-1"}`, "class")}> ${renderComponent($$result, "DetailServiceCard", $$DetailServiceCard, { "imageSrc": imageSrc, "title": title, "alt": alt, "titleImage": titleImage })} </div> <div${addAttribute(`space-y-6 md:space-y-16 ${reversed ? "md:order-1 lg:pl-16" : "md:order-2 lg:pr-16"}`, "class")}> ${infoCards.map((card, index) => renderTemplate`<div class="detail-service-reveal-card"${addAttribute(index, "data-index")}> ${renderComponent($$result, "InfoCard", $$InfoCard, { "title": card.title, "description": card.description })} </div>`)} </div> </div> </section> ${renderScript($$result, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/organims/detailService.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/services/organims/detailService.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      id: "section-soluciones-digitales",
      imageSrc: "/images/services/soluciones-digitales.webp",
      title: "Soluciones Digitales",
      alt: "Ilustraci\xF3n de soluciones digitales",
      infoCards: [
        {
          title: "Desarrollo Web y M\xF3vil",
          description: "Creamos aplicaciones web y m\xF3viles modernas, r\xE1pidas y adaptables, utilizando tecnolog\xEDas actuales que garantizan escalabilidad y rendimiento."
        },
        {
          title: "Software a la Medida",
          description: "Dise\xF1amos soluciones personalizadas que se ajustan a las necesidades espec\xEDficas de tu negocio, asegurando eficiencia y precisi\xF3n."
        },
        {
          title: "Dise\xF1o UX/UI Enfocado en el Usuario",
          description: "Construimos interfaces atractivas e intuitivas que mejoran la experiencia del usuario y aumentan la conversi\xF3n."
        }
      ]
    },
    {
      id: "section-ia-automatizacion",
      imageSrc: "/images/services/ia.webp",
      title: "IA y Automatizaci\xF3n",
      alt: "Ilustraci\xF3n de inteligencia artificial",
      infoCards: [
        {
          title: "Modelos de IA Personalizados",
          description: "Desarrollamos modelos de machine learning que se ajustan a las necesidades de tu negocio y mejoran tu eficiencia."
        },
        {
          title: "Automatizaci\xF3n de Procesos",
          description: "Reducimos tareas repetitivas mediante bots, scripts inteligentes y flujos automatizados que ahorran tiempo y dinero."
        },
        {
          title: "Chatbots y Asistentes Virtuales",
          description: "Creamos asistentes conversacionales para mejorar la atenci\xF3n al cliente y la interacci\xF3n en tus plataformas digitales."
        }
      ]
    },
    {
      id: "section-soporte-escalabilidad",
      imageSrc: "/images/services/soporte.webp",
      title: "Soporte y Escalabilidad",
      alt: "Ilustraci\xF3n de soporte t\xE9cnico",
      infoCards: [
        {
          title: "Mantenimiento Continuo",
          description: "Ofrecemos soporte t\xE9cnico para asegurar el correcto funcionamiento de tus sistemas digitales en todo momento."
        },
        {
          title: "Escalabilidad Tecnol\xF3gica",
          description: "Preparamos tus soluciones para crecer sin l\xEDmites, adapt\xE1ndose a nuevos usuarios, datos o funcionalidades."
        },
        {
          title: "Acompa\xF1amiento Estrat\xE9gico",
          description: "Estamos contigo en cada etapa del proceso: desde la ideaci\xF3n hasta el crecimiento sostenido del proyecto."
        }
      ]
    }
  ];
  const title = "Nuestros Servicios - PrometeonDev";
  const description = "Descubre c\xF3mo PrometeonDev puede ayudarte a impulsar tu proyecto con desarrollo web, apps m\xF3viles, inteligencia artificial, automatizaci\xF3n y software a medida.";
  const keywords = "servicios de desarrollo web, desarrollo de apps m\xF3viles, software a medida, inteligencia artificial empresarial, automatizaci\xF3n de procesos, mantenimiento de software, escalabilidad tecnol\xF3gica, UX/UI, PrometeonDev, Prometeon";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "keywords": keywords }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ServiceHeroSection", $$ServiceHeroSection, {})} ${renderComponent($$result2, "ServiceOverView", $$ServiceOverView, {})} ${services.map((service, index) => renderTemplate`${renderComponent($$result2, "DetailService", $$DetailService, { "id": service.id, "imageSrc": service.imageSrc, "title": service.title, "alt": service.alt, "infoCards": service.infoCards, "reversed": index % 2 != 0 })}`)}` })}`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/pages/services.astro", void 0);

const $$file = "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
