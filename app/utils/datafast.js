import { getCookieConsent } from './cookieConsent';

export async function trackGoal(name, description) {
  return null
  try {
    // Check if analytics is enabled
    const consent = getCookieConsent();
    if (!consent?.analytics) {
      console.log('Analytics tracking disabled by user consent');
      return false;
    }

    const response = await fetch('/api/datafast-goal', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, description })
    });
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Failed to track DataFast goal' }));
      console.error('Failed to track DataFast goal:', error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error tracking DataFast goal:', error);
    return false;
  }
} 