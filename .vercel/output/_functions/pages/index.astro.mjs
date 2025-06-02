import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent, l as renderScript } from '../chunks/astro/server_DCZrtpUB.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getWhatsAppLink, $ as $$Layout } from '../chunks/Layout_BgXMIiwx.mjs';
import { $ as $$ViewMoreButton } from '../chunks/viewMoreButton_ntMLTq47.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$f = createAstro("https://prometeondev.com");
const $$VideoThumbnail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$VideoThumbnail;
  const { src, alt, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(title, "title")} alt="Video Thumbnail" class="rounded-xl border-2 w-64 h-40 border-primary-light transition-all duration-300 ease-in-out transform hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] hover:shadow-primary-light">`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/atoms/videoThumbnail.astro", void 0);

const $$PlayIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="play-icon" class="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ease-in-out group-hover:scale-110"> <i class="fa-solid fa-play text-primary text-5xl"></i> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/atoms/playIcon.astro", void 0);

const $$Astro$e = createAstro("https://prometeondev.com");
const $$VideoButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$VideoButton;
  const { src, alt, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="video-play" class="relative group cursor-pointer"> ${renderComponent($$result, "VideoThumbnail", $$VideoThumbnail, { "src": src, "alt": alt, "title": title })} ${renderComponent($$result, "PlayIcon", $$PlayIcon, {})} </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/molecules/videoButton.astro", void 0);

const $$Astro$d = createAstro("https://prometeondev.com");
const $$LogoTextImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$LogoTextImage;
  const {
    src = "/global/logo-blanco-texto.webp",
    alt = "PrometeonDev - Software Development",
    title = alt,
    className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(title, "title")} loading="lazy"${addAttribute(`w-full md:max-w-[60%] xl:max-w-[50%] h-auto ${className}`, "class")}>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/atoms/logoTextImage.astro", void 0);

const $$Astro$c = createAstro("https://prometeondev.com");
const $$CTAButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$CTAButton;
  const { text, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer" class="flex text-lg items-center bg-gradient-to-tr from-primary-light via-primary to-primary-dark text-background dark:text-dark-background px-16 sm:px-12 md:px-16 py-5 rounded-xl font-semibold transition-all duration-300 ease-in-out transform hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] hover:shadow-primary-light"> ${text} </a>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/atoms/CTAButton.astro", void 0);

const $$HeroContent = createComponent(($$result, $$props, $$slots) => {
  const subtitle = "Impulsamos tu negocio con soluciones digitales.";
  const src = "https://img.youtube.com/vi/X5200TdGRxg/maxresdefault.jpg";
  const backgroundVideo = "/videos/home/contact-section.webm";
  const logoTextUrl = "/global/logo-blanco-texto.webp";
  const titleLogo = "Logo PrometeonDev - Desarrollo de Software a Medida";
  const textCtaButton = "Cotiza tu proyecto";
  const hrefCtaButton = getWhatsAppLink();
  const altThumbnail = "Miniatura del video promocional de PrometeonDev";
  const titleThumbnail = "Reproducir video institucional de PrometeonDev";
  return renderTemplate`${maybeRenderHead()}<div class="relative flex flex-col w-full min-h-full p-8 sm:p-8 rounded-2xl border-2 overflow-hidden border-none shadow-md dark:shadow-gray-400 shadow-gray-700"> <video${addAttribute(backgroundVideo, "src")} autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover z-10"></video> <div class="relative z-10 flex flex-col items-center md:items-start gap-4 my-16"> ${renderComponent($$result, "LogoTextImage", $$LogoTextImage, { "src": logoTextUrl, "title": titleLogo })} <p class="text-lg lg:text-2xl text-white w-full md:w-1/2 text-center"> ${subtitle} </p> </div> <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 md:left-10 md:right-10 z-20 flex flex-col items-center sm:items-end gap-10 sm:flex-row sm:justify-between"> ${renderComponent($$result, "VideoButton", $$VideoButton, { "src": src, "alt": altThumbnail, "title": titleThumbnail })} ${renderComponent($$result, "CtaButton", $$CTAButton, { "text": textCtaButton, "href": hrefCtaButton })} </div> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/molecules/heroContent.astro", void 0);

