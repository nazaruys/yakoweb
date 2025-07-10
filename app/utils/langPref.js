"use client";

const LANG_PREF_NAME = 'lang_pref';

/**
 * Sets the language preference cookie
 * @param {string} lang - The language code to set (e.g., 'en', 'nl')
 */
export function setLangPref(lang) {
  // Set cookie that expires in 1 year
  const oneYear = 365 * 24 * 60 * 60;
  document.cookie = `${LANG_PREF_NAME}=${lang}; max-age=${oneYear}; path=/; SameSite=Lax`;
}

/**
 * Gets the current language preference
 * @returns {string|null} The language preference or null if not set
 */
export function getLangPref() {
  const cookies = document.cookie.split(';');
  const langPref = cookies
    .find(cookie => cookie.trim().startsWith(`${LANG_PREF_NAME}=`));

  if (!langPref) return null;

  try {
    const value = langPref.split('=')[1];
    return decodeURIComponent(value);
  } catch (error) {
    console.error('Error parsing language preference:', error);
    return null;
  }
} 