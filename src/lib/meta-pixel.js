// Meta (Facebook) Pixel event helpers.
//
// The pixel itself (ID 1254638263109407) is loaded by a Custom HTML tag in GTM
// (GTM-TMR8WDHB), which calls fbq('init') and fires the initial PageView. These
// helpers only send the standard conversion events from the same places the
// Google Ads conversions fire. They go to Meta only — Google Ads never sees them.

/**
 * Send a standard Meta Pixel event. GTM loads the pixel asynchronously, so if
 * fbq isn't defined yet (e.g. on a fresh page load), retry briefly before
 * giving up.
 */
export function trackMetaEvent(eventName, params) {
  if (typeof window === 'undefined') return;

  let tries = 0;
  const send = () => {
    if (typeof window.fbq === 'function') {
      if (params) window.fbq('track', eventName, params);
      else window.fbq('track', eventName);
      return;
    }
    if (tries >= 20) return; // ~5s; pixel blocked or GTM tag disabled
    tries += 1;
    setTimeout(send, 250);
  };
  send();
}
