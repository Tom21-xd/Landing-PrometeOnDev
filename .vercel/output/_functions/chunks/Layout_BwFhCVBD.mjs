import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent, l as renderScript, k as renderSlot, n as renderHead } from './astro/server_DCZrtpUB.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Astro$6 = createAstro("https://prometeondev.com");
const $$NavItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NavItem;
  const { label, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(href, "href")}${addAttribute(`Ir a la secci\xF3n ${label}`, "title")}${addAttribute(`Navegar a la secci\xF3n ${label}`, "aria-label")} class="relative group text-dark dark:text-white transition-colors"> ${label} <span class="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span> </a> </li>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/atoms/navItem.astro", void 0);

const $$Astro$5 = createAstro("https://prometeondev.com");
const $$SocialIconFooter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SocialIconFooter;
  const { href, iconClass, ariaLabel } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(ariaLabel, "title")}${addAttribute(ariaLabel, "aria-label")} target="_blank" rel="noopener noreferrer" class="text-2xl hover:text-primary hover:-translate-y-2 transition-all duration-300 ease-out"${addAttribute(ariaLabel, "aria-label")}> <i${addAttribute(iconClass, "class")}></i> </a>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/atoms/socialIconFooter.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="flex items-center gap-4 justify-center"> <svg viewBox="0 0 16 16" fill="currentColor" width="23" xmlns="http://www.w3.org/2000/svg" class="text-yellow-500 dark:text-gray-300"> <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path> </svg> <label class="relative inline-flex items-center cursor-pointer"> <input id="theme-toggle" type="checkbox" class="sr-only peer"> <div class="w-28 h-8 bg-background-dark dark:bg-dark-background-dark rounded-full peer peer-checked:bg-dark-darker transition-colors duration-300 relative text-sm font-medium shadow-sm dark:shadow-dark-background-dark"> <span class="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center text-dark dark:text-white pointer-events-none select-none">\nLight\n</span> <span class="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center text-dark dark:text-white pointer-events-none select-none">\nDark\n</span> </div> <span class="absolute top-1 left-0.5 w-14 h-6.5 rounded-full bg-primary-light/40 dark:bg-primary/40 shadow transition-transform duration-300 peer-checked:translate-x-11/12"></span> </label> <svg viewBox="0 0 16 16" fill="currentColor" width="23" xmlns="http://www.w3.org/2000/svg" class="text-gray-800 dark:text-yellow-400"> <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path> </svg> </div> <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    const checkbox = document.getElementById("theme-toggle");\n\n    const isDark =\n      localStorage.getItem("theme") === "dark" ||\n      (!localStorage.getItem("theme") &&\n        window.matchMedia("(prefers-color-scheme: dark)").matches);\n\n    document.documentElement.classList.toggle("dark", isDark);\n\n    if (checkbox && checkbox instanceof HTMLInputElement) {\n      checkbox.checked = isDark;\n\n      checkbox.addEventListener("change", () => {\n        if (checkbox.checked) {\n          document.documentElement.classList.add("dark");\n          localStorage.setItem("theme", "dark");\n        } else {\n          document.documentElement.classList.remove("dark");\n          localStorage.setItem("theme", "light");\n        }\n      });\n    }\n  });\n<\/script>'])), maybeRenderHead());
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/atoms/themeToggle.astro", void 0);

