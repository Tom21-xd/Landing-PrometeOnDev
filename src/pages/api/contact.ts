export const prerender = false;
import type { APIRoute } from "astro";
import { sendEmail } from "@/lib/sendEmail";
import { generateEmailTemplate } from "@/utils/emailTemplates";

export const POST: APIRoute = async ({ request }) => {
  const { inputNombre, inputEmail, inputTel, inputMensaje } =
    await request.json();

  if (!inputNombre || !inputEmail || !inputMensaje) {
    return new Response("Faltan campos obligatorios", { status: 400 });
  }

  const html = generateEmailTemplate({
    title: "Nuevo mensaje de contacto",
    intro: "Has recibido un nuevo mensaje a través del formulario de contacto.",
    items: [
      { label: "Nombre", value: inputNombre },
      { label: "Correo", value: inputEmail },
      { label: "Teléfono", value: inputTel },
      { label: "Mensaje", value: inputMensaje },
    ],
    buttonText: "Ir a PrometeonDev",
    buttonUrl: "https://prometeondev.com",
  });

  try {
    await sendEmail(
      import.meta.env.PUBLIC_COMPANY_EMAIL,
      "Nuevo mensaje de contacto",
      html
    );

    return new Response("Mensaje enviado correctamente", { status: 200 });
  } catch (err) {
    console.error("❌ Error enviando correo:", err);
    return new Response("Error al enviar el mensaje", { status: 500 });
  }
};
