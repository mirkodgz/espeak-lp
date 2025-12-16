import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Mail, MessageCircle, Clock, Bug } from "lucide-react";

export const metadata: Metadata = {
  title: "Support | espeak",
  description: "Contattaci per supporto, domande o informazioni su espeak",
};

export default function SupportPage() {
  return (
    <main className="relative">
      <Header />
      <div className="container px-6 sm:px-10 mx-auto max-w-3xl py-12 sm:py-20">
        <header className="space-y-3 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Supporto
          </h1>
          <p className="text-lg text-muted-foreground">
            Siamo qui per aiutarti. Contattaci per qualsiasi domanda, supporto o informazione.
          </p>
        </header>

        <div className="space-y-8">
          {/* Email Support */}
          <section className="rounded-2xl border bg-card/30 px-6 py-8">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Supporto Email</h2>
                <p className="text-muted-foreground mb-4">
                  Per assistenza tecnica, domande sull'app o problemi con il tuo account, scrivici a:
                </p>
                <a
                  href="mailto:support@espeak.it"
                  className="text-xl font-semibold text-primary hover:underline"
                >
                  support@espeak.it
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Ti risponderemo il prima possibile, di solito entro 24-48 ore.
                </p>
              </div>
            </div>
          </section>

          {/* General Information */}
          <section className="rounded-2xl border bg-card/30 px-6 py-8">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Informazioni Generali</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Email:</strong>{" "}
                    <a href="mailto:support@espeak.it" className="text-primary hover:underline">
                      support@espeak.it
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Telefono:</strong> +39 347 760 6837
                  </p>
                  <p>
                    <strong className="text-foreground">Indirizzo:</strong> Milano, Italy
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Response Time */}
          <section className="rounded-2xl border bg-card/30 px-6 py-8">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Tempi di Risposta</h2>
                <p className="text-muted-foreground">
                  Il nostro team di supporto è disponibile per aiutarti. Di solito rispondiamo alle email
                  entro 24-48 ore durante i giorni lavorativi. Per questioni urgenti, ti preghiamo di
                  indicarlo nell'oggetto della tua email.
                </p>
              </div>
            </div>
          </section>

          {/* Report Bugs */}
          <section className="rounded-2xl border bg-card/30 px-6 py-8">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Bug className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Segnala Problemi o Bug</h2>
                <p className="text-muted-foreground mb-4">
                  Hai trovato un bug o riscontrato un problema con l'app? Segnalacelo a:
                </p>
                <a
                  href="mailto:support@espeak.it?subject=Segnalazione Bug/Problema"
                  className="text-xl font-semibold text-primary hover:underline"
                >
                  support@espeak.it
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Per aiutarci a risolvere il problema più velocemente, ti preghiamo di includere:
                </p>
                <ul className="text-sm text-muted-foreground mt-2 list-disc list-inside space-y-1">
                  <li>Descrizione dettagliata del problema</li>
                  <li>Passaggi per riprodurre il problema</li>
                  <li>Versione dell'app e sistema operativo del dispositivo</li>
                  <li>Screenshot o video (se possibile)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Link */}
          <section className="rounded-2xl border bg-card/30 px-6 py-8">
            <h2 className="text-2xl font-bold mb-4">Domande Frequenti</h2>
            <p className="text-muted-foreground mb-4">
              Prima di contattarci, potresti trovare la risposta che cerchi nella nostra sezione{" "}
              <a href="/#faq" className="text-primary hover:underline">
                Domande Frequenti
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

