import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_CDbgqzxC.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$SocialLink } from '../chunks/socialLink_CLJBHzGw.mjs';
import { g as getWhatsAppLink, $ as $$Layout } from '../chunks/Layout_B_G6hxh1.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$6 = createAstro();
const $$FormIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$FormIcon;
  const { icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<i${addAttribute(`fas ${icon} text-xl text-gray-200 transition-all duration-200 ease-out group-hover:text-primary group-focus-within:text-primary`, "class")}></i>`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/contact/atoms/formIcon.astro", void 0);

const $$Astro$5 = createAstro();
const $$FormFieldBase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FormFieldBase;
  const {
    isTextArea = false,
    type = "text",
    placeholder,
    name,
    value,
    rows = 4
  } = Astro2.props;
  return renderTemplate`${isTextArea ? renderTemplate`${maybeRenderHead()}<textarea${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(rows, "rows")} maxlength="500" required class="bg-transparent w-full focus:outline-none text-background placeholder:text-gray-200 hover:placeholder:text-background placeholder:transition-all placeholder:duration-300 placeholder:ease-out resize-none"></textarea>` : renderTemplate`<input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(value, "value")}${addAttribute(placeholder, "placeholder")} max="100" required class="bg-transparent w-full focus:outline-none text-background placeholder:text-gray-200 hover:placeholder:text-background placeholder:transition-all placeholder:duration-300 placeholder:ease-out">`}`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/contact/atoms/formFieldBase.astro", void 0);

const $$InputUnderline = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 overflow-hidden transition-all duration-300 ease-out z-10"> <span class="block w-0 h-full bg-primary transition-all duration-400 ease-out group-hover:w-full group-focus-within:w-full"></span> </span>`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/contact/atoms/inputUnderline.astro", void 0);

const $$Astro$4 = createAstro();
const $$FormInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FormInput;
  const {
    type = "text",
    label,
    icon,
    name,
    value,
    rows,
    isTextArea = false
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative group w-full pb-2"> <div class="flex items-start gap-4 px-2"> ${renderComponent($$result, "FormIcon", $$FormIcon, { "icon": icon })} ${renderComponent($$result, "FormFieldBase", $$FormFieldBase, { "isTextArea": isTextArea, "type": type, "placeholder": label, "name": name, "value": value, "rows": rows })} </div> ${renderComponent($$result, "InputUnderline", $$InputUnderline, {})} </div>`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/contact/molecules/formInput.astro", void 0);

const $$Astro$3 = createAstro();
const $$SubmitButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SubmitButton;
  const { text, icon = "fa-paper-plane" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="submit" class="flex justify-center items-center gap-3 text-lg cursor-pointer bg-gradient-to-tr from-primary-light via-primary to-primary-light hover:from-primary-dark hover:via-primary hover:to-primary-light text-background dark:text-dark-background px-10 p-2 rounded-full font-semibold duration-300 ease-in-out transition hover:shadow-primary-light"> <i${addAttribute(`fas ${icon}`, "class")}></i> ${text} </button>`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/contact/atoms/submitButton.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<form id="contact-form" class="space-y-14 bg-dark-background-light dark:bg-dark-background-light relative p-12 overflow-hidden"> ', " ", " ", " ", ' <div class="flex mt-2"> ', ` </div> </form> <script type="module">
  const form = document.getElementById("contact-form");

  if (form && !form.dataset.listenerAttached) {
    form.dataset.listenerAttached = "true"; // Marcar como ya registrado

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitButton = form.querySelector("button[type='submit']");
      submitButton.disabled = true;
      const originalText = submitButton.innerText;
      submitButton.innerText = "Enviando...";

      const data = {
        inputNombre: form.inputNombre.value,
        inputEmail: form.inputEmail.value,
        inputTel: form.inputTel.value,
        inputMensaje: form.inputMensaje.value,
      };

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (res.ok) {
          alert("\u2705 Mensaje enviado correctamente.");
          form.reset();
        } else {
          alert("\u274C Error al enviar el mensaje.");
        }
      } catch (err) {
        alert("\u274C Error de red o del servidor.");
        console.error(err);
      } finally {
        submitButton.disabled = false;
        submitButton.innerText = originalText;
      }
    });
  }