function getWhatsAppLink() {
  const rawPhone = "";
  const phone = rawPhone.replace(/\D/g, "");
  const message = "Hola *PrometeonDev*, me gustaría saber más sobre sus servicios de desarrollo de software y soluciones digitales.";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Sobre nosotros", href: "/about" },
    { label: "Servicios", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contacto", href: "/contact" }
  ];
  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61575255925454",
      iconClass: "fa-brands fa-facebook",
      ariaLabel: "Visitar el perfil de PrometeonDev en Facebook"
    },
    {
      href: "https://www.linkedin.com/company/prometeondev/",
      iconClass: "fa-brands fa-linkedin",
      ariaLabel: "Visitar la página de empresa de PrometeonDev en LinkedIn"
    },
    {
      href: "https://www.instagram.com/prometeon.dev/",
      iconClass: "fa-brands fa-instagram",
      ariaLabel: "Ver el perfil de PrometeonDev en Instagram"
    },
    {
      href: "https://x.com/PrometeonDev",
      iconClass: "fa-brands fa-x-twitter",
      ariaLabel: "Ir al perfil de PrometeonDev en X (Twitter)"
    },
    {
      href: getWhatsAppLink(),
      iconClass: "fa-brands fa-whatsapp",
      ariaLabel: "Enviar mensaje a PrometeonDev por WhatsApp"
    }
  ];
  const email = "";
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gradient-to-t from-dark/20 dark:from-dark-background-light via-80% to-60% pt-10 pb-4 flex flex-col items-center gap-6 text-dark dark:text-white transition-colors"> <a href="/" title="Ir al inicio de PrometeonDev" aria-label="Ir al inicio de PrometeonDev"> <img src="/global/logo-blanco.webp" alt="Logo PrometeonDev" title="Volver al inicio de PrometeonDev" class="hidden dark:block w-12 h-14 transition" loading="lazy"> <img src="/global/logo-negro.webp" alt="Logo PrometeonDev" title="Volver al inicio de PrometeonDev" class="block dark:hidden w-12 h-14 transition" loading="lazy"></a> <nav> <ul class="flex flex-wrap justify-center gap-4 md:gap-8 text-lg font-semibold"> ${navItems.map((item) => renderTemplate`${renderComponent($$result, "NavItem", $$NavItem, { ...item })}`)} </ul> </nav> <div class="flex items-center gap-4 flex-wrap justify-center"> ${socialLinks.map((link) => renderTemplate`${renderComponent($$result, "SocialIconFooter", $$SocialIconFooter, { ...link })}`)} </div> <div class="text-center flex flex-col items-center gap-4 -mt-4"> <a${addAttribute(`mailto:${email}`, "href")} title="Enviar un correo electrónico a PrometeonDev" aria-label="Enviar un correo electrónico a PrometeonDev" class="flex items-center gap-2 text-sm font-medium hover:text-primary transition"> <i class="fa-solid fa-envelope text-base"></i> ${email} </a> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </div> <hr class="w-full max-w-screen-md border-t border-dark dark:border-white opacity-20"> <p class="text-center text-sm opacity-70">
© 2025 PrometeonDev. All Rights Reserved.
</p> </footer>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/organisms/footer.astro", void 0);

const $$LogoButton = createComponent(($$result, $$props, $$slots) => {
  const logoUrl = "/";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(logoUrl, "href")} title="Volver al inicio de PrometeonDev" aria-label="Volver al inicio de PrometeonDev" class="flex items-center py-0.5 px-2 rounded-lg bg-gray-200/50 transition backdrop-blur-md border border-gray-300"> <img src="/global/logo-blanco.webp" alt="Logo PrometeonDev" title="Volver al inicio de PrometeonDev" class="hidden dark:block w-10 h-12 transition-transform duration-200 ease-in-out hover:scale-90"> <img src="/global/logo-azul-claro.webp" alt="Logo PrometeonDev" title="Volver al inicio de PrometeonDev" class="block dark:hidden w-10 h-12 transition-transform duration-200 ease-in-out hover:scale-90"> </a>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/atoms/logoButton.astro", void 0);

const $$Astro$4 = createAstro("https://prometeondev.com");
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href, label } = Astro2.props;
  const isActive = href === "/" ? Astro2.url.pathname === "/" : Astro2.url.pathname.startsWith(href);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`Ir a la secci\xF3n ${label}`, "title")}${addAttribute(`Navegar a la secci\xF3n ${label}`, "aria-label")}${addAttribute(`text-md  transition-all duration-300 hover:text-dark-light dark:hover:text-dark-background-light ${isActive ? "text-dark-darker dark:text-dark-background-light font-semibold" : "text-dark dark:text-dark-dark"}`, "class")}> ${label} </a>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/atoms/navLink.astro", void 0);

const $$ContactButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/contact" title="Ir a la página de contacto de PrometeonDev" aria-label="Ir a la página de contacto de PrometeonDev" class="flex text-lg items-center bg-gradient-to-tr from-primary-light via-primary to-primary-dark text-background dark:text-dark-background px-5 py-2 rounded-xl font-semibold transition-all duration-300 ease-in-out transform hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] hover:shadow-primary-light">
Contáctanos
</a>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/atoms/contactButton.astro", void 0);

