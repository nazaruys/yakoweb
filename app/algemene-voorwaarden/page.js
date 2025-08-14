'use client';
import React from 'react';
import { ArrowLeftIcon } from '@phosphor-icons/react';
import Link from 'next/link';

export default function Terms() {
  return (
    <div className="flex flex-col bg-background px-4 mx-auto py-8 sm:px-6 lg:px-72">
        <Link
            href="/"
            className="flex flex-row justify-center items-center gap-x-2 w-fit border-2 border-primary text-primary font-semibold px-3 py-2 mb-8 rounded-lg shadow hover:bg-primary hover:text-white transition"
        >
            <ArrowLeftIcon size={18} weight="bold" /> 
            Terug naar Home
        </Link>
        <h1 className="text-3xl font-bold mb-8">Algemene Voorwaarden</h1>
        
        <div className="space-y-8">
            <section id="diensten-aangeboden">
                <h2 className="text-xl font-semibold mb-4">1. Aangeboden Diensten</h2>
                <p className="text-dark">Wij bieden webontwikkeling en digitale oplossingen diensten aan, waaronder maar niet beperkt tot website ontwikkeling, webapplicatie ontwikkeling en gerelateerde adviesservices. De specifieke details van diensten worden uiteengezet in individuele serviceovereenkomsten of offertes.</p>
            </section>

            <section id="betaling-en-facturering">
                <h2 className="text-xl font-semibold mb-4">2. Betaling en Facturering</h2>
                <p className="text-dark">Betaling voor onze diensten wordt verwerkt via Stripe. Alle prijzen zijn in Euro's tenzij anders vermeld. Betalingsvoorwaarden worden gespecificeerd in individuele serviceovereenkomsten. Wij behouden ons het recht voor om onze prijzen op elk moment te wijzigen. Voor abonnementsdiensten wordt u periodiek gefactureerd totdat de abonnement wordt opgezegd.</p>
            </section>

            <section id="terugbetaling-en-annulering">
                <h2 className="text-xl font-semibold mb-4">3. Terugbetaling en Annuleringsbeleid</h2>
                <p className="text-dark">Vanwege de aard van digitale diensten bieden wij over het algemeen geen terugbetalingen aan zodra het werk is begonnen. Specifieke annuleringsvoorwaarden worden uiteengezet in uw serviceovereenkomst. Voor abonnementsdiensten kunt u op elk moment annuleren, maar er wordt geen terugbetaling verstrekt voor de huidige factureringsperiode. Door akkoord te gaan met deze Voorwaarden erkent en accepteert u dat alle verkopen definitief zijn zodra het werk is begonnen.</p>
            </section>

            <section id="dienstverlening">
                <h2 className="text-xl font-semibold mb-4">4. Dienstverlening en Toegang</h2>
                <p className="text-dark">Na voltooiing van het project of activering van het abonnement ontvangt u toegang tot de overeengekomen diensten. Leveringstijdlijnen worden gespecificeerd in individuele serviceovereenkomsten of e-mailbevestigingen. Voor aangepaste ontwikkelingsprojecten zijn leveringstijdlijnen schattingen en kunnen onderhevig zijn aan redelijke aanpassingen. Hoewel wij streven naar het nakomen van alle overeengekomen deadlines, kunnen vertragingen optreden door onvoorziene omstandigheden zoals wijzigingen in de scope, problemen met derden, of persoonlijke noodgevallen. In dergelijke gevallen zullen wij u zo spoedig mogelijk informeren en een herziene tijdlijn verstrekken. Wij streven naar 99,9% service uptime voor lopende diensten maar kunnen ononderbroken toegang niet garanderen.</p>
            </section>

            <section id="intellectueel-eigendom-en-toegangsrechten">
                <h2 className="text-xl font-semibold mb-4">5. Intellectueel Eigendom en Toegangsrechten</h2>
                <p className="text-dark"
                   dangerouslySetInnerHTML={{ __html: "Tenzij anders schriftelijk overeengekomen, behoudt u volledige eigendom van de eindresultaten na volledige betaling. Wij behouden ons het recht voor om niet-vertrouwelijk werk te tonen in onze portfolio en marketingmateriaal.\n\nStandaard behouden wij administratieve toegang tot de websites die wij bouwen, uitsluitend voor het toepassen van updates, het bieden van ondersteuning, of het verbeteren van veiligheid en prestaties. U kunt schriftelijk verzoeken dat wij onze toegang verwijderen op elk moment, en wij zullen hieraan zonder vertraging voldoen.\n\nAls onderdeel van onze standaardvoorwaarden wordt een kleine kredietlink geplaatst in de voettekst van uw website (bijv. \"Website gemaakt door YakoWeb\"). Als u deze krediet wenst te verwijderen, informeer ons dan vóór voltooiing van het project. Wij behouden ons het recht voor om een redelijke verwijderingsvergoeding in rekening te brengen.\n\nEventuele reeds bestaande tools, templates of frameworks die in ontwikkeling worden gebruikt en door ons zijn gemaakt, blijven ons intellectueel eigendom en kunnen worden hergebruikt in andere projecten." }}
                />
            </section>

            <section id="beperking-van-aansprakelijkheid">
                <h2 className="text-xl font-semibold mb-4">6. Beperking van Aansprakelijkheid</h2>
                <p className="text-dark">Onze diensten worden geleverd "zoals ze zijn" zonder enige garantie van welke aard dan ook. Wij zijn niet aansprakelijk voor enige indirecte, incidentele, bijzondere, gevolg- of bestraffende schade, of enig verlies van winst of inkomsten, direct of indirect opgelopen, of enig verlies van gegevens, gebruik, goodwill of andere immateriële verliezen. Voor zover maximaal toegestaan door de wet, zal onze totale aansprakelijkheid onder deze Voorwaarden niet het bedrag overschrijden dat u ons heeft betaald voor de diensten die aanleiding geven tot de claim.</p>
            </section>

            <section id="overmacht">
                <h2 className="text-xl font-semibold mb-4">7. Overmacht</h2>
                <p className="text-dark">Wij zullen niet aansprakelijk worden gehouden voor enig falen of vertraging in prestatie als gevolg van oorzaken buiten onze redelijke controle, waaronder maar niet beperkt tot natuurrampen, pandemieën, oorlog, handelingen van de overheid, stroom- of internetstoringen, of storingen in diensten van derden.</p>
            </section>

            <section id="account-opschorting">
                <h2 className="text-xl font-semibold mb-4">8. Account Opschorting</h2>
                <p className="text-dark">Wij behouden ons het recht voor om uw toegang tot onze diensten op te schorten of te beëindigen als u deze voorwaarden schendt, frauduleuze activiteiten onderneemt, of faalt te betalen voor diensten. Wij zullen waar mogelijk en gepast kennisgeving van opschorting verstrekken.</p>
            </section>

            <section id="toepasselijk-recht">
                <h2 className="text-xl font-semibold mb-4">9. Toepasselijk Recht</h2>
                <p className="text-dark">Deze algemene voorwaarden worden beheerst door Nederlands recht. Eventuele geschillen die voortvloeien uit of verband houden met deze voorwaarden vallen onder de exclusieve jurisdictie van de rechtbanken in Nederland.</p>
            </section>

            <section id="contact-informatie">
                <h2 className="text-xl font-semibold mb-4">10. Contactinformatie</h2>
                <p className="text-dark"
                   dangerouslySetInnerHTML={{ __html: "Voor vragen of zorgen betreffende deze voorwaarden, neem contact met ons op via:<br />Naam: YakoWeb<br />E-mail: hello@yakoweb.com" }}
                />
            </section>

            <section id="updates-voorwaarden">
                <h2 className="text-xl font-semibold mb-4">11. Updates van Voorwaarden</h2>
                <p className="text-dark">Wij behouden ons het recht voor om deze algemene voorwaarden op elk moment bij te werken. Eventuele wijzigingen worden onmiddellijk van kracht na het plaatsen van de bijgewerkte voorwaarden op onze website. Uw voortgezet gebruik van onze diensten na dergelijke wijzigingen vormt acceptatie van de bijgewerkte voorwaarden.</p>
            </section>

            <div className="mt-12 pt-8 border-t border-dark/30">
                <p className="text-sm text-dark">Laatst bijgewerkt: 07/07/2025</p>
            </div>
        </div>
    </div>
  );
}
