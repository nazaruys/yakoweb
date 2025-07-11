'use client';
import React from 'react';
import { ArrowLeftIcon } from '@phosphor-icons/react';
import ManageCookies from '../components/ManageCookies';

export default function Privacyverklaring() {
  return (
    <div className="min-h-screen bg-background py-20 px-8 sm:px-16">
      <div className="max-w-3xl mx-auto">
        <a
            href="/"
            className="flex flex-row justify-center items-center gap-x-2 w-fit border-2 border-primary text-primary font-semibold px-3 py-2 mb-8 rounded-lg shadow hover:bg-primary hover:text-white transition"
        >
            <ArrowLeftIcon size={18} weight="bold" /> 
            Terug naar Home
        </a>

        <h1 className="text-3xl font-bold mb-8">Privacyverklaring</h1>

        <div className="space-y-8">
            <section id="inleiding">
            <p className="text-dark">
                Deze Privacyverklaring legt uit hoe wij uw persoonsgegevens verzamelen, gebruiken en beschermen. Deze website 
                en onze diensten worden beheerd door Nazar Yakovenko (YakoWeb). Als u vragen of verzoeken heeft betreffende 
                uw persoonsgegevens, kunt u contact met ons opnemen via hello@yakoweb.com.
            </p>
            </section>

            <section id="gegevensverzameling">
            <h2 className="text-xl font-semibold mb-4">1. Welke gegevens wij verzamelen</h2>
            <p className="text-dark">
                Wij verzamelen alleen de minimaal noodzakelijke persoonsgegevens:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-dark">
                <li>Uw naam en e-mailadres wanneer u contact met ons opneemt of diensten aanvraagt</li>
                <li>Betaalgegevens wanneer u diensten aanschaft (verwerkt via Stripe)</li>
            </ul>
            </section>

            <section id="verzamelingsmethoden">
            <h2 className="text-xl font-semibold mb-4">2. Hoe wij uw gegevens verzamelen</h2>
            <p className="text-dark">
                Wij verzamelen persoonsgegevens wanneer u:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-dark">
                <li>Contact met ons opneemt per e-mail of via onze website</li>
                <li>Diensten aanschaft of betalingen doet via Stripe</li>
            </ul>
            </section>

            <section id="doel-gegevensgebruik">
            <h2 className="text-xl font-semibold mb-4">3. Waarom wij uw gegevens verzamelen</h2>
            <p className="text-dark">
                Wij verwerken uw gegevens om:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-dark">
                <li>Te reageren op uw berichten of serviceverzoeken</li>
                <li>De diensten te leveren die u heeft besteld</li>
                <li>Betalingen te verwerken en facturen te versturen</li>
                <li>Te voldoen aan wettelijke verplichtingen (bijv. belastingaangifte)</li>
            </ul>
            <p className="text-dark mt-4">
                De rechtsgrondslag voor het verwerken van uw gegevens is uw toestemming en onze contractuele verplichtingen 
                wanneer u onze diensten gebruikt.
            </p>
            </section>

            <section id="gegevensbescherming">
            <h2 className="text-xl font-semibold mb-4">4. Hoe wij uw gegevens opslaan en beschermen</h2>
            <p className="text-dark">
                Wij nemen redelijke maatregelen om uw gegevens veilig te houden. Uw gegevens worden alleen opgeslagen 
                zolang nodig is om onze diensten te verlenen en te voldoen aan wettelijke vereisten. Alle betaalgegevens 
                worden veilig verwerkt via Stripe en worden nooit opgeslagen op onze eigen servers.
            </p>
            </section>

            <section id="diensten-van-derden">
            <h2 className="text-xl font-semibold mb-4">5. Diensten van derden</h2>
            <p className="text-dark">
                Wij gebruiken Stripe om betalingen te verwerken. Uw betaalgegevens worden direct door Stripe verwerkt 
                en vallen onder Stripe's eigen privacy- en beveiligingsbeleid. Wij slaan uw volledige betaalinformatie 
                niet op en hebben hier geen toegang toe.
            </p>
            <p className="text-dark mt-4">
                Wij delen uw persoonsgegevens niet met andere derden, tenzij wij wettelijk verplicht zijn dit te doen.
            </p>
            </section>

            <section id="cookies-tracking">
            <h2 className="text-xl font-semibold mb-4">6. Cookies en tracking</h2>
            <p className="text-dark">
                Wij gebruiken cookies om uw ervaring te verbeteren en te begrijpen hoe bezoekers onze website gebruiken. U kunt via ons cookievoorkeurscentrum bepalen welke cookies u accepteert.
            </p>
            <div className="mt-4">
                <h3 className="font-semibold mb-2">Soorten cookies die we gebruiken:</h3>
                <ul className="list-disc pl-6 space-y-2 text-dark">
                    <li>
                        <span className="font-medium">Strikt Noodzakelijke Cookies:</span> Deze cookies zijn essentieel voor het goed functioneren van de website en kunnen niet worden uitgeschakeld.
                    </li>
                    <li>
                        <span className="font-medium">Analytics Cookies:</span> We gebruiken DataFast analytics om te begrijpen hoe bezoekers onze website gebruiken. Dit helpt ons de prestaties en gebruiksvriendelijkheid van onze website te verbeteren. Deze cookies verzamelen anonieme, geaggregeerde gegevens en omvatten:
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>datafast_visitor_id – Identificeert unieke bezoeken (Duur: 1 jaar)</li>
                            <li>datafast_session_id – Volgt sessie-niveau activiteit (Duur: 30 minuten)</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="text-dark mt-4">
                U kunt <ManageCookies>hier klikken om uw cookievoorkeuren te beheren</ManageCookies> of gebruik maken van de knop "Aanpassen" in onze cookiebanner.
            </div>
            </section>

            <section id="avg-rechten">
            <h2 className="text-xl font-semibold mb-4">7. Uw rechten onder de AVG</h2>
            <p className="text-dark">
                Als inwoner van de EU of EER heeft u het recht om:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-dark">
                <li>Toegang te krijgen tot uw persoonsgegevens</li>
                <li>Onjuiste gegevens te corrigeren</li>
                <li>Verwijdering van uw gegevens te verzoeken</li>
                <li>Verwerking te beperken of bezwaar te maken tegen verwerking</li>
                <li>Een kopie van uw gegevens te ontvangen (gegevensportabiliteit)</li>
            </ul>
            <p className="text-dark mt-4">
                Om een van deze rechten uit te oefenen, neem contact met ons op via hello@yakoweb.com.
            </p>
            </section>

            <section id="beleidswijzigingen">
            <h2 className="text-xl font-semibold mb-4">8. Wijzigingen in deze Privacyverklaring</h2>
            <p className="text-dark">
                Wij kunnen dit beleid van tijd tot tijd bijwerken. Wijzigingen zullen worden gepubliceerd op deze pagina, 
                met de bijgewerkte datum hieronder.
            </p>
            </section>

            <div className="mt-12 pt-8 border-t border-dark/30">
            <p className="text-sm text-dark">
                Laatst bijgewerkt: 07/07/2025
            </p>
            </div>
        </div>
      </div>
    </div>
  );
}