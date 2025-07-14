'use client';
import React from 'react';
import { ArrowLeftIcon } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Terms() {
  const t = useTranslations('terms');

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
            <section id={t('sections.services.id')}>
                <h2 className="text-xl font-semibold mb-4">{t('sections.services.title')}</h2>
                <p className="text-dark">{t('sections.services.content')}</p>
            </section>

            <section id={t('sections.payment.id')}>
                <h2 className="text-xl font-semibold mb-4">{t('sections.payment.title')}</h2>
                <p className="text-dark">{t('sections.payment.content')}</p>
            </section>

            <section id={t('sections.refund.id')}>
                <h2 className="text-xl font-semibold mb-4">{t('sections.refund.title')}</h2>
                <p className="text-dark">{t('sections.refund.content')}</p>
            </section>

            <section id={t('sections.delivery.id')}>
                <h2 className="text-xl font-semibold mb-4">{t('sections.delivery.title')}</h2>
                <p className="text-dark">{t('sections.delivery.content')}</p>
            </section>

            <section id={t('sections.ip.id')}>
                <h2 className="text-xl font-semibold mb-4">{t('sections.ip.title')}</h2>
                <p className="text-dark"
                   dangerouslySetInnerHTML={{ __html: t('sections.ip.content') }}
                />
            </section>

            <section id={t('sections.liability.id')}>
                <h2 className="text-xl font-semibold mb-4">{t('sections.liability.title')}</h2>
                <p className="text-dark">{t('sections.liability.content')}</p>
            </section>

            <section id={t('sections.forceMajeure.id')}>
                <h2 className="text-xl font-semibold mb-4">{t('sections.forceMajeure.title')}</h2>
                <p className="text-dark">{t('sections.forceMajeure.content')}</p>
            </section>

            <section id={t('sections.suspension.id')}>
                <h2 className="text-xl font-semibold mb-4">{t('sections.suspension.title')}</h2>
                <p className="text-dark">{t('sections.suspension.content')}</p>
            </section>

            <section id={t('sections.law.id')}>
                <h2 className="text-xl font-semibold mb-4">{t('sections.law.title')}</h2>
                <p className="text-dark">{t('sections.law.content')}</p>
            </section>

            <section id={t('sections.contact.id')}>
                <h2 className="text-xl font-semibold mb-4">{t('sections.contact.title')}</h2>
                <p className="text-dark"
                   dangerouslySetInnerHTML={{ __html: t('sections.contact.content') }}
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