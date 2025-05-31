export type EmailTemplateOptions = {
  title: string;
  greeting?: string;
  intro?: string;
  items?: { label: string; value: string }[];
  body?: string;
  buttonText?: string;
  buttonUrl?: string;
};

export function generateEmailTemplate(options: EmailTemplateOptions) {
  const {
    title,
    greeting = "Hola,",
    intro,
    items = [],
    body,
    buttonText = "Ir a PrometeonDev",
    buttonUrl = "https://prometeondev.com",
  } = options;

  const itemsHtml = items
    .map((item) => `<li><strong>${item.label}:</strong> ${item.value}</li>`)
    .join("");

  return `
      <!DOCTYPE html>
      <html lang="es">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title}</title>
          <style>
              body {
                  font-family: 'Vonca', system-ui, sans-serif;
                  background-color: #000a30;
                  margin: 0;
                  padding: 0;
                  color: #ffffff;
              }
              .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background: #ffffff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                  color: #000a30;
                  font-family: 'Hero New', system-ui, sans-serif;
              }
              .header {
                  text-align: center;
                  padding: 20px 0;
                  background-color: #0376ff;
                  border-top-left-radius: 8px;
                  border-top-right-radius: 8px;
              }
              .header img {
                  max-width: 150px;
              }
              .content {
                  padding: 20px;
                  text-align: left;
              }
              .footer {
                  text-align: center;
                  font-size: 12px;
                  color: #e6e6e6;
                  margin-top: 20px;
                  padding: 15px;
                  background-color: #000a30;
                  border-bottom-left-radius: 8px;
                  border-bottom-right-radius: 8px;
              }
              .footer a {
                  color: #0376ff;
                  text-decoration: none;
                  font-weight: bold;
                  transition: color 0.3s;
              }
              .footer a:hover {
                  color: #5aa9ff;
              }
              .button-container {
                  text-align: center;
                  margin-top: 20px;
              }
              .btn {
                  display: inline-block;
                  width: 100%;
                  max-width: 250px;
                  padding: 14px 0;
                  background-color: #0376ff;
                  color: #ffffff !important;
                  text-decoration: none !important;
                  font-size: 16px;
                  font-weight: bold;
                  border-radius: 8px;
                  text-align: center;
                  transition: background-color 0.3s, transform 0.2s;
              }
              .btn:hover {
                  background-color: #025ac2;
                  transform: scale(1.05);
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <img src="https://prometeondev.com/global/LOGO-BLANCO-TEXTO.png" alt="PrometeonDev Logo">
              </div>
              <div class="content">
                  <h2>${title}</h2>
                  <p>${greeting}</p>
                  ${intro ? `<p>${intro}</p>` : ""}
                  ${items.length > 0 ? `<ul>${itemsHtml}</ul>` : ""}
                  ${body ? `<p>${body}</p>` : ""}
                  <div class="button-container">
                      <a href="${buttonUrl}" class="btn">${buttonText}</a>
                  </div>
              </div>
              <div class="footer">
                  <p>© ${new Date().getFullYear()} PrometonDev. Todos los derechos reservados.</p>
                  <p><a href="https://prometeondev.com">Sitio Web</a> | <a href="mailto:prometeondev@gmail.com">Soporte</a></p>
              </div>
          </div>
      </body>
      </html>
    `;
}