<\/script>`])), maybeRenderHead(), renderComponent($$result, "FormInput", $$FormInput, { "name": "inputNombre", "type": "text", "label": "Nombre", "icon": "fa-user" }), renderComponent($$result, "FormInput", $$FormInput, { "name": "inputEmail", "type": "email", "label": "Correo Electr\xF3nico", "icon": "fa-envelope" }), renderComponent($$result, "FormInput", $$FormInput, { "name": "inputTel", "type": "tel", "label": "Tel\xE9fono", "icon": "fa-phone" }), renderComponent($$result, "FormInput", $$FormInput, { "name": "inputMensaje", "isTextArea": true, "label": "Mensaje", "icon": "fa-pencil", "rows": 3 }), renderComponent($$result, "SubmitButton", $$SubmitButton, { "text": "Enviar" }));
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/contact/molecules/contactForm.astro", void 0);

const $$Astro$2 = createAstro();
const $$ContactIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContactIcon;
  const { icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="flex items-center justify-center w-12 h-12 rounded-full text-2xl p-3 border-2 border-dark dark:border-dark-dark text-dark dark:text-dark-dark group-hover:text-primary dark:group-hover:text-dark-dark-darker transition-transform duration-300 transform cursor-pointer"> <i${addAttribute(`${icon} group-hover:-rotate-16 transition-transform duration-300 transform cursor-pointer`, "class")}></i> </span>`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/contact/atoms/contactIcon.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContactText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactText;
  const { label, value, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col leading-tight"> <h3 class="text-lg font-primary text-dark dark:text-dark-dark-darker"> ${label} </h3> <a${addAttribute(href, "href")} class="text-2xl font-semibold text-dark hover:text-primary dark:text-dark-dark dark:hover:text-dark-dark-darker transition"> ${value} </a> </div>`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/contact/atoms/contactText.astro", void 0);

const $$Astro = createAstro();
const $$ContactCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactCard;
  const { icon, label, value, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-4 group"> ${renderComponent($$result, "ContactIcon", $$ContactIcon, { "icon": icon })} ${renderComponent($$result, "ContactText", $$ContactText, { "label": label, "value": value, "href": href })} </div>`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/contact/molecules/contactCard.astro", void 0);

const $$ContactInfo = createComponent(($$result, $$props, $$slots) => {
  const phone = "+57 3112652944";
  const email = "prometeondev@gmail.com";
  const socialLinks = [
    { url: "https://www.linkedin.com/company/prometeondev/", icon: "linkedin" },
    { url: "https://github.com/prometeondev", icon: "github" },
    { url: "https://www.instagram.com/prometeondev", icon: "instagram" },
    {
      url: "https://www.facebook.com/profile.php?id=61575255925454",
      icon: "facebook"
    },
    { url: "https://x.com/prometeondev", icon: "x-twitter" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:gap-6 p-8 md:pr-10 md:mt-20 md:bg-primary/20 md:dark:bg-dark-background-light/40"> <p class="text-3xl md:text-4xl text-dark dark:text-white font-semibold mb-4 leading-snug">
¿Tienes una <span class="text-primary">idea en mente</span>?<br>
¡Ponte en <span class="text-primary">contacto</span> con <span class="text-primary">nosotros</span>!
</p> ${renderComponent($$result, "ContactCard", $$ContactCard, { "icon": "fa-solid fa-phone", "label": "Ll\xE1manos", "value": phone, "href": getWhatsAppLink() })} ${renderComponent($$result, "ContactCard", $$ContactCard, { "icon": "fa-solid fa-envelope", "label": "Env\xEDanos un mensaje", "value": email, "href": `mailto:${email}` })} <div class="flex flex-col gap-1"> <h3 class="text-lg text-primary dark:text-dark-dark mt-4 font-semibold">
Redes sociales
</h3> <div class="flex gap-3 text-xl"> ${socialLinks.map((s) => renderTemplate`${renderComponent($$result, "SocialLink", $$SocialLink, { "url": s.url, "icon": s.icon })}`)} </div> </div> </div>`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/contact/organisms/contactInfo.astro", void 0);

const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative py-10 px-6 md:pl-16 md:pr-4 bg-background dark:bg-dark-background"> <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-6"> ${renderComponent($$result, "ContactInfo", $$ContactInfo, {})} <div class="relative hidden md:block -translate-x-20 mx-auto w-full z-10"> ${renderComponent($$result, "ContactForm", $$ContactForm, {})} </div> </div> <div class="md:hidden"> <div class="bg-white dark:bg-dark-background p-6 rounded-2xl shadow-lg"> ${renderComponent($$result, "ContactForm", $$ContactForm, {})} </div> </div> </section>`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/components/contact/organisms/contactSection.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto - PrometeonDev", "description": "Ponte en contacto con nosotros para m\xE1s informaci\xF3n o consultas." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto text-center pt-28 px-4 pb-4"> <h1 class="text-5xl font-primary font-bold text-primary dark:text-dark-dark">
Contáctanos
</h1> </div> ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ` })}`;
}, "D:/PrometeonDev/Landing-PrometeOnDev/src/pages/contact.astro", void 0);

const $$file = "D:/PrometeonDev/Landing-PrometeOnDev/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
