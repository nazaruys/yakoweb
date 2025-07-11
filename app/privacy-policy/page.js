'use client';
import React from 'react';
import { ArrowLeftIcon } from '@phosphor-icons/react';
import ManageCookies from '../components/ManageCookies';
import SetHtmlLang from '../components/SetHtmlLang';

export default function PrivacyPolicy() {
  return (
    <>
      <SetHtmlLang lang="en" />
      <div className="min-h-screen bg-background py-20 px-8 sm:px-16">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="flex items-center gap-2 text-dark hover:text-black transition-colors duration-200 mb-8">
            <ArrowLeftIcon size={20} />
            <span>Back to home</span>
          </a>

          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

          <div className="space-y-8">
            <section id="introduction">
              <p className="text-dark">
                This Privacy Policy explains how we collect, use, and protect your personal data. This website and our services 
                are operated by Nazar Yakovenko (YakoWeb). If you have any questions or requests regarding your personal data, 
                you can contact us at hello@yakoweb.com.
              </p>
            </section>

            <section id="data-collection">
              <h2 className="text-xl font-semibold mb-4">1. What data we collect</h2>
              <p className="text-dark">
                We collect only the minimum necessary personal data:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-dark">
                <li>Your name and email address when you contact us or request services</li>
                <li>Payment information when you purchase services (handled via Stripe)</li>
              </ul>
            </section>

            <section id="collection-methods">
              <h2 className="text-xl font-semibold mb-4">2. How we collect your data</h2>
              <p className="text-dark">
                We collect personal data when you:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-dark">
                <li>Contact us by email or through our website</li>
                <li>Purchase services or make payments via Stripe</li>
              </ul>
            </section>

            <section id="data-purpose">
              <h2 className="text-xl font-semibold mb-4">3. Why we collect your data</h2>
              <p className="text-dark">
                We process your data in order to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-dark">
                <li>Respond to your messages or service requests</li>
                <li>Deliver the services you have ordered</li>
                <li>Process payments and send invoices</li>
                <li>Comply with legal obligations (e.g. tax reporting)</li>
              </ul>
              <p className="text-dark mt-4">
                The legal basis for processing your data is your consent and our contractual obligations when you use our services.
              </p>
            </section>

            <section id="data-protection">
              <h2 className="text-xl font-semibold mb-4">4. How we store and protect your data</h2>
              <p className="text-dark">
                We take reasonable measures to keep your data safe. Your data is only stored for as long as necessary to provide 
                our services and meet legal requirements. All payment data is processed securely via Stripe and is never stored 
                on our own servers.
              </p>
            </section>

            <section id="third-party-services">
              <h2 className="text-xl font-semibold mb-4">5. Third-party services</h2>
              <p className="text-dark">
                We use Stripe to process payments. Your payment details are handled directly by Stripe and are subject to Stripe's 
                own privacy and security policies. We do not store or access your full payment information.
              </p>
              <p className="text-dark mt-4">
                We do not share your personal data with other third parties unless legally required to do so.
              </p>
            </section>

            <section id="cookies-tracking">
              <h2 className="text-xl font-semibold mb-4">6. Cookies and tracking</h2>
              <p className="text-dark">
                We use cookies to improve your experience and understand how visitors use our website. You can control which cookies you accept through our cookie preferences center.
              </p>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Types of cookies we use:</h3>
                <ul className="list-disc pl-6 space-y-2 text-dark">
                  <li>
                    <span className="font-medium">Strictly Necessary Cookies:</span> These cookies are essential for the website to function properly and cannot be disabled.
                  </li>
                  <li>
                    <span className="font-medium">Analytics Cookies:</span> We use DataFast analytics to understand how visitors use our website. This helps us improve our website's performance and usability. These cookies collect anonymous, aggregated data and include:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>datafast_visitor_id – Identifies unique visits (Duration: 1 year)</li>
                      <li>datafast_session_id – Tracks session-level activity (Duration: 30 minutes)</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-dark mt-4">
                You can <ManageCookies>click here to manage your cookie preferences</ManageCookies> or use the "Customize" button in our cookie banner.
              </div>
            </section>

            <section id="gdpr-rights">
              <h2 className="text-xl font-semibold mb-4">7. Your rights under the GDPR</h2>
              <p className="text-dark">
                As a resident of the EU or EEA, you have the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-dark">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Restrict or object to processing</li>
                <li>Receive a copy of your data (data portability)</li>
              </ul>
              <p className="text-dark mt-4">
                To exercise any of these rights, contact us at hello@yakoweb.com.
              </p>
            </section>

            <section id="policy-updates">
              <h2 className="text-xl font-semibold mb-4">8. Changes to this Privacy Policy</h2>
              <p className="text-dark">
                We may update this policy from time to time. Changes will be published on this page, with the updated date below.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-dark/30">
              <p className="text-sm text-dark">
                Last updated: 07/11/2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 