// =============================================================
//  CONFIGURACIÓN DEL SITIO
//  Edita estos valores en un solo lugar.
// =============================================================

// 1) FORMULARIO DE CONTACTO (Formspree)
//    Reemplaza "TU_ID_AQUI" por el ID real de tu formulario.
//    Lo encuentras en https://formspree.io -> tu formulario -> el
//    endpoint se ve así: https://formspree.io/f/xxxxxxxx
//    Pega SOLO la parte final (xxxxxxxx) aquí abajo:
export const FORMSPREE_FORM_ID: string = "xgordrwr";

export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

// El formulario ya está listo. Mientras el ID siga siendo "TU_ID_AQUI"
// el formulario avisará al visitante que use WhatsApp o el correo.
export const FORMSPREE_READY = FORMSPREE_FORM_ID !== "TU_ID_AQUI";

// 2) DATOS DE CONTACTO (usados en varios lugares del sitio)
export const SITE = {
  name: "J.I Asesoría & Courier",
  url: "https://jiasesoria.com",
  whatsapp: "50663939073",
  whatsappDisplay: "6393-9073",
  emailCourier: "info@couriercr.com",
  emailEmpresas: "info@jiasesoria.com",
  platform: "https://couriercr.com",
} as const;
