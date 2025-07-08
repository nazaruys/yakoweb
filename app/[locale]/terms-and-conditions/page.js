'use client';
import React from 'react';
import Navbar from '../../components/Navbar';

export default function TermsAndConditions() {
  return (
    <div className="bg-background">
      <Navbar currentPage="terms-and-conditions" />
      <main className="pt-32">
        <div className="flex flex-col bg-background px-4 mx-auto py-12 sm:px-6 lg:px-72">
          <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
          
          <div className="space-y-8">
            <section id="services-offered">
              <h2 className="text-xl font-semibold mb-4">1. Services Offered</h2>
              <p className="text-dark">
                We provide web development and digital solutions services, including but not limited to website development,
                web application development, and related consulting services. The specific details of services will be outlined
                in individual service agreements or proposals.
              </p>
            </section>

            <section id="payment-and-billing">
              <h2 className="text-xl font-semibold mb-4">2. Payment and Billing</h2>
              <p className="text-dark">
                Payment for our services is processed through Stripe. All prices are in Euros unless otherwise specified.
                Payment terms are specified in individual service agreements. We reserve the right to modify our prices
                at any time. For subscription-based services, you will be billed on a recurring basis until cancellation.
              </p>
            </section>

            <section id="refund-and-cancellation">
              <h2 className="text-xl font-semibold mb-4">3. Refund and Cancellation Policy</h2>
              <p className="text-dark">
                Due to the nature of digital services, we generally do not offer refunds once work has commenced.
                Specific cancellation terms will be outlined in your service agreement. For subscription services,
                you may cancel at any time, but no refund will be provided for the current billing period. By agreeing to these Terms, you acknowledge and accept that all sales are final once work has commenced.
              </p>
            </section>

            <section id="service-delivery">
              <h2 className="text-xl font-semibold mb-4">4. Service Delivery and Access</h2>
              <p className="text-dark">
                Upon project completion or subscription activation, you will receive access to the agreed-upon
                services. Delivery timelines will be specified in individual service agreements or email confirmations. 
                For custom development projects, delivery timelines are estimates and may be subject to reasonable adjustments. 
                While we strive to meet all agreed deadlines, delays may occur due to unforeseen circumstances such as changes in scope, third-party issues, or personal emergencies. In such cases, we will inform you as soon as possible and provide a revised timeline. 
                We strive to maintain 99.9% service uptime for ongoing services but cannot guarantee uninterrupted access.
              </p>
            </section>
            <section id="intellectual-property-and-access-rights">
              <h2 className="text-xl font-semibold mb-4">5. Intellectual Property and Access Rights</h2>
              <p className="text-dark">
                Unless otherwise agreed in writing, you will retain full ownership of the final deliverables upon full payment. We reserve the right to display non-confidential work in our portfolio and marketing materials.

                By default, we maintain administrative access to the websites we build, solely for the purpose of applying updates, providing support, or improving security and performance. You may request in writing that we remove our access at any time, and we will comply without delay.

                As part of our standard terms, a small credit link will be placed in the footer of your website (e.g., "Website made by YakoWeb"). If you wish to remove this credit, please inform us before project completion. We reserve the right to charge a reasonable removal fee.

                Any pre-existing tools, templates, or frameworks used in development that were created by us remain our intellectual property and may be reused in other projects.
              </p>
            </section>

            <section id="limitation-of-liability">
              <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-dark">
                Our services are provided "as is" without any warranty of any kind. We shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages, or any loss of profits
                or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or
                other intangible losses. To the maximum extent permitted by law, our total liability under these Terms shall not exceed the amount you paid us for the services giving rise to the claim.
              </p>
            </section>
            <section id="force-majeure">
              <h2 className="text-xl font-semibold mb-4">7. Force Majeure</h2>
              <p className="text-dark">
                We shall not be held liable for any failure or delay in performance resulting from causes beyond our reasonable control, including but not limited to natural disasters, pandemics, war, acts of government, power or internet outages, or third-party service disruptions.
              </p>
            </section>

            <section id="account-suspension">
              <h2 className="text-xl font-semibold mb-4">8. Account Suspension</h2>
              <p className="text-dark">
                We reserve the right to suspend or terminate your access to our services if you violate these
                terms, engage in fraudulent activity, or fail to pay for services. We will provide notice of
                suspension when possible and appropriate.
              </p>
            </section>

            <section id="governing-law">
              <h2 className="text-xl font-semibold mb-4">9. Governing Law</h2>
              <p className="text-dark">
                These terms and conditions are governed by Dutch law. Any disputes arising from or relating to
                these terms shall be subject to the exclusive jurisdiction of the courts in the Netherlands.
              </p>
            </section>

            <section id="contact-information">
              <h2 className="text-xl font-semibold mb-4">10. Contact Information</h2>
              <p className="text-dark">
                For any questions or concerns regarding these terms, please contact us at:<br />
                Name: Nazar Yakovenko<br />
                Email: hello@yakoweb.com
              </p>
            </section>

            <section id="updates-to-terms">
              <h2 className="text-xl font-semibold mb-4">11. Updates to Terms</h2>
              <p className="text-dark">
                We reserve the right to update these terms and conditions at any time. Any changes will be
                effective immediately upon posting the updated terms on our website. Your continued use of
                our services after such changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-dark/30">
              <p className="text-sm text-dark">
                Last updated: 07/07/2025
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 