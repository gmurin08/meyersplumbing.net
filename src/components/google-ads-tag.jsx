import Script from 'next/script';
import {
  GOOGLE_ADS_ID,
  PHONE_CONVERSION_LABEL,
  PHONE_CONVERSION_NUMBER,
} from '@/lib/gtag';

/**
 * Loads gtag.js for the Google Ads tag (AW-) only. Handles:
 *  - the call-tracking number-insertion swap (phone_conversion_number)
 *  - exposing window.gtag so form submissions can fire a conversion event
 *
 * GA4 is loaded separately via GTM, so it is deliberately not configured here.
 */
export default function GoogleAdsTag() {
  return (
    <>
      <Script
        id="gtag-ads-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
      />
      <Script id="gtag-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
          gtag('config', '${GOOGLE_ADS_ID}/${PHONE_CONVERSION_LABEL}', {
            'phone_conversion_number': '${PHONE_CONVERSION_NUMBER}'
          });
        `}
      </Script>
    </>
  );
}
