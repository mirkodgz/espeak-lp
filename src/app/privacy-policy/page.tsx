import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | eSpeak",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative">
      <Header />
      <div className="container px-6 sm:px-10 mx-auto max-w-3xl py-12 sm:py-20">
      <header className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground">Last updated: 12 December 2025</p>
      </header>

      <nav
        aria-label="Table of contents"
        className="mt-8 rounded-2xl border bg-card/30 px-5 py-4"
      >
        <p className="text-sm font-semibold text-foreground">On this page</p>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <li>
            <a className="hover:text-foreground hover:underline" href="#introduction">
              Introduction
            </a>
          </li>
          <li>
            <a className="hover:text-foreground hover:underline" href="#controller">
              Who is responsible
            </a>
          </li>
          <li>
            <a className="hover:text-foreground hover:underline" href="#collection-use-legal-basis">
              Collection, use & legal basis
            </a>
          </li>
          <li>
            <a className="hover:text-foreground hover:underline" href="#sharing">
              Sharing & disclosure
            </a>
          </li>
          <li>
            <a className="hover:text-foreground hover:underline" href="#international-transfers">
              International transfers
            </a>
          </li>
          <li>
            <a className="hover:text-foreground hover:underline" href="#retention">
              Data retention
            </a>
          </li>
          <li>
            <a className="hover:text-foreground hover:underline" href="#rights">
              Data subject rights
            </a>
          </li>
          <li>
            <a className="hover:text-foreground hover:underline" href="#security">
              Data security
            </a>
          </li>
          <li>
            <a className="hover:text-foreground hover:underline" href="#third-parties">
              Third-party services
            </a>
          </li>
          <li>
            <a className="hover:text-foreground hover:underline" href="#changes">
              Changes
            </a>
          </li>
          <li>
            <a className="hover:text-foreground hover:underline" href="#inquiries">
              Privacy inquiries
            </a>
          </li>
        </ul>
      </nav>

      <article
        className={[
          "prose prose-zinc mt-10 max-w-none dark:prose-invert",
          "prose-headings:scroll-mt-24 prose-headings:tracking-tight",
          "prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6",
          "prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4",
          "prose-p:leading-8 prose-p:mb-6",
          "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
          "prose-ul:my-4 prose-li:my-2",
        ].join(" ")}
      >
        <section id="introduction">
          <p>
            <strong>eSpeak</strong> respects your privacy and is committed to
            protecting the personal data that you share with us. In general, you
            may browse our website without providing any personal data about
            yourself (except for cookies and similar technologies, as described
            in this <strong>Privacy Policy</strong>).
          </p>
          <p>
            When you choose to use our website or our application, an AI-powered
          tool designed to help users improve and achieve fluency in the
          English language (the "<strong>App</strong>" or the "<strong>Services</strong>"), or when you
            voluntarily provide us with personal data (for example, when
            contacting support), this <strong>Privacy Policy</strong> explains how we collect,
            use, store and protect your personal information.
          </p>
        </section>

        <section id="controller">
          <h2>Who is responsible for the processing of your personal data?</h2>
          <p>The entity responsible for the processing of your personal data is:</p>
          <p>
            <strong>eSpeak</strong>
            <br />
            Email: <a href="mailto:support@espeak.it">support@espeak.it</a>
            <br />
            Phone: +39 347 760 6837
            <br />
            Address: Milano, Italy
          </p>
          <p>
            In this <strong>Privacy Policy</strong>, <strong>eSpeak</strong> may be referred to as "eSpeak", "we",
            "us" or "our".
          </p>
        </section>

        <section id="collection-use-legal-basis">
          <h2>How we collect and use information, and legal basis for processing</h2>
          <p>Depending on your interaction with espeak, we may collect two types of data:</p>

          <h3>Non-Personal Data</h3>
          <p>
            "<strong>Non-Personal Data</strong>" means information that does not identify a
            specific natural person and cannot reasonably be used to identify
            such a person.
          </p>
          <p>This may include, for example:</p>
          <ul>
            <li>dates and times of interaction with the App</li>
            <li>usage patterns and aggregated statistics</li>
            <li>technical logs</li>
            <li>interaction metadata</li>
            <li>device or system-level information collected in aggregated form</li>
          </ul>
          <p>
            Non-Personal Data may be used without limitation and for any lawful
            purpose, including commercial, analytical, research or statistical
            purposes, in order to operate, maintain, improve and secure our
            website, App and Services, including fraud prevention and system
            optimization.
          </p>

          <h3>Personal Data</h3>
          <p>
            "<strong>Personal Data</strong>" means any information that may be used to identify an
            individual, directly or indirectly, including but not limited to:
          </p>
          <ul>
            <li>first and last name</li>
            <li>email address</li>
            <li>telephone number</li>
            <li>physical or billing address</li>
            <li>date of birth</li>
            <li>gender</li>
            <li>occupation or professional information</li>
            <li>account credentials</li>
            <li>any other information required to provide the Services you request</li>
          </ul>
          <p>
            We process <strong>Personal Data</strong> in accordance with applicable data
            protection laws, including the <strong>GDPR</strong>, and based on one or more lawful
            bases, as detailed below.
          </p>

          <h3>Information used to provide the Services</h3>
          <p>
            We may collect and store <strong>Personal Data</strong> such as name, email address,
            telephone number and other contact information in order to provide
            access to the <strong>App</strong> and <strong>Services</strong>.
          </p>
          <p>We may also collect and process information related to your use of the <strong>App</strong>, including:</p>
          <ul>
            <li>information provided during AI-powered lessons or conversations</li>
            <li>transcripts generated during lessons</li>
            <li>voice recordings created during interactions with the App</li>
            <li>learning progress and performance metrics</li>
          </ul>
          <p>
            The legal basis for this processing is the performance of a contract
            between you and <strong>espeak</strong> and the necessity to provide the <strong>Services</strong> you
            request.
          </p>

          <h3>Information for customer support and inquiries</h3>
          <p>
            When you contact <strong>espeak</strong> for support, assistance or information, we
            may collect and store <strong>Personal Data</strong> such as your name, email address,
            telephone number and the content of your communication.
          </p>
          <p>
            This information is used solely to respond to your request and provide
            customer support.
          </p>
          <p>
            The legal basis for this processing is the performance of our
            contractual obligations and our legitimate interest in providing
            effective customer support.
          </p>

          <h3>Information for maintenance and improvement of the Services</h3>
          <p>
            We may use <strong>Personal Data</strong> and technical information, such as IP
            addresses, server logs, cookies, local storage technologies, pixel
            tags or similar tools, to:
          </p>
          <ul>
            <li>operate and administer the App and website</li>
            <li>analyze usage patterns</li>
            <li>improve functionality, performance and user experience</li>
            <li>ensure security and prevent misuse</li>
          </ul>
          <p>
            We may also use conversation data and interaction data, in aggregated
            or anonymized form where possible, to train, improve and optimize our
            <strong>AI models</strong> and algorithms.
          </p>
          <p>
            The legal basis for this processing is our legitimate interest in
            improving and securing our <strong>Services</strong>, as well as the performance of our
            contract with you.
          </p>

          <h3>Marketing and promotional communications</h3>
          <p>
            Where permitted by applicable law and subject to your consent where
            required, we may process your contact details (such as email address)
            to send you newsletters, updates, service-related notices or
            promotional communications.
          </p>
          <p>
            You may withdraw your consent at any time by clicking the
            “unsubscribe” link included in our communications or by contacting us
            directly.
          </p>
          <p>
            The legal basis for this processing is your consent or our legitimate
            interest, as permitted by law.
          </p>

          <h3>Cookies, pixels and similar technologies</h3>
          <p>
            Our website and App may use cookies, pixels, web beacons and similar
            tracking technologies.
          </p>
          <p>These technologies are used to:</p>
          <ul>
            <li>ensure proper functioning of the Services</li>
            <li>enhance performance and usability</li>
            <li>analyze usage trends</li>
            <li>improve security</li>
          </ul>
          <p>
            Cookies do not contain account credentials or passwords and are used
            solely to recognize returning users and sessions.
          </p>
          <p>
            You may block or delete cookies through your browser or device
            settings. Please note that disabling cookies may affect the
            functionality and user experience of the Services.
          </p>
          <p>Additional information may be provided in a separate Cookie Policy.</p>
        </section>

        <section id="sharing">
          <h2>Information sharing and disclosure</h2>
          <p>We may share Personal Data under the following circumstances:</p>
          <ul>
            <li>With your explicit consent;</li>
            <li>
              With trusted third-party service providers who perform services on our behalf
              (such as hosting, analytics, AI processing, speech recognition or customer support),
              strictly limited to what is necessary to provide such services;
            </li>
            <li>In the event of a merger, acquisition, asset sale or similar corporate transaction;</li>
            <li>When required for audits, security investigations, fraud prevention or legal claims;</li>
            <li>
              When required by law, regulation or legal process, or to protect the rights, safety
              or property of eSpeak, users or the public.
            </li>
          </ul>
          <p>We do not sell Personal Data to third parties for their own marketing purposes.</p>
        </section>

        <section id="international-transfers">
          <h2>International data transfers</h2>
          <p>
            <strong>Personal Data</strong> may be transferred to recipients located outside the <strong>European Union</strong> or
            <strong>European Economic Area</strong>.
          </p>
          <p>
            Where such transfers occur, and where the recipient country does not provide an adequate
            level of data protection, <strong>espeak</strong> relies on appropriate safeguards, including <strong>Standard
            Contractual Clauses</strong> approved by the European Commission.
          </p>
        </section>

        <section id="retention">
          <h2>Data retention</h2>
          <p>
            <strong>eSpeak</strong> retains <strong>Personal Data</strong> only for as long as necessary to fulfill the purposes for
            which it was collected, unless a longer retention period is required or permitted by law.
          </p>
          <p>
            Once no longer necessary, <strong>Personal Data</strong> is securely deleted or anonymized. Aggregated and
            anonymized statistical data may be retained indefinitely.
          </p>
        </section>

        <section id="rights">
          <h2>Data subject rights</h2>
          <p>In accordance with applicable data protection laws, you have the right to:</p>
          <ul>
            <li>access your Personal Data</li>
            <li>request rectification or deletion</li>
            <li>restrict or object to processing</li>
            <li>request data portability</li>
            <li>withdraw consent at any time</li>
          </ul>
          <p>Please note that deletion or restriction may affect our ability to provide the Services.</p>
          <p>
            To exercise your rights, please contact us at{" "}
            <a href="mailto:support@espeak.it">support@espeak.it</a>.
          </p>
        </section>

        <section id="security">
          <h2>Data security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect <strong>Personal Data</strong>
            against unauthorized access, loss, alteration or disclosure.
          </p>
          <p>
            While we take reasonable steps to protect your information, no method of transmission
            over the internet or electronic storage is completely secure.
          </p>
        </section>

        <section id="third-parties">
          <h2>Third-party websites and services</h2>
          <p>
            Our website and <strong>App</strong> may contain links to third-party websites, applications or services.
            <strong>eSpeak</strong> is not responsible for the privacy practices of such third parties.
          </p>
          <p>
            We encourage you to review the privacy policies of any third-party services you access.
          </p>
        </section>

        <section id="changes">
          <h2>Changes to this Privacy Policy</h2>
          <p>
            We may update this <strong>Privacy Policy</strong> from time to time. Any material changes will be posted
            on this page and, where required by law, notified to you.
          </p>
        </section>

        <section id="inquiries">
          <h2>Privacy inquiries</h2>
          <p>
            If you have any questions or concerns regarding this <strong>Privacy Policy</strong> or the processing of
            your <strong>Personal Data</strong>, please contact:
          </p>
          <p>
            Email: <a href="mailto:support@espeak.it">support@espeak.it</a>
            <br />
            Telefono: +39 347 760 6837
            <br />
            Indirizzo: Milano, Italy
          </p>
          <p>
            If you are a resident of the EU/EEA, you also have the right to lodge a complaint with
            your local data protection authority.
          </p>
        </section>
      </article>
      </div>
      <Footer />
    </main>
  );
}


