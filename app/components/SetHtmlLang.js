'use client';

import { useEffect } from 'react';

export default function SetHtmlLang({ lang }) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return null;
}