const $$Astro$b = createAstro("https://prometeondev.com");
const $$CloseModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$CloseModal;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(id, "id")} class="text-white text-2xl font-bold bg-black bg-opacity-70 rounded-lg w-12 h-12 flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 cursor-pointer"> <i class="fa-solid fa-xmark"></i> </button>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/atoms/closeModal.astro", void 0);

const $$Astro$a = createAstro("https://prometeondev.com");
const $$VideoModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$VideoModal;
  const { videoSrc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="video-modal" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 opacity-0 pointer-events-none transition-opacity duration-300 min-h-full"> <div class="relative w-full h-full bg-black bg-opacity-90 rounded-none md:rounded-2xl flex items-center justify-center p-6"> <div class="absolute top-8 right-8 z-50"> ${renderComponent($$result, "CloseModal", $$CloseModal, { "id": "close-modal" })} </div> <iframe${addAttribute(videoSrc, "src")} allow="autoplay; encrypted-media" class="w-full h-full min-w-full rounded-none md:rounded-2xl"></iframe> </div> </div> ${renderScript($$result, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/molecules/videoModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/molecules/videoModal.astro", void 0);

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative flex w-full min-h-screen overflow-hidden p-4"> ${renderComponent($$result, "HeroContent", $$HeroContent, {})} </section> ${renderComponent($$result, "VideoModal", $$VideoModal, { "videoSrc": "https://www.youtube.com/embed/X5200TdGRxg" })}`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/organisms/heroSection.astro", void 0);

const $$Astro$9 = createAstro("https://prometeondev.com");
const $$ImageCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ImageCard;
  const { title, imageSrc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group relative overflow-hidden rounded-lg shadow-sm shadow-gray-600 dark:shadow-none w-full aspect-[4/3]"> <img${addAttribute(imageSrc, "src")}${addAttribute(title, "alt")}${addAttribute(title, "title")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"> <div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/atoms/imageCard.astro", void 0);

const $$Astro$8 = createAstro("https://prometeondev.com");
const $$CardTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CardTitle;
  const { title, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative group text-primary dark:text-white flex items-center overflow-visible"> <span class="font-primary font-semibold text-xl transition-all duration-300 whitespace-nowrap group-hover:translate-x-8"> ${title} </span> <span class="absolute left-0 opacity-0 font-primary font-semibold text-xl transition-all duration-300 whitespace-nowrap group-hover:opacity-100 group-hover:translate-x-0 translate-x-[-100%]"> ${index < 10 ? `0${index}.` : `${index}.`} </span> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/atoms/cardTitle.astro", void 0);

const $$HoverLine = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 dark:bg-gray-500 overflow-hidden transition-all duration-300 ease-out"> <span class="block w-0 h-full bg-primary transition-all duration-300 ease-out group-hover:w-full"></span> </span>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/atoms/hoverLine.astro", void 0);

const $$Astro$7 = createAstro("https://prometeondev.com");
const $$ArrowButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ArrowButton;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="flex items-center gap-2 group justify-center w-10 h-10 rounded-full border-2 border-gray-900 dark:border-gray-500 group-hover:border-primary transition-all duration-300"> ${label && renderTemplate`<span class="text-lg font-semibold">${label}</span>`} <i class="fa-solid fa-arrow-right text-gray-900 dark:text-gray-500 group-hover:text-primary transition-colors duration-300"></i> </span>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/atoms/arrowButton.astro", void 0);

const $$Astro$6 = createAstro("https://prometeondev.com");
const $$ServicesCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ServicesCard;
  const { url, imageSrc, title, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute(`Ver m\xE1s sobre ${title}`, "title")}${addAttribute(`Ver m\xE1s sobre ${title}`, "aria-label")} class="group relative flex flex-col gap-2 cursor-pointer"> ${renderComponent($$result, "ImageCard", $$ImageCard, { "imageSrc": imageSrc, "title": title })} <div class="flex items-center justify-between pt-2"> ${renderComponent($$result, "CardTitle", $$CardTitle, { "title": title, "index": index })} ${renderComponent($$result, "ArrowButton", $$ArrowButton, {})} </div> <div class="pt-2"> ${renderComponent($$result, "HoverLine", $$HoverLine, {})} </div> </a>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/molecules/servicesCard.astro", void 0);

