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
                <p className="text-dark">Wij hanteren een transparant terugbetalingsbeleid dat is gekoppeld aan de verschillende fases van uw project. Het terugbetalingspercentage wordt bepaald door de fase waarin u het project annuleert:</p>
                <ul className="list-disc pl-6 mt-2 mb-4 text-dark">
                    <li>100% terugbetaling indien geannuleerd vóór verzending van de sitemap (structuur van de website)</li>
                    <li>80% terugbetaling indien geannuleerd vóór verzending van de wireframes (schematische weergave van de pagina's)</li>
                    <li>60% terugbetaling indien geannuleerd vóór verzending van het design (visueel ontwerp)</li>
                    <li>0% terugbetaling nadat het basis design is verzonden</li>
                </ul>
                <p className="text-dark">Een fase wordt als "verzonden" beschouwd wanneer wij via de overeengekomen communicatiemethode (e-mail, chat, of ander platform) een van de volgende hebben gestuurd:</p>
                <ul className="list-disc pl-6 mt-2 mb-4 text-dark">
                    <li>Een link naar het document of ontwerp</li>
                    <li>Een bestand met het document of ontwerp</li>
                    <li>Afbeeldingen of screenshots van het document of ontwerp</li>
                </ul>
                <p className="text-dark">Elke fase wordt onafhankelijk behandeld van voorgaande fases. Het terugbetalingspercentage wordt berekend over het totaalbedrag van de betreffende fase.</p>
                <p className="text-dark">Voor abonnementsdiensten bieden wij de mogelijkheid tot restitutie van vooruitbetaalde, nog niet aangevangen factureringsperioden. De opzegging gaat in aan het einde van de huidige factureringsperiode, en reeds betaalde bedragen voor toekomstige perioden worden volledig terugbetaald. Een verzoek tot annulering dient schriftelijk te worden ingediend.</p>
            </section>

            <section id="dienstverlening">
                <h2 className="text-xl font-semibold mb-4">4. Dienstverlening en Toegang</h2>
                <p className="text-dark">Na voltooiing van het project of activering van het abonnement ontvangt u toegang tot de overeengekomen diensten. Leveringstijdlijnen worden gespecificeerd in individuele serviceovereenkomsten of e-mailbevestigingen. Voor aangepaste ontwikkelingsprojecten zijn leveringstijdlijnen schattingen en kunnen onderhevig zijn aan redelijke aanpassingen. Hoewel wij streven naar het nakomen van alle overeengekomen deadlines, kunnen vertragingen optreden door onvoorziene omstandigheden zoals wijzigingen in de scope, problemen met derden, of persoonlijke noodgevallen. In dergelijke gevallen zullen wij u zo spoedig mogelijk informeren en een herziene tijdlijn verstrekken. Wij streven naar 99,9% service uptime voor lopende diensten maar kunnen ononderbroken toegang niet garanderen.</p>
            </section>

            <section id="intellectueel-eigendom-en-toegangsrechten">
                <h2 className="text-xl font-semibold mb-4">5. Intellectueel Eigendom en Toegangsrechten</h2>
                <div className="text-dark space-y-6">
                    <p>Na volledige betaling verkrijgt u de volgende rechten met betrekking tot de geleverde website:</p>
                    <ul className="list-decimal pl-6">
                        <li>Een niet-exclusief, onbeperkt gebruiksrecht voor de volledige website zoals deze aan u is opgeleverd</li>
                        <li>Het recht om de website naar eigen inzicht aan te passen of te laten aanpassen</li>
                        <li>Volledige eigendom van alle unieke, speciaal voor u ontwikkelde onderdelen</li>
                        <li>Volledige eigendom van alle content (teksten, afbeeldingen, video&apos;s etc.) die u heeft aangeleverd</li>
                    </ul>

                    <p>Voor de onderliggende tools, templates en frameworks die wij hebben ontwikkeld en gebruikt bij het bouwen van uw website, geldt het volgende:</p>
                    <ul className="list-decimal pl-6">
                        <li>Deze blijven ons intellectueel eigendom</li>
                        <li>U krijgt hierop een niet-exclusief, onbeperkt gebruiksrecht voor gebruik binnen uw website</li>
                        <li>Wij behouden het recht om deze onderdelen te hergebruiken in andere projecten</li>
                        <li>Deze licentie is eeuwigdurend en royalty-vrij - u betaalt dus geen extra kosten voor het gebruik</li>
                    </ul>

                    <p>Wij behouden ons daarnaast de volgende rechten voor:</p>
                    <ul className="list-decimal pl-6">
                        <li>Het recht om niet-vertrouwelijk werk te tonen in onze portfolio en marketingmateriaal</li>
                        <li>Administratieve toegang tot de website voor updates, ondersteuning en beveiliging (u kunt schriftelijk verzoeken om deze toegang te verwijderen)</li>
                        <li>Een kredietlink in de voettekst van de website (bijv. &quot;Website gemaakt door YakoWeb&quot;). Indien u deze wenst te verwijderen, informeer ons vóór projectvoltooiing.</li>
                    </ul>
                </div>
            </section>

            <section id="beperking-van-aansprakelijkheid">
                <h2 className="text-xl font-semibold mb-4">6. Beperking van Aansprakelijkheid</h2>
                <p className="text-dark">Wij zijn niet aansprakelijk voor enige directe, indirecte, incidentele, bijzondere, gevolg- of bestraffende schade, of enig verlies van winst of inkomsten, direct of indirect opgelopen, of enig verlies van gegevens, gebruik, goodwill of andere immateriële verliezen. Voor zover maximaal toegestaan door de wet, zal onze totale aansprakelijkheid onder deze Voorwaarden niet het bedrag overschrijden dat u ons heeft betaald voor de diensten die aanleiding geven tot de claim.</p>
                <p className="text-dark mt-4">Wij streven ernaar om kwalitatief hoogwaardige diensten te leveren, maar geven geen garanties met betrekking tot specifieke resultaten of prestaties. Alle diensten worden geleverd op een "as is" en "as available" basis.</p>
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
                <p className="text-sm text-dark">Laatst bijgewerkt: 08/16/2025</p>
            </div>
        </div>
    </div>
  );
}
