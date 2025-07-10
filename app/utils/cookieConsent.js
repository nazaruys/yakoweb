"use client";

const COOKIE_CONSENT_NAME = 'cookie_consent';

/**
 * Sets the cookie consent preferences
 * @param {Object} preferences - Cookie consent preferences
 * @param {boolean} preferences.analytics - Whether analytics cookies are allowed
 */
export function setCookieConsent(preferences) {
  const consentValue = {
    necessary: true, // Always true as it's required
    analytics: preferences.analytics,
    timestamp: new Date().toISOString(),
  };

  // Set cookie that expires in 1 year
  const oneYear = 365 * 24 * 60 * 60;
  document.cookie = `${COOKIE_CONSENT_NAME}=${JSON.stringify(consentValue)}; max-age=${oneYear}; path=/; SameSite=Lax`;
}

/**
 * Gets the current cookie consent preferences
 * @returns {Object|null} Cookie consent preferences or null if not set
 */
export function getCookieConsent() {
  const cookies = document.cookie.split(';');
  const cookieConsent = cookies
    .find(cookie => cookie.trim().startsWith(`${COOKIE_CONSENT_NAME}=`));

  if (!cookieConsent) return null;

  try {
    const value = cookieConsent.split('=')[1];
    return JSON.parse(decodeURIComponent(value));
  } catch (error) {
    console.error('Error parsing cookie consent:', error);
    return null;
  }
}

/**
 * Checks if cookie consent has been given
 * @returns {boolean} Whether cookie consent has been given
 */
export function hasCookieConsent() {
  return getCookieConsent() !== null;
}

/**
 * Removes the cookie consent
 */
export function removeCookieConsent() {
  document.cookie = `${COOKIE_CONSENT_NAME}=; max-age=0; path=/; SameSite=Lax`;
} 