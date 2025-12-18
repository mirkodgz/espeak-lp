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
            INFORMATIVA SULLA PRIVACY
          </h1>
          <p className="text-sm text-muted-foreground">Ultimo aggiornamento: 12 novembre 2025</p>
        </header>

        <nav
          aria-label="Table of contents"
          className="mt-8 rounded-2xl border bg-card/30 px-5 py-4"
        >
          <p className="text-sm font-semibold text-foreground">In questa pagina</p>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <li><a className="hover:text-foreground hover:underline" href="#titolare">1. Titolare del trattamento</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#tipologie-dati">2. Tipologie di dati</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#dati-vocali">3. Dati vocali e conversazioni</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#ai-ml">4. Intelligenza Artificiale</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#base-giuridica">5. Base giuridica</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#assistenza">6. Assistenza clienti</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#login">7. Login e autenticazione</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#analytics">8. Analytics</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#acquisti">9. Acquisti in-app</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#cookie">10. Cookie</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#condivisione">11. Condivisione dei dati</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#conservazione">12. Conservazione</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#diritti">13. Diritti dell’utente</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#eta">14. Età minima</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#sicurezza">15. Sicurezza</a></li>
            <li><a className="hover:text-foreground hover:underline" href="#contatti">16. Contatti</a></li>
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
                <strong>espeak</strong> rispetta la tua privacy ed è impegnata a proteggere i dati personali che condividi con noi, in conformità al Regolamento (UE) 2016/679 (“GDPR”) e alla normativa applicabile.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Puoi navigare il nostro sito web senza fornire dati personali, ad eccezione dei cookie e di tecnologie simili, come descritto nella presente Informativa.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Quando utilizzi il nostro sito web o la nostra applicazione mobile, un’applicazione basata su intelligenza artificiale progettata per aiutare gli utenti a migliorare e raggiungere la fluidità nella lingua inglese (l’“App” o i “Servizi”), oppure quando fornisci volontariamente dati personali (ad esempio contattando l’assistenza), la presente Informativa descrive come raccogliamo, utilizziamo e proteggiamo tali dati.
              </p>
            </section>

            <hr className="border-border" />

            <section id="titolare">
              <h2>1. Titolare del trattamento</h2>
              <div className="bg-card p-6 rounded-xl border shadow-sm">
                <p className="font-medium text-lg mb-2">Phoebe Dellas Hoyt</p>
                <div className="space-y-1 text-muted-foreground">
                  <p>Milano, Italia</p>
                  <p> <a href="mailto:support@espeak.it" className="text-primary hover:underline">support@espeak.it</a></p>
                  <p>+39 347 760 6837</p>
                </div>
              </div>
            </section>

            <hr className="border-border" />

            <section id="tipologie-dati">
              <h2>2. Tipologie di dati trattati</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-accent/30 p-6 rounded-xl border">
                  <h3>2.1 Dati non personali</h3>
                  <p className="text-sm text-muted-foreground mb-4">Informazioni che non consentono l’identificazione diretta dell’utente, quali:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>dati statistici e di utilizzo dell’App</li>
                    <li>dati tecnici e di funzionamento</li>
                    <li>log di sistema</li>
                  </ul>
                  <p className="text-sm mt-4 font-medium">Utilizzati esclusivamente per analisi, sicurezza e miglioramento dei Servizi.</p>
                </div>

                <div className="bg-accent/30 p-6 rounded-xl border">
                  <h3>2.2 Dati personali</h3>
                  <p className="text-sm text-muted-foreground mb-4">Possiamo trattare:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>nome e cognome</li>
                    <li>indirizzo email</li>
                    <li>numero di telefono</li>
                    <li>credenziali di accesso (email, Apple ID, Google)</li>
                    <li>dati relativi all’attività di apprendimento</li>
                    <li>comunicazioni con l’assistenza clienti</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-border" />

            <section id="dati-vocali">
              <h2>3. Dati vocali e conversazioni</h2>
              <p className="text-lg">L’App consente di esercitarsi parlando in inglese con un tutor AI.</p>

              <div className="bg-primary/5 p-6 rounded-xl my-8 border-l-4 border-primary shadow-sm">
                <p className="font-bold text-lg text-primary flex items-center gap-2">
                  Importante (Apple-friendly)
                </p>
                <div className="mt-4 space-y-2 text-foreground/90">
                  <p>
                    Le registrazioni vocali vengono elaborate esclusivamente in tempo reale per fornire feedback immediato.
                  </p>
                  <p className="font-semibold text-primary">
                    Non vengono salvate, archiviate né conservate sui nostri server.
                  </p>
                </div>
              </div>

              <p>Le trascrizioni generate sono utilizzate solo durante la sessione di apprendimento per:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>analisi linguistica</li>
                <li>feedback su pronuncia e fluidità</li>
              </ul>
              <p className="mt-4 text-muted-foreground">I dati vocali non vengono utilizzati per identificare l’utente e non vengono venduti a terzi.</p>
            </section>

            <hr className="border-border" />

            <section id="ai-ml">
              <h2>4. Intelligenza Artificiale e Machine Learning</h2>
              <p>espeak utilizza sistemi di intelligenza artificiale per:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>fornire lezioni personalizzate</li>
                <li>migliorare l’esperienza di apprendimento</li>
              </ul>
              <p className="mt-4 p-4 bg-muted rounded-lg border">
                I dati testuali generati durante le sessioni possono essere utilizzati in forma aggregata e anonimizzata per migliorare i modelli AI.
                <br />
                <strong className="block mt-2 text-primary">Non utilizziamo dati vocali personali per l’addestramento diretto.</strong>
              </p>
            </section>

            <hr className="border-border" />

            <section id="base-giuridica">
              <h2>5. Base giuridica del trattamento</h2>
              <p>Il trattamento avviene sulla base di:</p>
              <ul className="grid sm:grid-cols-2 gap-4 not-prose">
                <li className="bg-card p-4 rounded-lg border shadow-sm flex items-center gap-3">
                  esecuzione del contratto
                </li>
                <li className="bg-card p-4 rounded-lg border shadow-sm flex items-center gap-3">
                  consenso dell’utente
                </li>
                <li className="bg-card p-4 rounded-lg border shadow-sm flex items-center gap-3">
                  obblighi di legge
                </li>
                <li className="bg-card p-4 rounded-lg border shadow-sm flex items-center gap-3">
                  legittimo interesse
                </li>
              </ul>
            </section>

            <hr className="border-border" />

            <section id="assistenza">
              <h2>6. Assistenza clienti</h2>
              <p className="text-lg">Quando contatti il supporto, utilizziamo i tuoi dati esclusivamente per rispondere alla richiesta.</p>
            </section>

            <section id="login">
              <h2>7. Login e autenticazione</h2>
              <p>L’App consente l’accesso tramite:</p>
              <ul className="flex flex-wrap gap-3 not-prose my-4">
                <li className="px-4 py-2 bg-muted rounded-full text-sm font-medium">Email e Password</li>
                <li className="px-4 py-2 bg-muted rounded-full text-sm font-medium">Apple Sign-In</li>
                <li className="px-4 py-2 bg-muted rounded-full text-sm font-medium">Google Sign-In</li>
              </ul>
              <p>I dati di autenticazione sono utilizzati esclusivamente per la gestione dell’account.</p>
            </section>

            <section id="analytics">
              <h2>8. Analytics</h2>
              <p>Utilizziamo (o potremmo utilizzare) strumenti di analytics anonimi per comprendere:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>utilizzo delle funzionalità</li>
                <li>prestazioni dell’App</li>
                <li>miglioramento dell’esperienza utente</li>
              </ul>
              <p className="mt-4 font-medium text-primary">Gli analytics non vengono utilizzati per tracciamento pubblicitario e non per identificare gli utenti.</p>
            </section>

            <hr className="border-border" />

            <section id="acquisti">
              <h2>9. Acquisti in-app e abbonamenti</h2>
              <div className="flex gap-4 items-center p-4 bg-muted/50 rounded-xl border">
                <div>
                  <p>I pagamenti sono gestiti esclusivamente da <strong>Apple App Store</strong> e <strong>Google Play Store</strong>.</p>
                  <p className="text-sm text-muted-foreground mt-1">espeak non raccoglie né conserva dati di pagamento.</p>
                </div>
              </div>
            </section>

            <section id="cookie">
              <h2>10. Cookie e tecnologie simili</h2>
              <p>
                Utilizziamo cookie tecnici e funzionali per garantire il corretto funzionamento del sito e dell’App.
                La disattivazione può limitare alcune funzionalità.
              </p>
            </section>

            <hr className="border-border" />

            <section id="condivisione">
              <h2>11. Condivisione dei dati</h2>
              <p>I dati possono essere condivisi solo con:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>fornitori tecnici essenziali (hosting, infrastruttura)</li>
                <li>autorità competenti, se richiesto dalla legge</li>
              </ul>
              <div className="flex gap-4 mt-6">
                <div className="px-4 py-2 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg text-sm font-bold">
                  Non vendiamo dati personali
                </div>
                <div className="px-4 py-2 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg text-sm font-bold">
                  Non facciamo advertising tracking
                </div>
              </div>
            </section>

            <section id="conservazione">
              <h2>12. Conservazione dei dati</h2>
              <p>
                I dati vengono conservati solo per il tempo necessario alla fornitura dei Servizi e agli obblighi di legge.
                I dati anonimi possono essere conservati più a lungo.
              </p>
            </section>

            <section id="diritti">
              <h2>13. Diritti dell’utente</h2>
              <p>Hai diritto a:</p>
              <ul className="grid sm:grid-cols-2 gap-2 not-prose">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> accesso, rettifica e cancellazione</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> limitazione o opposizione</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> portabilità dei dati</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> revoca del consenso</li>
              </ul>
              <p className="mt-4">Per esercitare questi diritti, scrivi a: <a href="mailto:support@espeak.it">support@espeak.it</a></p>
            </section>

            <hr className="border-border" />

            <section id="eta">
              <h2>14. Età minima</h2>
              <div className="flex items-center gap-4 p-4 border rounded-xl bg-card">
                <p className="font-medium">L’App è destinata esclusivamente a utenti di età pari o superiore a 16 anni.</p>
              </div>
            </section>

            <section id="sicurezza">
              <h2>15. Sicurezza</h2>
              <p>Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali.</p>
            </section>

            <section id="contatti">
              <h2>16. Contatti privacy</h2>
              <div className="mt-6 space-y-2">
                <p className="font-bold">Phoebe Dellas Hoyt</p>
                <p>Hai domande?</p>
                <p>
                  <a href="mailto:support@espeak.it" className="text-primary hover:underline">support@espeak.it</a>
                </p>
                <p>+39 347 760 6837</p>
                <p className="text-muted-foreground">Milano, Italia</p>
              </div>
            </section>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}


