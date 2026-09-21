import { contactDetails } from "../data/content";

/**
 * Builds a WhatsApp "click to chat" link that opens a conversation with the
 * library's WhatsApp number, with the given message pre-filled.
 *
 * There's no backend on this site, so this is how form submissions and
 * "Join Now" style buttons are delivered: the visitor's browser opens
 * WhatsApp (app or web) with their details already typed in, and they hit
 * send themselves. Nothing is transmitted unless the visitor sends it.
 */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${contactDetails.whatsappDigits}?text=${encoded}`;
}

export function openWhatsApp(message: string) {
  window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
}
