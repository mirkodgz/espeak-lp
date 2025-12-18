import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
    title: "Cookie Policy | espeak",
};

export default function CookiePolicyPage() {
    return (
        <main className="relative">
            <Header />
            <div className="container px-6 sm:px-10 mx-auto max-w-5xl py-12 sm:py-20">
                <header className="space-y-3">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                        COOKIE POLICY
                    </h1>
                    <p className="text-sm text-muted-foreground">Ultimo aggiornamento: 18 dicembre 2025</p>
                </header>

                <nav
                    aria-label="Table of contents"
                    className="mt-8 rounded-2xl border bg-card/30 px-5 py-4"
                >
                    <p className="text-sm font-semibold text-foreground">In questa pagina</p>
                    <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                        <li><a className="hover:text-foreground hover:underline" href="#titolare">1. Titolare del trattamento</a></li>
                        <li><a className="hover:text-foreground hover:underline" href="#cosa-sono">2. Cosa sono i cookie</a></li>
                        <li><a className="hover:text-foreground hover:underline" href="#tipologie">3. Tipologie di cookie utilizzate</a></li>
                        <li><a className="hover:text-foreground hover:underline" href="#mobile">4. Cookie e App mobile</a></li>
                        <li><a className="hover:text-foreground hover:underline" href="#gestione">5. Gestione dei cookie</a></li>
                        <li><a className="hover:text-foreground hover:underline" href="#conservazione">6. Conservazione dei cookie</a></li>
                        <li><a className="hover:text-foreground hover:underline" href="#privacy">7. Collegamento alla Privacy Policy</a></li>
                        <li><a className="hover:text-foreground hover:underline" href="#modifiche">8. Modifiche alla Cookie Policy</a></li>
                        <li><a className="hover:text-foreground hover:underline" href="#contatti">9. Contatti</a></li>
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
                                La presente Cookie Policy descrive l’uso dei cookie e di tecnologie simili da parte di <strong>espeak</strong> quando visiti il nostro sito web <a href="https://www.espeak.it">https://www.espeak.it</a> e utilizzi la nostra applicazione mobile (l’“App”).
                            </p>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                La presente informativa è redatta in conformità al Regolamento (UE) 2016/679 (“GDPR”), alla Direttiva ePrivacy e alla normativa italiana applicabile.
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

                        <section id="cosa-sono">
                            <h2>2. Cosa sono i cookie</h2>
                            <p>
                                I cookie sono piccoli file di testo che i siti web inviano al dispositivo dell’utente (computer, smartphone, tablet), dove vengono memorizzati per poi essere ritrasmessi agli stessi siti alla visita successiva.
                            </p>
                            <p>I cookie consentono al sito di:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>funzionare correttamente</li>
                                <li>ricordare le preferenze dell’utente</li>
                                <li>migliorare l’esperienza di navigazione</li>
                            </ul>
                        </section>

                        <hr className="border-border" />

                        <section id="tipologie">
                            <h2>3. Tipologie di cookie utilizzate</h2>

                            <div className="space-y-8">
                                <div className="bg-accent/30 p-6 rounded-xl border">
                                    <h3>3.1 Cookie tecnici (necessari)</h3>
                                    <p>espeak utilizza cookie tecnici, necessari per il corretto funzionamento del sito e dell’App.</p>
                                    <p>Questi cookie:</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>consentono la navigazione</li>
                                        <li>permettono l’accesso alle aree riservate</li>
                                        <li>garantiscono sicurezza e stabilità</li>
                                    </ul>
                                    <p className="mt-4 font-medium text-primary">Non richiedono il consenso dell’utente.</p>
                                </div>

                                <div className="bg-accent/30 p-6 rounded-xl border">
                                    <h3>3.2 Cookie di analisi (analytics)</h3>
                                    <p>espeak utilizza (o potrà utilizzare in futuro) cookie di analisi anonimi per raccogliere informazioni statistiche sull’utilizzo del sito e dell’App, come:</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>numero di visitatori</li>
                                        <li>pagine visitate</li>
                                        <li>durata delle sessioni</li>
                                        <li>interazioni generali</li>
                                    </ul>
                                    <p className="mt-4">Questi dati:</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>sono raccolti in forma aggregata</li>
                                        <li>non consentono l’identificazione dell’utente</li>
                                        <li>non vengono utilizzati per finalità pubblicitarie</li>
                                        <li>non vengono utilizzati per tracking cross-site</li>
                                    </ul>
                                    <p className="mt-4">Quando possibile, gli strumenti di analytics sono configurati con:</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>anonimizzazione degli indirizzi IP</li>
                                        <li>limitazione della conservazione dei dati</li>
                                    </ul>
                                </div>

                                <div className="bg-card p-6 rounded-xl border shadow-sm">
                                    <h3>Cookie di profilazione e marketing</h3>
                                    <p>espeak <strong>NON</strong> utilizza:</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>cookie di profilazione</li>
                                        <li>cookie pubblicitari</li>
                                        <li>cookie di remarketing</li>
                                        <li>strumenti di tracciamento per finalità di advertising</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <hr className="border-border" />

                        <section id="mobile">
                            <h2>4. Cookie e App mobile</h2>
                            <p>All’interno dell’App mobile, espeak utilizza esclusivamente:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>identificatori tecnici</li>
                                <li>strumenti funzionali e di sicurezza</li>
                                <li>analytics anonimi</li>
                            </ul>
                            <p className="mt-4 font-medium text-primary">Non viene effettuato alcun tracciamento pubblicitario né condivisione dei dati con reti pubblicitarie.</p>
                        </section>

                        <hr className="border-border" />

                        <section id="gestione">
                            <h2>5. Gestione dei cookie</h2>
                            <p>Puoi gestire o disabilitare i cookie direttamente dalle impostazioni del tuo browser.</p>
                            <p>Di seguito alcuni link alle istruzioni dei principali browser:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                                <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
                                <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                                <li><a href="https://support.microsoft.com/it-it/help/4027947" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                            </ul>
                            <p className="mt-4 text-muted-foreground">La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.</p>
                        </section>

                        <section id="conservazione">
                            <h2>6. Conservazione dei cookie</h2>
                            <p>
                                I cookie tecnici vengono conservati per il tempo strettamente necessario al loro funzionamento.
                            </p>
                            <p>
                                I cookie di analisi anonimi possono essere conservati per periodi limitati, nel rispetto dei principi di minimizzazione e proporzionalità.
                            </p>
                        </section>

                        <section id="privacy">
                            <h2>7. Collegamento alla Privacy Policy</h2>
                            <p>
                                Per maggiori informazioni sul trattamento dei dati personali, ti invitiamo a consultare la nostra Informativa sulla Privacy, disponibile al seguente link:
                            </p>
                            <p>
                                <a href="/privacy-policy" className="text-primary font-medium hover:underline">
                                    https://www.espeak.it/privacy-policy
                                </a>
                            </p>
                        </section>

                        <hr className="border-border" />

                        <section id="modifiche">
                            <h2>8. Modifiche alla Cookie Policy</h2>
                            <p>
                                La presente Cookie Policy può essere aggiornata in qualsiasi momento.
                            </p>
                            <p>
                                Eventuali modifiche rilevanti saranno pubblicate su questa pagina con indicazione della data di aggiornamento.
                            </p>
                        </section>

                        <section id="contatti">
                            <h2>9. Contatti</h2>
                            <p>Per qualsiasi domanda relativa all’uso dei cookie, puoi contattarci:</p>
                            <div className="mt-6 space-y-2">
                                <p className="font-bold">espeak</p>
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
