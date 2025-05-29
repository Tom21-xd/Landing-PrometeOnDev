export function getWhatsAppLink(): string {
  const rawPhone = import.meta.env.PUBLIC_COMPANY_PHONE;
  const phone = rawPhone.replace(/\D/g, "");

  const message =
    "Hola *PrometeonDev*, me gustaría saber más sobre sus servicios de desarrollo de software y soluciones digitales.";
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