const $$NavMenu = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/services", label: "Servicios" },
    { href: "/portfolio", label: "Portfolio" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="hidden md:flex items-center space-x-4 py-1.5 pl-5 pr-2 rounded-xl bg-gray-200/50 transition backdrop-blur-sm border border-gray-300"> ${links.map((link) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { ...link })}`)} ${renderComponent($$result, "ContactButton", $$ContactButton, {})} </nav>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/molecules/navMenu.astro", void 0);

const $$Astro$3 = createAstro("https://prometeondev.com");
const $$NavLinkMobile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NavLinkMobile;
  const { href, label } = Astro2.props;
  const isActive = Astro2.url.pathname === href;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`Ir a la secci\xF3n ${label}`, "title")}${addAttribute(`Navegar a la secci\xF3n ${label}`, "aria-label")}${addAttribute(`relative text-black inline-flex items-center text-4xl transition-all group duration-300 hover:text-black ${isActive ? " font-semibold" : ""}`, "class")}> <span class="relative inline-flex items-center"> ${isActive && renderTemplate`<span class="w-2 h-2 bg-black rounded-full mr-3"></span>`} <span>${label}</span> <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-out group-hover:w-full"></span> </span> </a>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/atoms/navLinkMobile.astro", void 0);

const $$CloseMenuButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="close-menu-button" class="flex items-center px-3 py-2.5 rounded-lg bg-gray-200/50 transition backdrop-blur-md border border-gray-300 cursor-pointer"> <i class="fa-solid fa-xmark text-3xl transition-transform duration-200 ease-in-out transform hover:scale-90"></i> </button>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/atoms/closeMenuButton.astro", void 0);

const $$Astro$2 = createAstro("https://prometeondev.com");
const $$SocialIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialIcon;
  const { href, icon, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(title, "title")}${addAttribute(title, "aria-label")} target="_blank" rel="noopener noreferrer" class="text-dark dark:text-light text-xl flex items-center justify-center w-12 h-12 rounded-full border border-primary dark:border-dark-dark hover:bg-primary hover:text-background hover:-translate-y-2 shadow-md shadow-gray-400 transition-all duration-300 ease-out"> <i${addAttribute(icon, "class")}></i> </a>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/atoms/socialIcon.astro", void 0);

const $$ContactButtonMobile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/contact" title="Ir a la página de contacto de PrometeonDev" aria-label="Ir a la página de contacto de PrometeonDev" class="flex text-xl justify-center text-center w-full bg-primary text-dark py-4 rounded-xl font-semibold transition-all duration-300 ease-in-out transform hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] hover:shadow-primary-light">
Contáctanos
</a>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/atoms/contactButtonMobile.astro", void 0);

const $$MobileMenu = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/services", label: "Servicios" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "Sobre nosotros" },
    { href: "/contact", label: "Contacto" }
  ];
  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/prometeondev/",
      icon: "fa-brands fa-linkedin",
      title: "Visitar LinkedIn de PrometeonDev"
    },
    {
      href: "https://github.com/prometeondev",
      icon: "fa-brands fa-github",
      title: "Visitar Github de PrometeonDev"
    },
    {
      href: "https://www.facebook.com/profile.php?id=61575255925454",
      icon: "fa-brands fa-facebook",
      title: "Visitar Facebook de PrometeonDev"
    },
    {
      href: "https://www.instagram.com/prometeon.dev/",
      icon: "fa-brands fa-instagram",
      title: "Visitar Instagram de PrometeonDev"
    },
    {
      href: getWhatsAppLink(),
      icon: "fa-brands fa-whatsapp",
      title: "Visitar Whatsapp de PrometeonDev"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="mobile-menu" class="fixed inset-0 min-h-screen bg-gray-300/50 bg-opacity-95 backdrop-blur-2xl transform translate-x-full transition-transform duration-300 flex flex-col px-6 pt-8 pb-2"> <div class="w-full flex items-center justify-between"> ${renderComponent($$result, "LogoButton", $$LogoButton, {})} ${renderComponent($$result, "CloseMenuButton", $$CloseMenuButton, {})} </div> <div class="flex flex-col space-y-6 pl-4 text-xl font-semibold flex-1 mt-4"> ${links.map((link) => renderTemplate`${renderComponent($$result, "NavLinkMobile", $$NavLinkMobile, { ...link })}`)} </div> <hr class="mb-16 border-gray-300"> <div class="flex justify-center space-x-6 mb-10"> ${socialLinks.map((link) => renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { ...link })}`)} </div> <div class="bottom-8 w-full flex justify-center px-6"> ${renderComponent($$result, "ContactButtonMobile", $$ContactButtonMobile, {})} </div> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/molecules/mobileMenu.astro", void 0);

