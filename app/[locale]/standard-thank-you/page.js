'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function ThankYouStandardPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [countdown, setCountdown] = useState(5);
  const [status, setStatus] = useState('verifying');
  const [errorMessage, setErrorMessage] = useState('');
  const t = useTranslations('ThankYouPage');

  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await fetch(`/api/verify-session?session_id=${sessionId}`);
        const data = await response.json();
        
        if (data.success) {
          setStatus('success');
          // Start countdown after verification
          const timer = setInterval(() => {
            setCountdown((prev) => {
              if (prev <= 1) {
                clearInterval(timer);
                window.location.href = 'https://tally.so/r/mZAp8e';
                return 0;
              }
              return prev - 1;
            });
          }, 1000);

          return () => clearInterval(timer);
        } else {
          setStatus('error');
          setErrorMessage(data.error || t('error.sessionUsed'));
        }
      } catch (error) {
        console.error('Error:', error);
        setStatus('error');
        setErrorMessage(t('error.sessionUsed'));
      }
    };

    if (sessionId) {
      verifySession();
    } else {
      setStatus('error');
      setErrorMessage(t('error.sessionUsed'));
    }
  }, [sessionId, t]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {status === 'verifying' && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('verifying.title')}</h1>
          <p>{t('verifying.description')}</p>
        </div>
      )}

      {status === 'success' && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('success.title')}</h1>
          <p className="mb-4">{t('success.description')}</p>
          <p>{t('success.redirecting', { countdown })}</p>
        </div>
      )}

      {status === 'error' && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('error.title')}</h1>
          <p>{errorMessage}</p>
          {errorMessage === t('error.sessionUsed') && (
            <p className="mt-4">
              {t('error.supportContact')}
            </p>
          )}
        </div>
      )}
    </div>
  );
} 