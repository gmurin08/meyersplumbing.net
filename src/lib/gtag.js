// Google Ads conversion tracking config + helpers.
//
// GA4 (G-ERNPTQ3HBZ) is loaded via GTM (GTM-TMR8WDHB) and is intentionally NOT
// loaded here to avoid double-counting. This file only handles the Google Ads
// (AW-) tag, which GTM is not managing: the call-tracking number swap and the
// form-submission conversion event.

export const GOOGLE_ADS_ID = 'AW-17146096898';

// Call (phone) conversion — number-insertion swap. From the Google Ads snippet.
export const PHONE_CONVERSION_LABEL = 'syX8COzjtPAbEILa8u8_';
export const PHONE_CONVERSION_NUMBER = '1-833-663-9377';

// Contact-form submission conversion label.
// Google Ads conversion: "MMP - Website Form Submission" (ID 17146096898).
export const FORM_CONVERSION_LABEL = 'd2rTCNmYiYQbEILa8u8_';

// Call-link click conversion label. Fires whenever any tel: link is clicked,
// regardless of whether the visitor came from an ad. This is separate from the
// PHONE_CONVERSION_LABEL number-insertion swap (which is ads-only).
// Google Ads conversion: "Call Link Click (Not from Ads)" (ID 17146096898).
export const CALL_CLICK_CONVERSION_LABEL = '35FwCPupq80cEILa8u8_';

/**
 * Fire the contact-form conversion. Safe to call before a client-side redirect —
 * it returns a promise that resolves once gtag reports the hit sent (or after a
 * short timeout) so the navigation doesn't cancel the beacon.
 */
export function trackFormConversion() {
  return new Promise((resolve) => {
    // Always mirror into the dataLayer so GTM can trigger off it too.
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'generate_lead' });
    }

    if (
      typeof window === 'undefined' ||
      typeof window.gtag !== 'function' ||
      !FORM_CONVERSION_LABEL
    ) {
      resolve();
      return;
    }

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      resolve();
    };

    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${FORM_CONVERSION_LABEL}`,
      event_callback: finish,
    });

    // Fallback in case the callback never fires (e.g. blocked network).
    setTimeout(finish, 800);
  });
}

/**
 * Fire the call-link click conversion. Called from a delegated click listener
 * on any tel: link. Returns a promise that resolves once the hit is reported
 * sent (or after a short timeout), mirroring trackFormConversion.
 */
export function trackCallClick() {
  return new Promise((resolve) => {
    // Mirror into the dataLayer so GTM can trigger off it too.
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'call_link_click' });
    }

    if (
      typeof window === 'undefined' ||
      typeof window.gtag !== 'function' ||
      !CALL_CLICK_CONVERSION_LABEL
    ) {
      resolve();
      return;
    }

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      resolve();
    };

    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${CALL_CLICK_CONVERSION_LABEL}`,
      event_callback: finish,
    });

    // Fallback in case the callback never fires (e.g. blocked network).
    setTimeout(finish, 800);
  });
}