const $$Astro$5 = createAstro("https://prometeondev.com");
const $$ServicesTextGroup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ServicesTextGroup;
  const { name, title, description, url, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:flex-row gap-4 items-center justify-between w-full text-left"> <h2 class="text-3xl font-semibold text-primary dark:text-white">${name}</h2> <p class="text-gray-900 dark:text-gray-400 md:max-w-2/5 text-justify md:text-left"> ${description} </p> ${renderComponent($$result, "ViewMoreButton", $$ViewMoreButton, { "text": text, "url": url, "title": title })} </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/molecules/servicesTextGroup.astro", void 0);

const $$ServicesSection = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      url: "/services#section-soluciones-digitales",
      title: "Soluciones Digitales",
      imageSrc: "/images/services/soluciones-digitales.webp",
      index: 1
    },
    {
      url: "/services#section-ia-automatizacion",
      title: "IA y Automatizaci\xF3n",
      imageSrc: "/images/services/ia.webp",
      index: 2
    },
    {
      url: "/services#section-soporte-escalabilidad",
      title: "Soporte y Escalabilidad",
      imageSrc: "/images/services/soporte.webp",
      index: 3
    }
  ];
  const sectionTitle = "Nuestros servicios";
  const sectionDescription = "Ofrecemos una amplia gama de servicios para satisfacer tus necesidades. Desde dise\xF1o web hasta desarrollo de software y soluciones de inteligencia artificial.";
  const url = "/services";
  const buttonTitle = "Ver todos los servicios ofrecidos por PrometeonDev";
  return renderTemplate`${maybeRenderHead()}<section class="py-14 px-6 md:px-12 lg:px-20"> <div class="flex flex-col gap-12 items-start"> ${renderComponent($$result, "ServicesTextGroup", $$ServicesTextGroup, { "name": sectionTitle, "description": sectionDescription, "url": url, "title": buttonTitle, "text": "Ver m\xE1s servicios" })} <div class="grid md:grid-rows-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-1"> ${services.map((service) => renderTemplate`${renderComponent($$result, "ServicesCard", $$ServicesCard, { "url": service.url, "title": service.title, "imageSrc": service.imageSrc, "index": service.index })}`)} </div> </div> </section>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/organisms/servicesSection.astro", void 0);

const $$Astro$4 = createAstro("https://prometeondev.com");
const $$TechLogo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TechLogo;
  const { id, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center flex-shrink-0 w-36 sm:px-8 cursor-pointer logo-container"${addAttribute(`--hover-fill: ${color};`, "style")} data-astro-cid-evn57wkl> <svg width="48" height="48" class="logo-icon" data-astro-cid-evn57wkl> <use${addAttribute(`/svg/sprite.svg#${id}`, "href")} data-astro-cid-evn57wkl></use> </svg> </div> `;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/atoms/techLogo.astro", void 0);

const $$Astro$3 = createAstro("https://prometeondev.com");
const $$TechCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TechCarousel;
  const logos = [
    { name: "NestJS", id: "nestjs", color: "#ea2845" },
    { name: "Astro", id: "astro", color: "#ff5d01" },
    { name: "PostgreSQL", id: "postgresql", color: "#336791" },
    { name: "AWS", id: "aws", color: "#ff9900" },
    { name: "Java", id: "java", color: "#e76f00" },
    { name: "Laravel", id: "laravel", color: "#ff2d20" },
    { name: "MongoDB", id: "mongo", color: "#47A248" },
    { name: "MySQL", id: "mysql", color: "#00758F" },
    { name: "Next.js", id: "nextjs", color: "#000000" },
    { name: "Node.js", id: "nodejs", color: "#83CD29" },
    { name: "PHP", id: "php", color: "#787CB5" },
    { name: "Python", id: "python", color: "#FFE873" },
    { name: "React", id: "react", color: "#61DBFB" },
    { name: "WordPress", id: "wordpress", color: "#21759b" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="relative w-full overflow-hidden py-8"> <div class="flex animate-[scroll_10s_linear_infinite] paused w-fit"> ${logos.map((logo) => renderTemplate`${renderComponent($$result, "TechLogo", $$TechLogo, { "id": logo.id, "color": logo.color })}`)} ${logos.map((logo) => renderTemplate`${renderComponent($$result, "TechLogo", $$TechLogo, { "id": logo.id, "color": logo.color })}`)} </div> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/molecules/techCarousel.astro", void 0);

const $$Astro$2 = createAstro("https://prometeondev.com");
const $$ProjectTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectTitle;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative group text-primary dark:text-white flex items-center overflow-visible"> <span class="font-primary font-semibold text-xl transition-all duration-300"> ${title} <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span> </span> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/atoms/projectTitle.astro", void 0);

const $$Astro$1 = createAstro("https://prometeondev.com");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { imageSrc, title, shortDescription, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`Ver m\xE1s sobre ${title}`, "title")}${addAttribute(`Ver m\xE1s sobre ${title}`, "aria-label")} class="group relative flex flex-col gap-2 cursor-pointer"> <div class="transition-all duration-300 hover:scale-105"> ${renderComponent($$result, "ImageCard", $$ImageCard, { "imageSrc": imageSrc, "title": title })} </div> <div class="flex items-start justify-between pt-2 gap-16"> ${renderComponent($$result, "ProjectTitle", $$ProjectTitle, { "title": title })} <p class="text-gray-900 dark:text-gray-500 text-right flex-1 leading-snug max-w-xs line-clamp-2"> ${shortDescription} </p> </div> </a>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/molecules/projectCard.astro", void 0);

