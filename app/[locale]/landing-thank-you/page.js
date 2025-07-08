'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ThankYouLandingPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [countdown, setCountdown] = useState(5);
  const [status, setStatus] = useState('verifying');
  const [errorMessage, setErrorMessage] = useState('');

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
                window.location.href = 'https://tally.so/r/w2dKEM';
                return 0;
              }
              return prev - 1;
            });
          }, 1000);

          return () => clearInterval(timer);
        } else {
          setStatus('error');
          setErrorMessage(data.error || 'Failed to verify purchase');
        }
      } catch (error) {
        console.error('Error:', error);
        setStatus('error');
        setErrorMessage('An unexpected error occurred');
      }
    };

    if (sessionId) {
      verifySession();
    } else {
      setStatus('error');
      setErrorMessage('No session ID provided');
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {status === 'verifying' && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Verifying your purchase...</h1>
          <p>Please wait while we confirm your payment.</p>
        </div>
      )}

      {status === 'success' && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Thank You for Your Purchase!</h1>
          <p className="mb-4">Your payment has been successfully processed.</p>
          <p>Redirecting to the form in {countdown} seconds...</p>
        </div>
      )}

      {status === 'error' && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h1>
          <p>{errorMessage}</p>
          {errorMessage === 'This session has already been used' && (
            <p className="mt-4">
              Please contact support if you made a purchase, but weren't redirected to the form.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
