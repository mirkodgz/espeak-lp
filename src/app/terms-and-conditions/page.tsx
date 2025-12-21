import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Termini e Condizioni | espeak",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="relative">
      <Header />
      <div className="container px-6 sm:px-10 mx-auto max-w-5xl py-12 sm:py-20">
        <header className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Termini e Condizioni
          </h1>
          <p className="text-sm text-muted-foreground">Ultimo aggiornamento: 21 dicembre 2025</p>
        </header>

        <nav
          aria-label="Table of contents"
          className="mt-8 rounded-2xl border bg-card/30 px-5 py-4"
        >
          <p className="text-sm font-semibold text-foreground">In questa pagina</p>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <li>
              <a className="hover:text-foreground hover:underline" href="#app-servizi">
                1. L'App e i Servizi
              </a>
            </li>
            <li>
              <a className="hover:text-foreground hover:underline" href="#registrazione">
                2. Registrazione
              </a>
            </li>
            <li>
              <a className="hover:text-foreground hover:underline" href="#pagamenti">
                3. Pagamenti
              </a>
            </li>
            <li>
              <a className="hover:text-foreground hover:underline" href="#rimborsi">
                3.3. Rimborsi
              </a>
            </li>
            <li>
              <a className="hover:text-foreground hover:underline" href="#rinnovo-automatico">
                3.4. Rinnovo Automatico
              </a>
            </li>
            <li>
              <a className="hover:text-foreground hover:underline" href="#proprieta-intellettuale">
                4. Proprietà intellettuale e licenza
              </a>
            </li>
            <li>
              <a className="hover:text-foreground hover:underline" href="#contenuti-utente">
                5. Contenuti dell'Utente e Contenuti Generati
              </a>
            </li>
            <li>
              <a className="hover:text-foreground hover:underline" href="#limitazioni-uso">
                6. Limitazioni d'uso
              </a>
            </li>
            <li>
              <a className="hover:text-foreground hover:underline" href="#terze-parti">
                7. Siti di terze parti
              </a>
            </li>
            <li>
              <a className="hover:text-foreground hover:underline" href="#regole-piattaforma">
                8. Regole di utilizzo della piattaforma
              </a>
            </li>
            <li>
              <a className="hover:text-foreground hover:underline" href="#cessazione">
                9. Cessazione (Termination)
              </a>
            </li>
            <li>
              <a className="hover:text-foreground hover:underline" href="#privacy-policy">
                10. Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-foreground hover:underline" href="#garanzia">
                11. Garanzia ed esclusioni di responsabilità
              </a>
            </li>
            <li>
              <a className="hover:text-foreground hover:underline" href="#limitazione-responsabilita">
                12. Limitazione di responsabilità
              </a>
            </li>
            <li>
              <a className="hover:text-foreground hover:underline" href="#manleva">
                13. Manleva (Indemnification)
              </a>
            </li>
            <li>
              <a className="hover:text-foreground hover:underline" href="#segnalazione">
                14. Segnalazione violazioni di proprietà intellettuale
              </a>
            </li>
            <li>
              <a className="hover:text-foreground hover:underline" href="#varie">
                15. Varie
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
          <div className="space-y-8">
            <section id="introduction">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I presenti <strong>Termini e Condizioni</strong> ("Termini e Condizioni") costituiscono un accordo legalmente vincolante tra te, l'utente che utilizzerà la webapp e/o l'applicazione di <strong>eSpeak</strong> (di seguito "Tu" o "Utente"), ed <strong>eSpeak</strong> ("eSpeak" o "Noi"), in relazione all'uso dei servizi eSpeak (come definiti di seguito) disponibili tramite il sito <a href="http://espeak.it/">http://espeak.it/</a> e/o l'app (l'"<strong>App</strong>").
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Utilizzando l'<strong>App</strong>, accetti i presenti <strong>Termini e Condizioni</strong>, inclusi i termini della nostra Informativa Privacy ("<strong>Privacy Policy</strong>"), incorporata nei presenti Termini e Condizioni per riferimento. <strong>eSpeak</strong> si riserva il diritto, a propria esclusiva discrezione, di modificare i presenti Termini e Condizioni e qualsiasi altra policy qui richiamata, in qualsiasi momento, pubblicando le disposizioni modificate sul sito <a href="http://espeak.it/">http://espeak.it/</a>. Tali modifiche diverranno efficaci immediatamente al momento della pubblicazione. <strong>SE NON ACCETTI TUTTI I PRESENTI TERMINI E CONDIZIONI, NON ACCEDERE E NON UTILIZZARE ALCUNA PARTE DELL'APP E/O DEI SERVIZI.</strong>
              </p>
            </section>

            <hr className="border-border" />

            <section id="app-servizi">
              <h2><strong>1.</strong> L'App e i Servizi</h2>
              <p>
                <strong>espeak</strong> è un software di apprendimento linguistico che consente agli utenti di imparare e migliorare l'inglese attraverso lezioni interattive basate su conversazioni con un tutor alimentato da intelligenza artificiale (i "<strong>Servizi</strong>").
              </p>
              <p>
                I <strong>Servizi</strong> possono includere l'invio di notifiche push, messaggi, email, avvisi e comunicazioni tramite diversi mezzi.
              </p>
              <p>
                Puoi disattivare le notifiche push (ove applicabile) in qualsiasi momento modificando le impostazioni delle notifiche del tuo dispositivo e/o dell'<strong>App</strong>.
              </p>
              <div className="bg-muted/30 p-6 rounded-xl border">
                <p>
                  I <strong>Servizi</strong> sono disponibili esclusivamente a soggetti di età superiore a <strong>16 anni</strong>, in grado di stipulare contratti legalmente vincolanti ai sensi della legge applicabile, e per uso personale. Come ulteriormente specificato di seguito, <strong>espeak</strong> ti concede una licenza limitata, personale, non trasferibile, non esclusiva, non cedibile, non sublicenziabile per accedere e utilizzare i Servizi e l'App, il tutto secondo i presenti <strong>Termini e Condizioni</strong>.
                </p>
                <p className="mt-4 font-medium">
                  Dichiari e garantisci di avere il diritto e l'autorità di accettare i presenti <strong>Termini e Condizioni</strong> come individuo.
                </p>
              </div>
            </section>

            <hr className="border-border" />

            <section id="registrazione">
              <h2><strong>2.</strong> Registrazione</h2>
              <p>
                Come condizione per utilizzare tutti o parte dei contenuti dell'<strong>App</strong> e dei <strong>Servizi</strong>, potresti dover registrarti e creare un account utente. Il tuo account potrebbe darti accesso all'App, a parti della stessa e ad altre funzioni che <strong>espeak</strong> può stabilire e mantenere di volta in volta, a propria esclusiva discrezione.
              </p>
              <p>
                Durante il processo di registrazione, potresti dover pagare un eventuale costo di registrazione (se previsto), fornire a <strong>espeak</strong> alcune informazioni personali (inclusi, a titolo esemplificativo, nome, numero di telefono, indirizzo email, ecc.) e scegliere una password.
              </p>
              <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-100 dark:border-red-900/20">
                <p className="text-red-800 dark:text-red-300 font-medium mb-2">Obblighi dell'utente:</p>
                <p className="text-sm">
                  Devi fornire informazioni di registrazione <strong>accurate, complete e aggiornate</strong>, nel rispetto di tutte le leggi, regole e normative applicabili. Non puoi: <strong>(i)</strong> impersonare un'altra persona; <strong>(ii)</strong> utilizzare come nome utente un nome soggetto a diritti di terzi senza adeguata autorizzazione; o <strong>(iii)</strong> utilizzare l'account di un altro utente senza permesso.
                </p>
              </div>
              <p>
                <strong>espeak</strong> si riserva il diritto di rifiutare la registrazione o bloccare l'accesso all'<strong>App</strong> a propria esclusiva discrezione. Sei l'unico responsabile delle attività che avvengono tramite il tuo account e devi mantenere al sicuro le tue credenziali. Devi notificare immediatamente a espeak qualsiasi violazione di sicurezza o utilizzo non autorizzato del tuo account. <strong>espeak</strong> non sarà responsabile per perdite causate da utilizzi non autorizzati del tuo account.
              </p>
            </section>

            <hr className="border-border" />

            <section id="pagamenti">
              <h2><strong>3.</strong> Pagamenti</h2>

              <div className="grid gap-6">
                <div>
                  <h3><strong>3.1</strong> Contenuti e funzionalità a pagamento</h3>
                  <p>
                    Alcuni <strong>Servizi</strong> e funzionalità possono essere offerti solo tramite abbonamento mensile/annuale ("<strong>Contenuti a Pagamento</strong>"). Accetti di pagare le tariffe e gli altri importi indicati al momento della sottoscrizione dei Contenuti a Pagamento ("<strong>Tariffe</strong>"). Se il piano di pagamento è ricorrente, accetti di pagare le Tariffe in conformità al ciclo di fatturazione applicabile.
                  </p>
                  <p>
                    Riconosci e accetti di essere l'unico responsabile di tutte le tariffe e gli addebiti applicabili (incluse eventuali imposte), nonché di tutti gli acquisti effettuati da te o da chiunque abbia utilizzato il tuo account.
                  </p>
                  <p>
                    espeak utilizza processori di pagamento di terze parti, come Apple App Store e/o Google Play Store e/o altri fornitori (se applicabile), per facilitare i pagamenti dei Servizi. Il tuo acquisto sarà soggetto alle policy di pagamento, termini d'uso, policy rimborsi e altre policy applicabili del relativo processore. Puoi annullare un abbonamento a pagamento tramite il relativo processore di pagamento secondo i suoi termini e le sue policy.
                  </p>
                </div>

                <div>
                  <h3>3.2 Periodi di prova</h3>
                  <p>
                    Quando sottoscrivi <strong>Contenuti a Pagamento</strong>, <strong>espeak</strong> può, di volta in volta e a propria esclusiva discrezione, offrire un periodo di prova in cui tali Contenuti a Pagamento possono essere accessibili senza pagamento o a tariffa ridotta ("<strong>Periodo di Prova</strong>"). Il Periodo di Prova può variare in base a promozioni, tipo di abbonamento e durata selezionata al momento dell'acquisto.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                    <p>
                      Fornendo tali informazioni, accetti che, salvo annullamento prima della fine del Periodo di Prova, espeak possa iniziare automaticamente ad addebitarti i Contenuti a Pagamento a partire dal primo giorno successivo alla fine del Periodo di Prova, con cadenza mensile (o altra ricorrenza indicata), fino a quando non annullerai l'abbonamento tramite Apple App Store / Google Play Store (o altro processore applicabile). Se non desideri addebiti, devi annullare prima della fine del Periodo di Prova. In caso di annullamento, il tuo account avrà accesso solo alle parti gratuite dei Servizi.
                    </p>
                  </div>
                </div>

                <div id="rimborsi">
                  <h3><strong>3.3</strong> Rimborsi</h3>
                  <p>
                    I rimborsi per le sottoscrizioni vengono gestiti direttamente dai processori di pagamento di terze parti (Apple App Store e/o Google Play Store) secondo le loro rispettive politiche di rimborso. <strong>espeak</strong> non gestisce direttamente i rimborsi.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    <div className="bg-card p-4 rounded-xl border">
                      <h4 className="mt-0 font-bold text-lg">Per iOS (App Store)</h4>
                      <p className="text-sm text-muted-foreground mb-2">Per richiedere un rimborso:</p>
                      <ol className="text-sm space-y-1 list-decimal pl-4">
                        <li>Visita: <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></li>
                        <li>Accedi con il tuo Apple ID</li>
                        <li>Seleziona la sottoscrizione di espeak</li>
                        <li>Segui le istruzioni</li>
                      </ol>
                    </div>
                    <div className="bg-card p-4 rounded-xl border">
                      <h4 className="mt-0 font-bold text-lg">Per Android (Google Play)</h4>
                      <p className="text-sm">
                        I rimborsi vengono gestiti direttamente da Google tramite Google Play Store secondo le loro politiche di rimborso. Puoi richiedere un rimborso tramite le impostazioni del tuo account Google Play Store.
                      </p>
                    </div>
                  </div>

                  <p>
                    <strong>Importante:</strong>
                  </p>
                  <ul>
                    <li>I rimborsi vengono gestiti esclusivamente da Apple/Google</li>
                    <li><strong>espeak</strong> non gestisce direttamente i rimborsi</li>
                    <li>Per assistenza o domande sui rimborsi, puoi contattarci a: <a href="mailto:support@espeak.it">support@espeak.it</a></li>
                  </ul>
                </div>

                <div id="rinnovo-automatico">
                  <h3><strong>3.4</strong> Rinnovo Automatico</h3>
                  <p>
                    Le sottoscrizioni si rinnovano automaticamente alla fine di ogni periodo (mensile, trimestrale o annuale, a seconda del piano selezionato). Il rinnovo automatico garantisce la continuità del servizio senza interruzioni.
                  </p>
                  <div className="bg-accent/30 p-4 rounded-lg my-4">
                    <p className="font-semibold mb-2">Come disattivare il rinnovo automatico:</p>
                    <ul className="list-disc pl-5 m-0 space-y-1">
                      <li><strong>iOS:</strong> Impostazioni &gt; [Il tuo nome] &gt; Sottoscrizioni &gt; espeak &gt; Annulla sottoscrizione</li>
                      <li><strong>Android:</strong> Google Play Store &gt; Menu &gt; Pagamenti e sottoscrizioni &gt; espeak &gt; Annulla sottoscrizione</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Importante:</strong> La disattivazione del rinnovo automatico impedirà il rinnovo futuro, ma non rimborserà il periodo già pagato. Continuerai ad avere accesso ai Servizi fino alla fine del periodo di abbonamento corrente.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-border" />

            <section id="proprieta-intellettuale">
              <h2><strong>4.</strong> Proprietà intellettuale e licenza</h2>
              <h3><strong>4.1</strong> Titolarità</h3>
              <p>
                <strong>espeak</strong> mantiene ogni diritto, titolo e interesse sull'<strong>App</strong> e sui <strong>Servizi</strong> (inclusi tutti i diritti di proprietà intellettuale correlati). Fatto salvo quanto previsto nei presenti <strong>Termini e Condizioni</strong>, espeak ti concede una licenza limitata, non trasferibile, non esclusiva, non cedibile, non sublicenziabile per accedere e utilizzare i Servizi e l'App, a condizione che tu non alteri o modifichi alcuna parte dei Servizi se non quanto ragionevolmente necessario per l'uso previsto.
              </p>
              <h3><strong>4.2</strong> Contenuti di espeak</h3>
              <p>
                Tutte le foto, illustrazioni, disegni, animazioni, testi, script, design, grafica, loghi, audio, video, brani musicali, funzionalità interattive, marchi, nomi commerciali, "look and feel" e altri contenuti ottenuti da o tramite l'App, nonché qualsiasi altro contenuto (i "Contenuti") utilizzato, mostrato, incluso, incorporato, caricato, pubblicato o reso disponibile da espeak o da terzi per suo conto (esclusi i Contenuti dell'Utente, come definiti di seguito) sono di proprietà esclusiva di espeak e/o dei suoi licenzianti ("Contenuti di espeak").
              </p>
              <p>
                Non puoi utilizzare, scaricare, distribuire e/o copiare tali Contenuti, in tutto o in parte, senza previa autorizzazione scritta di espeak o del relativo titolare. A scanso di equivoci, non puoi copiare, riprodurre, modificare, esporre pubblicamente, eseguire pubblicamente, pubblicare, distribuire, vendere, concedere in licenza, noleggiare, trasferire, creare opere derivate o sfruttare in qualsiasi modo i Contenuti di espeak o parti di essi.
              </p>
              <h3><strong>4.3</strong> Feedback</h3>
              <p>
                Se invii a espeak feedback o suggerimenti riguardanti l'App e/o i Servizi, riconosci che espeak può utilizzarli a propria discrezione, senza obbligo di corrisponderti alcun compenso.
              </p>
            </section>

            <hr className="border-border" />

            <section id="contenuti-utente">
              <h2><strong>5.</strong> Contenuti dell'Utente e Contenuti Generati</h2>
              <div className="space-y-6">
                <div>
                  <h3><strong>5.1</strong> Contenuti dell'Utente</h3>
                  <p>
                    Puoi creare, archiviare, caricare, pubblicare, fornire, mostrare, condividere e altrimenti trasferire a terzi contenuti tramite l'App, inclusi dati personali, foto, testi e registrazioni audio (collettivamente, "Contenuti dell'Utente").
                  </p>
                </div>
                <div>
                  <h3><strong>5.2</strong> Condivisione e riservatezza</h3>
                  <p>
                    Qualora l'App includa funzionalità di condivisione, i Contenuti dell'Utente condivisi con altri utenti potrebbero essere accessibili ad altri. Nella misura in cui scegli di condividere i Contenuti dell'Utente con altri, tali contenuti potrebbero essere considerati non riservati. Alcune funzionalità possono essere disabilitate nelle impostazioni dell'account, ove disponibili.
                  </p>
                </div>
                <div>
                  <h3><strong>5.3</strong> Contenuti generati</h3>
                  <p>
                    In aggiunta, espeak può (ove previsto nell'App) creare contenuti derivati o riepiloghi utilizzando foto, testi o registrazioni audio presenti sul tuo dispositivo ("La tua Galleria"), solo previo tuo consenso, e renderli disponibili come contenuti generati dall'uso dei Servizi ("Contenuti Generati"). I Contenuti Generati creati dall'App possono essere soggetti a regole specifiche dell'App e, ove indicato, possono essere di proprietà esclusiva di espeak.
                  </p>
                  <p>
                    Non puoi utilizzare i Contenuti Generati per finalità commerciali, né copiarli, riprodurli, modificarli, pubblicarli, distribuirli, venderli, concederli in licenza o sfruttarli in altro modo se non nei limiti consentiti dall'App e/o dalla legge applicabile.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h3><strong>5.4</strong> Garanzie dell'Utente</h3>
                  <p>
                    Dichiari e garantisci di possedere o avere tutte le licenze, diritti, consensi, approvazioni e autorizzazioni necessari per utilizzare e autorizzare espeak a utilizzare, pubblicare, copiare, scaricare, archiviare, condividere, distribuire e trasferire i Contenuti dell'Utente o altri contenuti della tua Galleria, come previsto dai presenti Termini e Condizioni, senza violare diritti di terzi (copyright, privacy, immagine, marchi o altri diritti).
                  </p>
                </div>

                <div>
                  <h3><strong>5.5</strong> Licenza a favore di espeak</h3>
                  <p>
                    Concedi a espeak un diritto e una licenza irrevocabili, perpetui, non esclusivi, mondiali, royalty-free e sublicenziabili per utilizzare, copiare, scaricare, archiviare, modificare, adattare, tradurre, condividere, pubblicare, riprodurre, creare opere derivate, distribuire, eseguire e mostrare pubblicamente i tuoi Contenuti dell'Utente e altri contenuti della tua Galleria (foto, testi e registrazioni audio), nella misura necessaria a fornire o abilitare l'App e/o i Servizi, inclusa la creazione dei Contenuti Generati.
                  </p>
                  <p>
                    Puoi terminare questa licenza rimuovendo i tuoi Contenuti dell'Utente dall'App, ove tecnicamente disponibile. Riconosci tuttavia che espeak può conservare copie per un periodo ragionevole, nel rispetto delle leggi privacy applicabili, per backup, archiviazione, sicurezza o per far valere i presenti Termini e Condizioni e adempiere obblighi di legge.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-100 dark:border-red-900/20">
                  <h3 className="text-red-800 dark:text-red-300"><strong>5.6</strong> Responsabilità sui contenuti</h3>
                  <p className="text-sm">
                    Sei l'unico responsabile dei Contenuti dell'Utente che carichi o condividi e di qualsiasi danno a terzi che ne derivi. Comprendi che, utilizzando l'App, potresti essere esposto a contenuti provenienti da varie fonti. espeak non assume responsabilità e non fornisce garanzie circa accuratezza, validità, status legale, utilità, sicurezza o diritti di proprietà intellettuale di qualsiasi Contenuto dell'Utente pubblicato da te o da terzi. Rinunci a eventuali rimedi legali nei confronti di espeak relativi a tali contenuti, nei limiti consentiti dalla legge.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-border" />

            <section id="limitazioni-uso">
              <h2><strong>6.</strong> Limitazioni d'uso</h2>
              <ul className="grid gap-4 list-none pl-0">
                <li className="bg-card p-4 rounded-lg border">
                  <h3 className="mt-0 text-lg"><strong>6.1</strong> Autorità</h3>
                  <p className="mb-0 text-sm opacity-90">
                    Dichiari di avere l'autorità per accettare i presenti Termini e Condizioni e che qualsiasi utilizzo dei Servizi per conto di terzi è autorizzato da tali terzi. Se vieni a conoscenza di utilizzi non autorizzati dell'App, ti invitiamo a segnalarcelo.
                  </p>
                </li>
                <li className="bg-card p-4 rounded-lg border">
                  <h3 className="mt-0 text-lg"><strong>6.2</strong> Condotte vietate</h3>
                  <p className="mb-0 text-sm opacity-90">
                    Dichiari, garantisci e ti impegni a non utilizzare e a non permettere a terzi di utilizzare l'<strong>App</strong> e/o i <strong>Servizi</strong> in modo che: <strong>(i)</strong> sia diffamatorio, abusivo, molesto, minaccioso, razzista, violento, osceno o comunque lesivo; <strong>(ii)</strong> violi diritti di terzi (copyright, brevetti, marchi, segreti commerciali o altri diritti); <strong>(iii)</strong> sia illegale o incoraggi attività illegali; <strong>(iv)</strong> tenti di ottenere password, account o informazioni private di terzi; <strong>(v)</strong> contenga virus o codice dannoso; <strong>(vi)</strong> crei false identità o impersoni altri; <strong>(vii)</strong> includa spam, flooding, trolling o comportamenti distruttivi; o <strong>(viii)</strong> violi i presenti Termini e Condizioni o la legge applicabile.
                  </p>
                </li>
                <li className="bg-card p-4 rounded-lg border">
                  <h3 className="mt-0 text-lg"><strong>6.3</strong> Restrizioni tecniche</h3>
                  <p className="mb-0 text-sm opacity-90">
                    Non puoi, né consentire a terzi di: <strong>(a)</strong> aggirare o disabilitare misure di sicurezza; <strong>(b)</strong> pubblicare, distribuire, vendere, sublicenziare, affittare o rendere disponibili l'App/Servizi a terzi; <strong>(c)</strong> decompilare, fare reverse engineering o tentare di ricavare il codice sorgente; <strong>(d)</strong> modificare o creare opere derivate; <strong>(e)</strong> accedere tramite mezzi automatizzati (crawling, scraping, caching), salvo protocolli standard dei motori di ricerca e con consenso espresso; o <strong>(f)</strong> utilizzare l'App/Servizi in modo non autorizzato.
                  </p>
                </li>
              </ul>
            </section>

            <hr className="border-border" />

            <section id="terze-parti">
              <h2><strong>7.</strong> Siti di terze parti</h2>
              <p>
                L'App può contenere link a siti, applicazioni o funzionalità di terze parti, o riferimenti a prodotti/servizi di terzi non controllati da espeak. espeak non è responsabile per disponibilità, accuratezza, contenuti o pratiche privacy di tali terze parti e non ne approva i contenuti. L'uso di servizi di terze parti è regolato dai loro termini e privacy policy.
              </p>
            </section>

            <section id="regole-piattaforma">
              <h2><strong>8.</strong> Regole di utilizzo della piattaforma</h2>
              <p>
                Se scarichi l'App tramite una piattaforma di terze parti (es. Apple App Store, Google Play Store, ecc.) ("Fornitore della Piattaforma"), l'uso dell'App può essere soggetto anche alle regole di utilizzo del Fornitore della Piattaforma ("Regole di Utilizzo"). È tua responsabilità determinare quali Regole di Utilizzo siano applicabili. In caso di conflitto tra i presenti Termini e Condizioni e le Regole di Utilizzo applicabili che riguardino responsabilità del Fornitore della Piattaforma, prevarranno le Regole di Utilizzo del Fornitore della Piattaforma nella misura applicabile.
              </p>
              <p>
                Dichiari di non essere legalmente impedito a scaricare e/o utilizzare l'App ai sensi di leggi o Regole di Utilizzo applicabili.
              </p>
            </section>

            <hr className="border-border" />

            <section id="cessazione">
              <h2><strong>9.</strong> Cessazione (Termination)</h2>
              <p>
                espeak può terminare o sospendere la tua licenza, account e accesso all'App e/o ai Servizi (o parte di essi) immediatamente, senza preavviso e senza responsabilità, in caso di violazione dei presenti Termini e Condizioni o per motivi di sicurezza/legali.
              </p>
              <p>
                Le disposizioni che per loro natura devono sopravvivere alla cessazione (incluse, a titolo esemplificativo, proprietà, esclusioni di garanzia, indennizzo e limitazioni di responsabilità) resteranno in vigore. La cessazione non ti libera da obblighi maturati prima della cessazione.
              </p>
            </section>

            <section id="privacy-policy">
              <h2><strong>10.</strong> Privacy Policy</h2>
              <p>
                Riconosci e accetti che espeak può raccogliere determinati dati e informazioni tramite l'App e/o i Servizi. La raccolta e l'uso di tali informazioni sono disciplinati dalla nostra Privacy Policy (la "Privacy Policy"). Utilizzando l'App e/o i Servizi, dichiari di aver preso visione della Privacy Policy e accetti di esserne vincolato.
              </p>
            </section>

            <hr className="border-border" />

            <section id="garanzia">
              <h2><strong>11.</strong> Garanzia ed esclusioni di responsabilità</h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-xl border border-yellow-200 dark:border-yellow-900/20">
                <p className="font-bold text-sm">
                  RICONOSCI ESPRESSAMENTE CHE L'USO DELL'APP E DEI SERVIZI È A TUO ESCLUSIVO RISCHIO E CHE L'INTERO RISCHIO RELATIVO A QUALITÀ, PRESTAZIONI, ACCURATEZZA E IDONEITÀ RIMANE A TUO CARICO. L'APP E I SERVIZI SONO FORNITI "COSÌ COME SONO" E "COME DISPONIBILI", SENZA ALCUNA GARANZIA DI ALCUN TIPO.
                </p>
              </div>
              <p className="mt-6">
                espeak non garantisce che l'uso dei Servizi sarà ininterrotto o privo di errori, né che soddisferà requisiti specifici. espeak non fornisce garanzie, espresse o implicite, in relazione all'App, ai Servizi, ai Contenuti e al tuo utilizzo, incluse (ma non limitate a) garanzie implicite di commerciabilità, idoneità a uno scopo particolare, accuratezza, disponibilità, sicurezza, compatibilità, non violazione o completezza di risposte e risultati.
              </p>
              <p>
                L'APP È BASATA SU INTELLIGENZA ARTIFICIALE E MACHINE LEARNING. CIÒ SIGNIFICA CHE L'APP PUÒ RISPONDERE AI TUOI INPUT E CONVERSARE CON TE. L'OUTPUT DELL'APP, SPECIE NEL CORSO DI CONVERSAZIONI O INTERAZIONI ITERATIVE, DIPENDE IN MODO SIGNIFICATIVO DAI TUOI INPUT. L'APP VIETA L'INSERIMENTO DI CONTENUTI ESPLICITI, OSCENI, OFFENSIVI, ABUSIVI, RAZZISTI, BASATI SU ODIO O SIMILI. QUALSIASI RISPOSTA GENERATA IN AUTONOMIA IN RELAZIONE A CONTENUTI PROIBITI (O AD ALTRI CONTENUTI INSERITI) NON È APPROVATA DA espeak ED È A TUO ESCLUSIVO RISCHIO E RESPONSABILITÀ. espeak NON È RESPONSABILE PER IL CONTENUTO DI TALI RISPOSTE.
              </p>
              <p>
                espeak non fornisce servizi medici o psicologici e declina ogni responsabilità in tal senso. Se ritieni di avere un'emergenza medica o di salute mentale, contatta i servizi di emergenza o recati presso la struttura sanitaria più vicina.
              </p>
              <p>
                Se stai considerando il suicidio o ritieni di essere un pericolo per te stesso o per altri, devi interrompere immediatamente l'uso dei Servizi e contattare i servizi di emergenza o il personale medico competente.
              </p>
            </section>

            <section id="limitazione-responsabilita">
              <h2><strong>12.</strong> Limitazione di responsabilità</h2>
              <div className="bg-muted p-6 rounded-xl">
                <p className="text-sm font-medium">
                  NEI LIMITI MASSIMI CONSENTITI DALLA LEGGE, IN NESSUN CASO espeak, I SUOI TITOLARI, AMMINISTRATORI, DIRETTORI, DIPENDENTI O COLLABORATORI SARANNO RESPONSABILI PER DANNI PERSONALI, O PER DANNI SPECIALI, INCIDENTALI, PUNITIVI, CONSEQUENZIALI O INDIRETTI, INCLUSI COSTI DI LAVORO, PERDITA DI DATI, PERDITA DI AVVIAMENTO, PERDITA DI PROFITTI, PERDITA DI RISPARMI, PERDITA DI INFORMAZIONI AZIENDALI O PERDITA D'USO, IN RELAZIONE O DERIVANTI DAI PRESENTI TERMINI E CONDIZIONI, DAI SERVIZI, DALL'APP, O DAL TUO USO O IMPOSSIBILITÀ DI USARE SERVIZI/APP, SU QUALSIASI TEORIA DI RESPONSABILITÀ, ANCHE SE espeak È STATA AVVISATA DELLA POSSIBILITÀ DI TALI DANNI.
                </p>
                <p className="text-sm font-medium mt-4">
                  IN OGNI CASO, LA RESPONSABILITÀ AGGREGATA MASSIMA DI espeak RELATIVA A QUALSIASI RECLAMO NON SUPERERÀ L'IMPORTO EFFETTIVAMENTE PAGATO (SE PRESENTE) DA TE A espeak PER I SERVIZI OGGETTO DEL RECLAMO.
                </p>
              </div>
            </section>

            <hr className="border-border" />

            <section id="manleva">
              <h2><strong>13.</strong> Manleva (Indemnification)</h2>
              <p>
                Su prima richiesta, accetti di difendere, manlevare e tenere indenne espeak, i suoi titolari, amministratori, direttori, dipendenti e collaboratori da qualsiasi pretesa, responsabilità, costo, perdita, danno e spesa (incluse ragionevoli spese legali) derivanti da e/o causati da: (i) tuo uso, abuso o attività connesse all'App e/o ai Servizi; (ii) violazione dei presenti Termini e Condizioni o di diritti di terzi (inclusi diritti privacy o proprietà intellettuale); (iii) danni causati a terzi in relazione all'App.
              </p>
              <p>
                espeak si riserva il diritto, a proprie spese, di assumere la difesa e il controllo esclusivi di qualsiasi questione soggetta a manleva; ciò non esonera i tuoi obblighi di manleva, e in tal caso collaborerai pienamente. Non potrai definire transazioni relative a questioni soggette a manleva senza previo consenso scritto di espeak.
              </p>
            </section>

            <section id="segnalazione">
              <h2><strong>14.</strong> Segnalazione violazioni di proprietà intellettuale</h2>
              <p>
                Se ritieni in buona fede che materiali o contenuti disponibili tramite l'App e/o i Servizi violino i tuoi diritti, invia una comunicazione scritta tempestiva via email a: <a href="mailto:support@espeak.it">support@espeak.it</a>.
              </p>
            </section>

            <hr className="border-border" />

            <section id="varie">
              <h2><strong>15.</strong> Varie</h2>
              <p>
                I presenti Termini e Condizioni e la loro esecuzione sono disciplinati dalla legge italiana, senza considerare norme sul conflitto di leggi che comportino l'applicazione di leggi di altra giurisdizione. Le parti sottopongono la competenza esclusiva al foro competente di Milano, salvo disposizioni inderogabili a tutela del consumatore.
              </p>
              <p>
                I presenti Termini e Condizioni e la Privacy Policy costituiscono l'intero accordo tra te ed espeak in relazione all'uso dell'App e/o dei Servizi e sostituiscono ogni intesa precedente o contemporanea. espeak può aggiornare questi Termini e Condizioni; l'uso continuato dell'App e/o dei Servizi sarà soggetto ai Termini aggiornati. Se una modifica è inaccettabile, devi cessare l'uso dell'App e/o dei Servizi.
              </p>
              <p>
                Se un tribunale competente dovesse ritenere una clausola illegale, invalida o inapplicabile, le restanti clausole resteranno pienamente efficaci. Il mancato esercizio di un diritto da parte di espeak non costituisce rinuncia, salvo atto scritto.
              </p>
              <p>
                Riconosci che l'App può consumare banda del tuo piano dati mobile, ad esempio per caricare registrazioni audio e/o altri contenuti, se e nei limiti in cui tu lo consenta e come descritto anche nella Privacy Policy.
              </p>
              <p>
                espeak può modificare, sospendere o interrompere l'App e/o i Servizi (o parte di essi) in qualsiasi momento, inclusa la disponibilità di funzionalità o contenuti, senza preavviso o responsabilità.
              </p>
              <p>
                espeak può cedere a terzi i propri diritti e/o obblighi ai sensi dei presenti Termini e Condizioni senza il tuo consenso.
              </p>

              <div className="bg-card p-6 rounded-xl border mt-8">
                <p className="mb-2">Per domande sui presenti Termini e Condizioni o sull'App/Servizi, puoi contattarci a:</p>
                <div className="flex flex-col gap-1">
                  <a href="mailto:support@espeak.it" className="text-primary font-bold hover:underline">support@espeak.it</a>
                  <span className="text-muted-foreground">+39 347 760 6837</span>
                </div>
              </div>

              <p className="mt-8 text-center font-bold text-lg">
                DICHIARI DI AVER LETTO E COMPRESO I PRESENTI TERMINI E CONDIZIONI E DI ACCETTARLI.
              </p>


            </section>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}

