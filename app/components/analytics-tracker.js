'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pageview } from '../lib/gtag';

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run in production and if GA id is present
    if (!window || !window.gtag) return;
    pageview(window.location.pathname + window.location.search);
  }, [pathname]);

  return null;
}
