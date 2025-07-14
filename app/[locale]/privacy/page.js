'use client';
import React from 'react';
import { ArrowLeftIcon } from '@phosphor-icons/react';
import ManageCookies from '../../components/ManageCookies';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Privacy() {
  const t = useTranslations('privacy');

  return (
    <div className="flex flex-col bg-background px-4 mx-auto py-8 sm:px-6 lg:px-72">
      <Link
        href="/"
        className="flex flex-row justify-center items-center gap-x-2 w-fit border-2 border-primary text-primary font-semibold px-3 py-2 mb-8 rounded-lg shadow hover:bg-primary hover:text-white transition"
      >
        <ArrowLeftIcon size={18} weight="bold" /> 
        {t('backToHome')}
      </Link>

      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

      <div className="space-y-8">
        <section id={t('sections.intro.id')}>
          <p className="text-dark"
             dangerouslySetInnerHTML={{ __html: t('sections.intro.content') }}
          />
        </section>

        <section id={t('sections.dataCollection.id')}>
          <h2 className="text-xl font-semibold mb-4">{t('sections.dataCollection.title')}</h2>
          <p className="text-dark">{t('sections.dataCollection.intro')}</p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-dark">
            {t.raw('sections.dataCollection.items').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section id={t('sections.collectionMethods.id')}>
          <h2 className="text-xl font-semibold mb-4">{t('sections.collectionMethods.title')}</h2>
          <p className="text-dark">{t('sections.collectionMethods.intro')}</p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-dark">
            {t.raw('sections.collectionMethods.items').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section id={t('sections.dataPurpose.id')}>
          <h2 className="text-xl font-semibold mb-4">{t('sections.dataPurpose.title')}</h2>
          <p className="text-dark">{t('sections.dataPurpose.intro')}</p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-dark">
            {t.raw('sections.dataPurpose.items').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="text-dark mt-4">{t('sections.dataPurpose.legal')}</p>
        </section>

        <section id={t('sections.dataProtection.id')}>
          <h2 className="text-xl font-semibold mb-4">{t('sections.dataProtection.title')}</h2>
          <p className="text-dark">{t('sections.dataProtection.content')}</p>
        </section>

        <section id={t('sections.thirdParty.id')}>
          <h2 className="text-xl font-semibold mb-4">{t('sections.thirdParty.title')}</h2>
          <p className="text-dark">{t('sections.thirdParty.stripe')}</p>
          <p className="text-dark mt-4">{t('sections.thirdParty.sharing')}</p>
        </section>

        <section id={t('sections.cookies.id')}>
          <h2 className="text-xl font-semibold mb-4">{t('sections.cookies.title')}</h2>
          <p className="text-dark">{t('sections.cookies.intro')}</p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">{t('sections.cookies.typesTitle')}</h3>
            <ul className="list-disc pl-6 space-y-2 text-dark">
              <li>
                <span className="font-medium">{t('sections.cookies.necessary.title')}</span>
                {t('sections.cookies.necessary.description')}
              </li>
              <li>
                <span className="font-medium">{t('sections.cookies.analytics.title')}</span>
                {t('sections.cookies.analytics.description')}
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  {t.raw('sections.cookies.analytics.items').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <div className="text-dark mt-4">
            <ManageCookies>{t('sections.cookies.manage')}</ManageCookies>
          </div>
        </section>

        <section id={t('sections.gdpr.id')}>
          <h2 className="text-xl font-semibold mb-4">{t('sections.gdpr.title')}</h2>
          <p className="text-dark">{t('sections.gdpr.intro')}</p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-dark">
            {t.raw('sections.gdpr.rights').map((right, index) => (
              <li key={index}>{right}</li>
            ))}
          </ul>
          <p className="text-dark mt-4"
             dangerouslySetInnerHTML={{ __html: t('sections.gdpr.contact') }}
          />
        </section>

        <section id={t('sections.updates.id')}>
          <h2 className="text-xl font-semibold mb-4">{t('sections.updates.title')}</h2>
          <p className="text-dark">{t('sections.updates.content')}</p>
        </section>

        <div className="mt-12 pt-8 border-t border-dark/30">
          <p className="text-sm text-dark">{t('lastUpdated')}</p>
        </div>
      </div>
    </div>
  );
}