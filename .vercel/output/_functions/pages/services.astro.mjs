import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, k as renderScript, r as renderTemplate, d as renderComponent, l as defineStyleVars } from '../chunks/astro/server_CDbgqzxC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B_G6hxh1.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro();
const $$ServiveTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ServiveTitle;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full h-screen overflow-hidden" data-astro-cid-roarl7uk> <video src="/videos/services/services-hero-section.webm" autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover" data-astro-cid-roarl7uk></video> <div class="absolute inset-0 overlay-bg" data-astro-cid-roarl7uk></div> <div class="relative z-10 flex flex-col items-center justify-center h-full px-4" data-astro-cid-roarl7uk> <div class="text-container" data-astro-cid-roarl7uk> <h2 id="typewriter-title" class="typewriter-title
             border-b-8"${addAttribute(title, "data-text")} data-astro-cid-roarl7uk> ${title} </h2> </div> <div id="ver-mas-container" class="mt-16 text-accent dark:text-accent-dark text-2xl font-medium flex flex-col items-center opacity-0" data-astro-cid-roarl7uk> <span data-astro-cid-roarl7uk>Ver más</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mt-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-roarl7uk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-roarl7uk></path> </svg> </div> </div> <div class="absolute bottom-0 left-0 w-full h-32
           fade-gradient pointer-events-none" data-astro-cid-roarl7uk></div> </section>  ${renderScript($$result, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/services/atoms/serviveTitle.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/services/atoms/serviveTitle.astro", void 0);