const $$PortfolioSection = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "EdifiK",
      imageSrc: "/images/portfolio/edifik/edifik.webp",
      href: "/portfolio/edifik",
      shortDescription: "Gesti\xF3n eficiente de propiedades en l\xEDnea"
    },
    {
      title: "WebSen",
      imageSrc: "/images/portfolio/websen/websen.webp",
      href: "/portfolio/websen",
      shortDescription: "Dise\xF1o web moderno y adaptable"
    },
    {
      title: "HUAZ",
      imageSrc: "/images/portfolio/hvHuaz/hvhuaz.webp",
      href: "/portfolio/hvhuaz",
      shortDescription: "Plataforma para catalogar muestras bot\xE1nicas"
    }
  ];
  const sectionTitle = "Nuestros Desarrollos";
  const sectionDescription = "Conoc\xE9 algunos de nuestros desarrollos m\xE1s destacados. Cada uno de ellos refleja nuestro compromiso con la calidad y la innovaci\xF3n.";
  const url = "/portfolio";
  const buttonTitle = "Ver todos los desarrollos realizados por PrometeonDev";
  return renderTemplate`${maybeRenderHead()}<section class="py-14 px-6 md:px-12 lg:px-20"> <div class="flex flex-col gap-12 items-start"> ${renderComponent($$result, "ServicesTextGroup", $$ServicesTextGroup, { "name": sectionTitle, "description": sectionDescription, "url": url, "title": buttonTitle, "text": "Ver m\xE1s proyectos" })} <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-1"> ${projects.map((project) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": project.title, "imageSrc": project.imageSrc, "shortDescription": project.shortDescription, "href": project.href })}`)} </div> </div> </section>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/organisms/portfolioSection.astro", void 0);

const $$Astro = createAstro("https://prometeondev.com");
const $$ContactText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactText;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="text-lg text-background dark:text-dark-dark"> ${text} </p>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/atoms/contactText.astro", void 0);

const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  const logoTextUrl = "/global/logo-blanco-texto.webp";
  const message = "Se parte de nuestro equipo y construyamos juntos el futuro digital.";
  const textCtaButton = "Cotiza tu proyecto";
  const hrefCtaButton = getWhatsAppLink();
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full min-h-screen overflow-hidden bg-[url('/images/home/contact.webp')] dark:bg-[url('/images/home/contact.webp')] bg-cover bg-center bg-no-repeat z-10"> <div class="absolute inset-0 bg-black/60 z-0"></div> <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center gap-8"> ${renderComponent($$result, "LogoTextImage", $$LogoTextImage, { "src": logoTextUrl })} ${renderComponent($$result, "CtaButton", $$CTAButton, { "text": textCtaButton, "href": hrefCtaButton })} ${renderComponent($$result, "ContactText", $$ContactText, { "text": message })} </div> </section>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/index/organisms/contactSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="sr-only">
PrometeonDev - Desarrollo de software a medida y soluciones digitales
</h1> ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "ServicesSection", $$ServicesSection, {})} ${renderComponent($$result2, "TechCarousel", $$TechCarousel, {})} ${renderComponent($$result2, "PortfolioSection", $$PortfolioSection, {})} ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ` })}`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/pages/index.astro", void 0);

const $$file = "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
