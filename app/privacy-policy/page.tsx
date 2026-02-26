import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Section, Container } from '@/components/ui/layout';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <Section className="pt-32 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground">

              <section className="space-y-3">
                <h2 className="font-heading text-xl font-semibold text-foreground">1. Who We Are</h2>
                <p>
                  STRIVEUP (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is an IT services company providing web development,
                  software engineering, mobile app development, and digital design services.
                  Our website is <span className="text-foreground font-medium">striveup.com</span>.
                  You can reach us at{' '}
                  <a href="mailto:striveup.solutions@gmail.com" className="text-primary underline underline-offset-2">
                    striveup.solutions@gmail.com
                  </a>.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-xl font-semibold text-foreground">2. Information We Collect</h2>
                <p>We only collect information you voluntarily provide to us:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li><strong className="text-foreground">Contact form submissions</strong> — your name, email address, and message content</li>
                  <li><strong className="text-foreground">Chat widget messages</strong> — messages you send to our AI assistant (processed by Google Gemini)</li>
                  <li><strong className="text-foreground">Email correspondence</strong> — if you email us directly</li>
                </ul>
                <p>We do not collect payment information, create user accounts, or track personal browsing behavior.</p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
                <p>We use the information you provide solely to:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Respond to your enquiries and project requests</li>
                  <li>Provide the AI chat assistant service</li>
                  <li>Communicate about potential or ongoing projects</li>
                </ul>
                <p>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-xl font-semibold text-foreground">4. Third-Party Services</h2>
                <p>Our website uses the following third-party services:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li><strong className="text-foreground">Google Gemini API</strong> — powers our AI chat assistant. Messages sent to the chat are processed by Google. See <a href="https://policies.google.com/privacy" className="text-primary underline underline-offset-2" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.</li>
                  <li><strong className="text-foreground">Vercel</strong> — hosting and infrastructure. See <a href="https://vercel.com/legal/privacy-policy" className="text-primary underline underline-offset-2" target="_blank" rel="noopener noreferrer">Vercel&apos;s Privacy Policy</a>.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-xl font-semibold text-foreground">5. Cookies</h2>
                <p>
                  Our website uses minimal cookies necessary for functionality (e.g., theme preference).
                  We do not use advertising or analytics cookies. You can disable cookies in your browser settings
                  without affecting your ability to use the site.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-xl font-semibold text-foreground">6. Data Retention</h2>
                <p>
                  Contact form submissions are retained only as long as necessary to respond to your enquiry
                  or fulfil a project engagement. You may request deletion of your data at any time by
                  emailing{' '}
                  <a href="mailto:striveup.solutions@gmail.com" className="text-primary underline underline-offset-2">
                    striveup.solutions@gmail.com
                  </a>.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-xl font-semibold text-foreground">7. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p>
                  To exercise any of these rights, contact us at{' '}
                  <a href="mailto:striveup.solutions@gmail.com" className="text-primary underline underline-offset-2">
                    striveup.solutions@gmail.com
                  </a>.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-xl font-semibold text-foreground">8. Changes to This Policy</h2>
                <p>
                  We may update this policy from time to time. Any changes will be posted on this page
                  with an updated date. Continued use of our website after changes constitutes acceptance
                  of the updated policy.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-xl font-semibold text-foreground">9. Contact</h2>
                <p>
                  Questions about this policy? Email us at{' '}
                  <a href="mailto:striveup.solutions@gmail.com" className="text-primary underline underline-offset-2">
                    striveup.solutions@gmail.com
                  </a>.
                </p>
              </section>

            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