const $$Astro$4 = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { icon, title, description, url = "#" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="service-card-container group flex flex-col items-center" data-astro-cid-7anfon6z> <div class="w-full flex justify-center items-center rounded-t-lg image-container" data-astro-cid-7anfon6z> <img${addAttribute(icon, "src")}${addAttribute(title, "alt")} class="w-full object-cover group-hover:animate-pulse transition-all duration-300" data-astro-cid-7anfon6z> </div> <div class="p-6 flex flex-col items-center w-full" data-astro-cid-7anfon6z> <h3 class="text-xl font-semibold mb-3 text-center card-title" data-astro-cid-7anfon6z>${title}</h3> <p class="card-description text-center mb-6 text-sm" data-astro-cid-7anfon6z>${description}</p> <a${addAttribute(url, "href")} class="inline-flex items-center justify-center w-10 h-10 rounded-full card-button" aria-label="Ver más" data-astro-cid-7anfon6z> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-7anfon6z> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-7anfon6z></path> </svg> </a> </div> </div>  ${renderScript($$result, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/services/molecules/serviceCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/services/molecules/serviceCard.astro", void 0);

const $$ServiceOverView = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="services-section" class="py-20 px-6"> <div class="max-w-6xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "icon": "/images/services/disenio.webp", "title": "Dise\xF1o Web", "description": "Creamos experiencias unicas para el usuario", "url": "/servicios/disenio-web" })} ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "icon": "/images/services/desarrollo.webp", "title": "Desarrollo", "description": "Desarrollamos aplicaciones web y moviles", "url": "/servicios/desarrollo" })} ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "icon": "/images/services/inteligencia.webp", "title": "Inteligencia de negocio", "description": "Se desarrollan dashboards interactivos", "url": "/servicios/inteligencia-negocio" })} </div> </div> </section> ${renderScript($$result, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/services/organims/serviceOverView.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/services/organims/serviceOverView.astro", void 0);

const $$Astro$3 = createAstro();
const $$VidDetailService = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$VidDetailService;
  const {
    src,
    title,
    alt = "Imagen de servicio",
    className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`image-detail-service-container ${className}`, "class")} data-astro-cid-u3e6kwab> <img${addAttribute(src, "src")}${addAttribute(alt || title, "alt")} class="service-image" data-astro-cid-u3e6kwab> ${title && renderTemplate`<p class="sr-only" data-astro-cid-u3e6kwab>${title}</p>`} </div> `;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/services/atoms/vidDetailService.astro", void 0);

const $$Astro$2 = createAstro();
const $$TitleDetailService = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TitleDetailService;
  const { title, size = "medium", className = "" } = Astro2.props;
  let titleClass = "font-semibold";
  switch (size) {
    case "small":
      titleClass += " text-lg";
      break;
    case "medium":
      titleClass += " text-xl";
      break;
    case "large":
      titleClass += " text-2xl";
      break;
  }
  return renderTemplate`${maybeRenderHead()}<h3${addAttribute(`${titleClass} ${className} title-detail`, "class")} data-astro-cid-ggph26jh> ${title} </h3> `;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/services/atoms/titleDetailService.astro", void 0);

const $$Astro$1 = createAstro();
const $$VideoDetailService = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$VideoDetailService;
  const { imageSrc, title, alt, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`bg-white rounded-lg shadow-md p-5 video-detail-service ${className}`, "class")} data-astro-cid-twbphrc4> ${renderComponent($$result, "VidDetailService", $$VidDetailService, { "src": imageSrc, "title": title, "alt": alt || `Imagen de ${title}`, "className": "mb-4", "data-astro-cid-twbphrc4": true })} ${renderComponent($$result, "TitleDetailService", $$TitleDetailService, { "title": title, "size": "large", "className": "text-center", "data-astro-cid-twbphrc4": true })} </div> `;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/services/molecules/videoDetailService.astro", void 0);

const $$Astro = createAstro();
const $$DetailService = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DetailService;
  const {
    imageSrc,
    title,
    alt,
    infoCards = [],
    reversed = false
  } = Astro2.props;
  const infoCardAnimationClass = reversed ? "info-detail-service-reversed" : "info-detail-service";
  const transformDirection = reversed ? "translateX(-20px)" : "translateX(20px)";
  const $$definedVars = defineStyleVars([{ transformDirection }]);
  return renderTemplate`${maybeRenderHead()}<section id="detail-service-section" class="py-20 px-6" data-astro-cid-yk4zmrzm${addAttribute($$definedVars, "style")}> <div class="max-w-7xl mx-auto" data-astro-cid-yk4zmrzm${addAttribute($$definedVars, "style")}> <div${addAttribute(`grid grid-cols-1 md:grid-cols-2 gap-10 ${reversed ? "md:flex md:flex-row-reverse" : ""}`, "class")} data-astro-cid-yk4zmrzm${addAttribute($$definedVars, "style")}> <div class="sticky top-32 self-start same-size-image-container" data-astro-cid-yk4zmrzm${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "VideoDetailService", $$VideoDetailService, { "imageSrc": imageSrc, "title": title, "alt": alt, "data-astro-cid-yk4zmrzm": true })} </div> <div class="space-y-16 mx-6" data-astro-cid-yk4zmrzm${addAttribute($$definedVars, "style")}> ${infoCards.length > 0 ? infoCards.map((card, index) => renderTemplate`<div class="detail-service-reveal-card"${addAttribute(index, "data-index")} data-astro-cid-yk4zmrzm${addAttribute($$definedVars, "style")}> <div${addAttribute(`bg-white rounded-lg shadow-md p-6 ${infoCardAnimationClass} opacity-0`, "class")} data-astro-cid-yk4zmrzm${addAttribute($$definedVars, "style")}> <h3 class="text-xl font-semibold mb-3 text-gray-900" data-astro-cid-yk4zmrzm${addAttribute($$definedVars, "style")}> ${card.title} </h3> <p class="text-gray-600" data-astro-cid-yk4zmrzm${addAttribute($$definedVars, "style")}>${card.description}</p> </div> </div>`) : renderTemplate`<div class="detail-service-reveal-card" data-astro-cid-yk4zmrzm${addAttribute($$definedVars, "style")}> <div${addAttribute(`bg-white rounded-lg shadow-md p-6 ${infoCardAnimationClass} opacity-0`, "class")} data-astro-cid-yk4zmrzm${addAttribute($$definedVars, "style")}> <h3 class="text-xl font-semibold mb-3 text-gray-900" data-astro-cid-yk4zmrzm${addAttribute($$definedVars, "style")}>
Información del servicio
</h3> <p class="text-gray-600" data-astro-cid-yk4zmrzm${addAttribute($$definedVars, "style")}>
Detalles próximamente. Esta tarjeta aparece como ejemplo
                  cuando no se proporcionan tarjetas de información.
</p> </div> </div>`} </div> </div> </div> </section>  ${renderScript($$result, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/services/organims/detailService.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/services/organims/detailService.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const servicioDiseno = {
    imageSrc: "/images/services/design.webp",
    title: "Dise\xF1o Web",
    alt: "Ilustraci\xF3n de dise\xF1o web",
    infoCards: [
      {
        title: "Dise\xF1o Responsivo",
        description: "Creamos sitios web que se adaptan perfectamente a todos los dispositivos, desde m\xF3viles hasta pantallas de escritorio."
      },
      {
        title: "UX/UI Avanzado",
        description: "Implementamos las \xFAltimas tendencias en experiencia de usuario e interfaz para hacer que tu sitio no solo se vea bien, sino que tambi\xE9n sea intuitivo."
      },
      {
        title: "Performance Optimizado",
        description: "Optimizamos cada aspecto de tu sitio web para garantizar tiempos de carga r\xE1pidos, lo que mejora el SEO y reduce la tasa de rebote."
      }
    ]
  };
  const servicioDesarrollo = {
    imageSrc: "/images/services/software.webp",
    title: "Desarrollo de Aplicaciones",
    alt: "Ilustraci\xF3n de desarrollo de aplicaciones",
    infoCards: [
      {
        title: "Aplicaciones Web",
        description: "Desarrollamos aplicaciones web modernas y escalables utilizando las \xFAltimas tecnolog\xEDas y frameworks para maximizar el rendimiento."
      },
      {
        title: "Soluciones a Medida",
        description: "Creamos soluciones personalizadas que se adaptan perfectamente a tus necesidades espec\xEDficas y a los requerimientos de tu negocio."
      },
      {
        title: "Tecnolog\xEDa de Punta",
        description: "Utilizamos las tecnolog\xEDas m\xE1s avanzadas para garantizar que tu aplicaci\xF3n sea r\xE1pida, segura y f\xE1cil de mantener a largo plazo."
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nuestros Servicios - PrometeonDev", "description": "Descubre los servicios que ofrecemos para llevar tu proyecto al siguiente nivel." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ServiveTitle", $$ServiveTitle, { "title": "Nuestros Servicios" })} ${renderComponent($$result2, "ServiceOverView", $$ServiceOverView, {})} ${renderComponent($$result2, "DetailService", $$DetailService, { "imageSrc": servicioDiseno.imageSrc, "title": servicioDiseno.title, "alt": servicioDiseno.alt, "infoCards": servicioDiseno.infoCards })} ${renderComponent($$result2, "DetailService", $$DetailService, { "imageSrc": servicioDesarrollo.imageSrc, "title": servicioDesarrollo.title, "alt": servicioDesarrollo.alt, "infoCards": servicioDesarrollo.infoCards, "reversed": true })} ` })}`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/pages/services.astro", void 0);

const $$file = "D:/PrometeonDev/Landing-PrometeOnDev/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
