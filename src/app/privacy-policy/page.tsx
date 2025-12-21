import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | espeak",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative">
      <Header />
      <div className="container px-6 sm:px-10 mx-auto max-w-5xl py-12 sm:py-20">
        <header className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Privacy Policy – espeak
          </h1>
          <p className="text-sm text-muted-foreground">Ultimo aggiornamento: 21 dicembre 2025</p>
        </header>

        <nav
          aria-label="Table of contents"
          className="mt-8 rounded-2xl border bg-card/30 px-5 py-4"
        >
          <p className="text-sm font-semibold text-foreground">In questa pagina</p>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <li><a className="hover:text-foreground hover:underline" href="#titolare">1. Titolare del trattamento</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#tipologie-dati">2. Tipologie di dati trattati</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#finalita">3. Finalità del trattamento</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#analisi">4. Analisi e monitoraggio</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#pagamenti">5. Pagamenti e abbonamenti</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#terze-parti">6. Servizi di terze parti</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#conservazione">7. Conservazione dei dati</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#eliminazione">8. Eliminazione account</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#diritti">9. Diritti dell’utente</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#sicurezza">10. Sicurezza</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#eta">11. Età minima</a></li>
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
          <div className="space-y-8">
            <section>
              <p className="text-lg leading-relaxed text-muted-foreground">
                La presente Informativa sulla Privacy descrive come <strong>espeak</strong> (“noi”, “ci” o “nostro”) raccoglie, utilizza e protegge i dati personali degli utenti che utilizzano l’applicazione mobile <strong>espeak – Active English</strong>.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                espeak tratta i dati personali in conformità al Regolamento (UE) 2016/679 (GDPR) e alle linee guida applicabili di Apple App Store e Google Play Store.
              </p>
            </section>

            <hr className="border-border" />

            <section id="titolare">
              <h2>1. Titolare del trattamento</h2>
              <div className="bg-card p-6 rounded-xl border shadow-sm">
                <p className="font-medium text-lg mb-2">Phoebe Dellas Hoyt</p>
                <div className="space-y-1 text-muted-foreground">
                  <p>Sede: Milano, Italia</p>
                  <p>Email di contatto: <a href="mailto:support@espeak.it" className="text-primary hover:underline">support@espeak.it</a></p>
                </div>
              </div>
            </section>

            <hr className="border-border" />

            <section id="tipologie-dati">
              <h2>2. Tipologie di dati trattati</h2>

              <h3>2.1 Dati di contatto</h3>
              <p>Per la creazione e la gestione dell’account, espeak raccoglie esclusivamente:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>nome</li>
                <li>indirizzo email</li>
              </ul>
              <p>Questi dati sono necessari per:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>creare e gestire l’account</li>
                <li>autenticare l’utente</li>
                <li>consentire l’accesso alle funzionalità dell’app</li>
              </ul>
              <p className="mt-4 font-medium">espeak non richiede né raccoglie numeri di telefono o indirizzi fisici degli utenti.</p>

              <h3>2.2 Identificativi</h3>
              <p>espeak utilizza:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>ID utente (identificativo interno dell’account)</li>
              </ul>
              <p>L’ID utente è utilizzato esclusivamente per collegare i dati all’account e per garantire il corretto funzionamento del servizio. Non viene utilizzato per finalità pubblicitarie o di tracciamento esterno.</p>

              <h3>2.3 Dati di utilizzo e progresso educativo</h3>
              <p>Per consentire all’utente di visualizzare e monitorare i propri progressi di apprendimento, espeak tratta dati relativi a:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>avanzamento nei percorsi didattici</li>
                <li>completamento di esercizi, sfide e roleplay</li>
                <li>livello e risultati raggiunti</li>
              </ul>
              <p>Questi dati vengono utilizzati esclusivamente per finalità educative, come:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>mostrare il progresso all’utente</li>
                <li>sbloccare nuovi contenuti</li>
                <li>adattare il percorso di apprendimento</li>
              </ul>
              <p>L’analisi del progresso avviene tramite strumenti tecnici interni e servizi di terze parti utilizzati per l’infrastruttura dell’app (ad esempio Supabase). Tali dati non vengono utilizzati per pubblicità né per profilazione a fini di marketing.</p>

              <h3>2.4 Dati vocali</h3>
              <p>Durante le sessioni di pratica di speaking, l’app utilizza la voce dell’utente per fornire feedback immediato su pronuncia e fluidità.</p>
              <div className="bg-primary/5 p-6 rounded-xl my-6 border-l-4 border-primary shadow-sm">
                <p className="font-semibold text-primary mb-2">Le registrazioni vocali:</p>
                <ul className="list-disc pl-5 space-y-1 mb-0">
                  <li>vengono elaborate esclusivamente in tempo reale</li>
                  <li>non vengono salvate</li>
                  <li>non vengono archiviate</li>
                  <li>non vengono conservate sui server di espeak</li>
                </ul>
              </div>
              <p>I dati vocali non vengono utilizzati per identificare l’utente né per finalità pubblicitarie.</p>

              <h3>2.5 Contenuti testuali e chat</h3>
              <p>espeak non salva né conserva le conversazioni o i messaggi generati durante le interazioni educative con il tutor AI.</p>
              <p>I contenuti testuali vengono utilizzati solo temporaneamente per generare risposte in tempo reale e non vengono archiviati.</p>
            </section>

            <hr className="border-border" />

            <section id="finalita">
              <h2>3. Finalità del trattamento</h2>
              <p>I dati personali raccolti vengono utilizzati esclusivamente per:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>fornire le funzionalità educative dell’app</li>
                <li>gestire l’account dell’utente</li>
                <li>monitorare e mostrare i progressi di apprendimento</li>
                <li>migliorare l’esperienza educativa e il funzionamento del servizio</li>
              </ul>
              <p className="mt-4 px-4 py-3 bg-muted rounded-lg border inline-block">
                <strong>espeak non vende i dati personali</strong> e non utilizza i dati per pubblicità comportamentale o marketing di terze parti.
              </p>
            </section>

            <section id="analisi">
              <h2>4. Analisi e monitoraggio del servizio</h2>
              <p>espeak <strong>non utilizza Google Analytics</strong> né strumenti di analisi pubblicitaria.</p>
              <p>Le analisi effettuate sono limitate a:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>monitoraggio tecnico del servizio</li>
                <li>analisi del progresso educativo degli utenti</li>
              </ul>
              <p>Queste analisi avvengono tramite strumenti interni e fornitori tecnici e sono utilizzate esclusivamente per migliorare il servizio e l’esperienza di apprendimento.</p>
            </section>

            <hr className="border-border" />

            <section id="pagamenti">
              <h2>5. Pagamenti e abbonamenti</h2>
              <p>I pagamenti vengono gestiti esclusivamente da:</p>
              <ul className="grid sm:grid-cols-2 gap-4 not-prose my-4">
                <li className="bg-card p-3 rounded-lg border text-center font-medium">Apple App Store</li>
                <li className="bg-card p-3 rounded-lg border text-center font-medium">Google Play Store</li>
              </ul>
              <p>espeak:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>non raccoglie dati di pagamento</li>
                <li>non ha accesso a carte di credito o informazioni bancarie</li>
              </ul>
              <p>Riceviamo solo una conferma tecnica dello stato dell’abbonamento per abilitare le funzionalità premium.</p>
            </section>

            <section id="terze-parti">
              <h2>6. Servizi di terze parti</h2>
              <p>Per il funzionamento tecnico dell’app, espeak utilizza fornitori affidabili, tra cui:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Supabase</strong> (autenticazione, database e gestione dei dati di progresso)</li>
                <li><strong>RevenueCat</strong> (gestione degli abbonamenti)</li>
              </ul>
              <p>Questi fornitori trattano i dati esclusivamente per conto di espeak e in conformità al GDPR.</p>
            </section>

            <section id="conservazione">
              <h2>7. Conservazione dei dati</h2>
              <p>I dati personali sono conservati solo per il tempo strettamente necessario a fornire il servizio o per adempiere a obblighi di legge, se applicabili.</p>
            </section>

            <hr className="border-border" />

            <section id="eliminazione">
              <h2>8. Eliminazione dell’account e dei dati</h2>
              <p>L’utente può richiedere in qualsiasi momento la cancellazione dell’account e dei dati associati.</p>
              <p>Le istruzioni sono disponibili alla pagina:</p>
              <p><a href="https://www.espeak.it/delete-account">https://www.espeak.it/delete-account</a></p>
              <p>La richiesta viene elaborata entro 30 giorni.</p>
            </section>

            <section id="diritti">
              <h2>9. Diritti dell’utente</h2>
              <p>L’utente può esercitare i diritti previsti dal GDPR (accesso, rettifica, cancellazione, limitazione, opposizione) scrivendo a: <a href="mailto:support@espeak.it">support@espeak.it</a></p>
            </section>

            <section id="sicurezza">
              <h2>10. Sicurezza</h2>
              <p>espeak adotta misure tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita o uso improprio.</p>
            </section>

            <section id="eta">
              <h2>11. Età minima</h2>
              <div className="flex items-center gap-4 p-4 border rounded-xl bg-card">
                <p className="font-medium">L’app è destinata esclusivamente a utenti di età pari o superiore a 16 anni.</p>
              </div>
            </section>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}
