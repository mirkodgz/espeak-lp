import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
    title: "Eliminazione account | espeak",
    robots: {
        index: false,
        follow: false,
    },
};

export default function DeleteAccountPage() {
    return (
        <main className="relative">
            <Header />
            <div className="container px-6 sm:px-10 mx-auto max-w-5xl py-12 sm:py-20">
                <header className="space-y-3">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                        Eliminazione account
                    </h1>
                    <p className="text-sm text-muted-foreground">Ultimo aggiornamento: 18 dicembre 2025</p>
                </header>

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
                                Questa pagina spiega come richiedere l’eliminazione definitiva del tuo account e dei dati personali associati all’app <strong>eSpeak - Active English</strong>, in conformità alle policy di Google Play.
                            </p>
                        </section>

                        <hr className="border-border" />

                        <section>
                            <h2>Come richiedere l’eliminazione dell’account</h2>
                            <div className="bg-card p-6 rounded-xl border shadow-sm">
                                <p className="mb-4">Per richiedere l’eliminazione del tuo account, invia un’email a:</p>
                                <p className="text-xl font-bold text-primary mb-6">
                                    <a href="mailto:support@espeak.it">support@espeak.it</a>
                                </p>
                                <p className="font-semibold mb-2">Nell’email indica chiaramente:</p>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    <li>l’indirizzo email associato al tuo account eSpeak</li>
                                    <li>la richiesta esplicita di eliminazione dell’account e dei dati associati</li>
                                </ul>
                            </div>
                        </section>

                        <hr className="border-border" />

                        <section>
                            <h2>Cosa succede dopo la richiesta</h2>
                            <p>Dopo aver ricevuto la tua richiesta:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>verificheremo l’identità dell’utente per motivi di sicurezza, al fine di evitare cancellazioni non autorizzate</li>
                                <li>procederemo con l’eliminazione dell’account e dei dati associati</li>
                            </ul>
                        </section>

                        <section>
                            <h2>Dati che vengono eliminati</h2>
                            <p>In seguito alla richiesta di eliminazione, verranno rimossi i dati associati all’account, inclusi:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>account utente (ID account)</li>
                                <li>indirizzo email e dati di profilo eventualmente forniti</li>
                                <li>dati di utilizzo e attività di apprendimento collegati all’account</li>
                                <li>eventuali comunicazioni con l’assistenza clienti collegate all’account</li>
                            </ul>
                        </section>

                        <hr className="border-border" />

                        <section>
                            <h2>Dati vocali</h2>
                            <div className="bg-accent/30 p-6 rounded-xl border">
                                <p className="mb-2">
                                    Le registrazioni vocali vengono elaborate esclusivamente in tempo reale per fornire feedback immediato all’utente.
                                </p>
                                <p className="font-bold text-primary">
                                    I dati vocali non vengono salvati né archiviati sui nostri server.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2>Tempi di elaborazione</h2>
                            <p>
                                La richiesta di eliminazione dell’account e dei dati associati verrà elaborata entro <strong>30 giorni</strong> dalla ricezione.
                            </p>
                        </section>

                        <section>
                            <h2>Nota (eccezioni legali)</h2>
                            <p>
                                In alcuni casi, potremmo essere tenuti a conservare determinati dati esclusivamente se richiesto da obblighi di legge o per la tutela dei nostri diritti (ad esempio prevenzione delle frodi o adempimenti fiscali e legali), e solo per il periodo di tempo strettamente necessario.
                            </p>
                        </section>

                        <hr className="border-border" />

                        <section>
                            <h2>Contatti</h2>
                            <p>Per qualsiasi domanda relativa alla privacy o alla cancellazione dell’account, puoi contattarci all’indirizzo:</p>
                            <div className="mt-6 space-y-2">
                                <p>
                                    <a href="mailto:support@espeak.it" className="text-primary font-bold hover:underline">support@espeak.it</a>
                                </p>
                            </div>
                        </section>
                    </div>
                </article>
            </div>
            <Footer />
        </main>
    );
}