const $$Astro$1 = createAstro("https://prometeondev.com");
const $$ContactBurgerButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactBurgerButton;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center space-x-3 py-1.5 pl-1 pr-2 rounded-xl bg-gray-200/50 transition backdrop-blur-sm border border-gray-300"> ${renderComponent($$result, "ContactButton", $$ContactButton, {})} <button${addAttribute(id, "id")} class="text-2xl cursor-pointer"> <i class="fa-solid fa-bars text-gray-900 transition-transform duration-300 ease-in-out transform hover:scale-90"></i> </button> </div>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/molecules/contactBurgerButton.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed left-0 top-0 min-w-full bg-transparent z-40"> <div class="flex justify-between items-center gap-8 px-6 pt-6"> ${renderComponent($$result, "LogoButton", $$LogoButton, {})} ${renderComponent($$result, "NavMenu", $$NavMenu, {})} <div class="flex md:hidden"> ${renderComponent($$result, "ContactBurgerButton", $$ContactBurgerButton, { "id": "burger-button" })} </div> </div> ${renderComponent($$result, "MobileMenu", $$MobileMenu, {})} ${renderScript($$result, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/organisms/header.astro?astro&type=script&index=0&lang.ts")} </header>`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/organisms/header.astro", void 0);

const $$WhatsappFloatingIcon = createComponent(($$result, $$props, $$slots) => {
  const whatsappLink = getWhatsAppLink();
  return renderTemplate`${maybeRenderHead()}<a id="whatsapp-icon"${addAttribute(whatsappLink, "href")} target="_blank" rel="noopener noreferrer" class="group fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white hover:bg-green-500/90 transition-all duration-300 shadow-lg" aria-label="WhatsApp"> <i class="fa-brands fa-whatsapp text-4xl group-hover:scale-95 group-hover:-rotate-3 duration-300 transition-transform"></i> </a> ${renderScript($$result, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/atoms/whatsappFloatingIcon.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/components/global/atoms/whatsappFloatingIcon.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://prometeondev.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "PrometeonDev - Desarrollo de Software, Web y M\xF3vil",
    description = "PrometeOnDev es una empresa de desarrollo de software que ofrece soluciones innovadoras en desarrollo web, m\xF3vil, inteligencia artificial y dashboards. Simplificamos la tecnolog\xEDa para llevar tu negocio al siguiente nivel.",
    keywords = "desarrollo de software a medida, desarrollo web profesional, aplicaciones m\xF3viles Android, inteligencia artificial para empresas, dashboards interactivos Power BI, soluciones digitales, PrometeonDev Colombia, automatizaci\xF3n empresarial, Prometeon, PrometeonDev"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es" class="dark w-full h-full m-0 font-secondary"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><link rel="image_src" href="https://prometeondev.com/images/prometeon.png"><title>', '</title><meta name="description"', '><meta name="keywords"', '><meta name="author" content="PrometeOnDev"><!-- Open Graph --><meta property="og:title" content="PrometeonDev - Desarrollo de software a medida"><meta property="og:description" content="Impulsamos tu negocio con soluciones digitales."><meta property="og:image" content="https://prometeondev.com/images/prometeon.png"><meta property="og:url" content="https://prometeondev.com"><meta property="og:type" content="website"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="PrometeonDev - Desarrollo de software a medida"><meta name="twitter:description" content="Impulsamos tu negocio con soluciones digitales."><meta name="twitter:image" content="https://prometeondev.com/images/prometeon.png"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Organization",\n        "name": "PrometeonDev",\n        "url": "https://prometeondev.com",\n        "logo": "https://prometeondev.com/global/logo.png",\n        "sameAs": [\n          "https://www.linkedin.com/company/prometeondev",\n          "https://www.facebook.com/profile.php?id=61575255925454",\n          "https://github.com/prometeondev"\n        ]\n      }\n    <\/script>', '</head> <body> <main class="bg-background dark:bg-dark-background text-dark dark:text-gray-400"> ', " ", " ", " ", " </main> </body></html>"])), title, addAttribute(description, "content"), addAttribute(keywords, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "WhatsappFloatingIcon", $$WhatsappFloatingIcon, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/USER/Desktop/U/PrometeOnDev/Landing-PrometeOnDev/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getWhatsAppLink as g };
