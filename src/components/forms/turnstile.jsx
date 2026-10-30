'use client'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import Script from 'next/script';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

// Cloudflare Turnstile widget. Rendered explicitly so it works across client-side navigation.
// Call ref.current.reset() after a submission — tokens are single-use.
const Turnstile = forwardRef(function Turnstile({ onVerify, className }, ref) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onVerifyRef = useRef(onVerify);
  onVerifyRef.current = onVerify;

  const renderWidget = () => {
    if (!window.turnstile || !containerRef.current || widgetIdRef.current !== null) return;
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: SITE_KEY,
      callback: (token) => onVerifyRef.current?.(token),
      'expired-callback': () => onVerifyRef.current?.(''),
      'error-callback': () => onVerifyRef.current?.(''),
    });
  };

  useEffect(() => {
    renderWidget();
    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
    };
  }, []);

  useImperativeHandle(ref, () => ({
    reset: () => {
      onVerifyRef.current?.('');
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    },
  }));

  return (<>
    <Script
      src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
      strategy="afterInteractive"
      onLoad={renderWidget}
      onReady={renderWidget}
    />
    <div ref={containerRef} className={className} />
  </>);
});

export default Turnstile;
