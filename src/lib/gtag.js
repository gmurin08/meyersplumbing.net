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

// Online booking conversion label. Fires on /booking-complete, which the
// Housecall Pro booking widget redirects to after a booking is submitted.
// Google Ads conversion: "Book With Housecall" (ID 17146096898).
export const BOOKING_CONVERSION_LABEL = '_E1mCKa_hosdEILa8u8_';

// Housecall Pro online booking widget.
export const HCP_TOKEN = '1bdb6501d5534a82a5c21153bb05f1bf';
export const HCP_ORG_NAME = 'Meyers-plumbing';

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

/**
 * Fire the online booking conversion. Called once on mount of /booking-complete.
 * Set the conversion action's Count to "One" in Google Ads so a refresh of the
 * page doesn't count a second booking.
 */
export function trackBookingConversion() {
  if (typeof window === 'undefined') return;

  // Mirror into the dataLayer so GTM can trigger off it too.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'booking_complete' });

  if (typeof window.gtag !== 'function' || !BOOKING_CONVERSION_LABEL) return;

  window.gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${BOOKING_CONVERSION_LABEL}`,
  });
}
