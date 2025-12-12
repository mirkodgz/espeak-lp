import {
  MessageCircleIcon,
  ZapIcon,
  SmileIcon,
  UserIcon,
  GlobeIcon,
  SparklesIcon,
} from "lucide-react";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "eSpeak",
  description: "La tua app per imparare inglese in modo veloce.",
  cta: "Inizia ora",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  hero: {
    headlineTop: "Porta il tuo inglese al livello successivo con",
    headlineBottomPrefix: "il tuo tutor personale di",
    headlineHighlight: "AI English",
    // Change this to "text-blue-600" if you want the Loora-like blue highlight
    highlightClassName: "text-primary",
    subheadline:
      "Parla inglese con sicurezza fin dal primo giorno. eSpeak è il tuo partner di conversazione con intelligenza artificiale, progettato per aiutarti a pensare, parlare ed esprimerti come un vero madrelingua.",
    availability: "📲 Disponibile su App Store e Google Play",
  },
  keywords: [
    "Imparare inglese",
    "AI tutor inglese",
    "Conversazione inglese",
    "App inglese",
    "Parlare inglese",
    "Pronuncia inglese",
    "Grammatica inglese",
    "Vocabolario inglese",
    "English speaking practice",
    "AI English tutor",
    "Imparare inglese velocemente",
  ],
  links: {
    email: "support@espeak.it",
    twitter: "#",
    discord: "#",
    github: "#",
    instagram: "#",
  },
  features: [
    {
      name: "Conversazioni reali",
      description:
        "Allenati con situazioni concrete: lavoro, viaggi, appuntamenti, colloqui, ordinare al bar o fare una telefonata importante.",
      icon: <MessageCircleIcon className="h-6 w-6" />,
    },
    {
      name: "Feedback immediato",
      description:
        "Correzione e feedback istantanei su pronuncia, grammatica e vocabolario mentre parli.",
      icon: <ZapIcon className="h-6 w-6" />,
    },
    {
      name: "Zero pressione",
      description:
        "Impara senza stress, al tuo ritmo. Nessun giudizio, nessuna ansia, nessun orario fisso.",
      icon: <SmileIcon className="h-6 w-6" />,
    },
    {
      name: "Personalizzazione",
      description:
        "Un inglese su misura per te: si adatta al tuo livello, accento e obiettivi personali o professionali.",
      icon: <UserIcon className="h-6 w-6" />,
    },
    {
      name: "Sempre disponibile",
      description:
        "Il tuo tutor di inglese è con te 24/7. Ti serve solo il telefono e la voglia di parlare.",
      icon: <GlobeIcon className="h-6 w-6" />,
    },
    {
      name: "Inglese reale",
      description:
        "Pratichi l'inglese come si usa nella vita reale: con errori, correzioni, contesto e fluidità.",
      icon: <SparklesIcon className="h-6 w-6" />,
    },
  ],
  featureHighlight: [
    {
      title: "Conversazioni reali in inglese, ogni giorno",
      description:
        "Allenati con situazioni concrete: lavoro, viaggi, appuntamenti, colloqui, ordinare al bar o fare una telefonata importante. Niente copioni rigidi. Niente frasi artificiali. Solo inglese vero.",
      imageSrc: "/screenshot03-profilo-rollpay.png",
      direction: "rtl" as const,
    },
    {
      title: "Correzione e feedback istantanei",
      description:
        "Mentre parli, eSpeak corregge la pronuncia, migliora la grammatica, arricchisce il vocabolario e ti spiega perché una frase funziona (o no). Impari parlando, non memorizzando.",
      imageSrc: "/roleplays-running.png",
      direction: "ltr" as const,
    },
    {
      title: "Impara senza stress, al tuo ritmo",
      description:
        "Nessun giudizio. Nessuna ansia. Nessun orario fisso. Puoi praticare 5 minuti o un'ora intera. Quando vuoi. Dove vuoi.",
      imageSrc: "/promemoria.png",
      direction: "rtl" as const,
    },
  ],
  bento: [
    {
      title: "Un partner di conversazione con AI creato per farti parlare davvero",
      content:
        "eSpeak non è un corso tradizionale. È un'esperienza di conversazione reale, alimentata dall'intelligenza artificiale, che si adatta al tuo livello, ai tuoi obiettivi e al tuo ritmo. Pratichi l'inglese come si usa nella vita reale: con errori, correzioni, contesto e fluidità.",
      imageSrc: "/Device-1.png",
      imageAlt: "Partner conversazione AI",
      fullWidth: true,
    },
    {
      title: "Conversazioni reali",
      content:
        "Allenati con situazioni concrete: lavoro, viaggi, appuntamenti, colloqui, ordinare al bar o fare una telefonata importante. Niente copioni rigidi. Solo inglese vero.",
      imageSrc: "/Device-2.png",
      imageAlt: "Conversazioni reali",
      fullWidth: false,
    },
    {
      title: "Feedback immediato",
      content:
        "Mentre parli, eSpeak corregge la pronuncia, migliora la grammatica, arricchisce il vocabolario e ti spiega perché una frase funziona (o no).",
      imageSrc: "/Device-3.png",
      imageAlt: "Feedback immediato",
      fullWidth: false,
    },
    {
      title: "Personalizzazione",
      content:
        "eSpeak si adatta al tuo livello (base, intermedio, avanzato), al tuo accento e modo di parlare, e ai tuoi obiettivi personali o professionali. Ogni conversazione è diversa, perché tu sei diverso.",
      imageSrc: "/Device-4.png",
      imageAlt: "Personalizzazione",
      fullWidth: true,
    },
  ],
  benefits: [
    {
      id: 1,
      text: "Vuoi vivere o lavorare in Italia",
      image: "/Device-6.png",
    },
    {
      id: 2,
      text: "Capisci l'inglese ma fai fatica a parlare",
      image: "/Device-7.png",
    },
    {
      id: 3,
      text: "Vuoi migliorare la fluidità orale",
      image: "/Device-8.png",
    },
    {
      id: 4,
      text: "Hai già provato corsi, ma ti blocchi quando devi conversare",
      image: "/Device-1.png",
    },
  ],
  pricing: [
    {
      name: "Mensile",
      href: "#",
      price: "€19,99",
      period: "mese",
      yearlyPrice: "€19,99",
      features: [
        "Accesso illimitato alle conversazioni",
        "Feedback istantaneo su pronuncia e grammatica",
        "Personalizzazione del livello e obiettivi",
        "Disponibile 24/7",
      ],
      description: "Perfetto per iniziare",
      buttonText: "Inizia ora",
      isPopular: false,
    },
    {
      name: "Trimestrale",
      href: "#",
      price: "€15,99",
      period: "mese",
      yearlyPrice: "€47,99",
      features: [
        "Tutto incluso nel piano mensile",
        "Risparmio del 20% rispetto al mensile",
        "Pagamento unico per 3 mesi",
        "Accesso immediato a tutte le funzionalità",
      ],
      description: "Ideale per un impegno a medio termine",
      buttonText: "Scegli trimestrale",
      isPopular: true,
    },
    {
      name: "Annuale",
      href: "#",
      price: "€9,99",
      period: "mese",
      yearlyPrice: "€113,99",
      features: [
        "Tutto incluso nel piano mensile",
        "Risparmio del 53% rispetto al mensile",
        "Pagamento unico per 12 mesi",
        "Miglior rapporto qualità-prezzo",
      ],
      description: "La scelta migliore per risultati duraturi",
      buttonText: "Scegli annuale",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "Come funziona eSpeak?",
      answer: (
        <span>
          eSpeak è un tutor di conversazione con intelligenza artificiale che ti permette di praticare l'inglese attraverso conversazioni reali. L'AI si adatta al tuo livello, corregge i tuoi errori in tempo reale e ti aiuta a migliorare pronuncia, grammatica e vocabolario mentre parli.
        </span>
      ),
    },
    {
      question: "Devo avere già un livello avanzato per usare eSpeak?",
      answer: (
        <span>
          No, eSpeak si adatta a tutti i livelli: base, intermedio e avanzato. L'AI personalizza le conversazioni in base alle tue capacità attuali e ai tuoi obiettivi, permettendoti di progredire al tuo ritmo.
        </span>
      ),
    },
    {
      question: "Quanto tempo devo dedicare ogni giorno?",
      answer: (
        <span>
          Non c'è un tempo minimo richiesto. Puoi praticare quando vuoi, anche solo 5 minuti al giorno. La flessibilità è uno dei punti di forza di eSpeak: impari senza stress e senza orari fissi.
        </span>
      ),
    },
    {
      question: "Cosa rende eSpeak diverso da altri corsi di inglese?",
      answer: (
        <span>
          eSpeak non è un corso tradizionale con lezioni strutturate. È un'esperienza di conversazione reale dove pratichi l'inglese come si usa nella vita quotidiana, con feedback immediato e personalizzazione totale. Impari parlando, non memorizzando.
        </span>
      ),
    },
  ],
  footer: [
    {
      id: 1,
      menu: [
        { href: "#", text: "Features" },
        { href: "#", text: "Pricing" },
        { href: "#", text: "About Us" },
        { href: "#", text: "Blog" },
        { href: "#", text: "Contact" },
      ],
    },
  ],
  testimonials: [
    {
      id: 1,
      text: "Senza esagerare, eSpeak è il modo più naturale e veloce con cui ho imparato a parlare inglese. Finalmente riesco a conversare senza ansia!",
      name: "Maria Rodriguez",
      role: "Studentessa universitaria",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      text: "Dopo anni di corsi tradizionali, finalmente ho trovato qualcosa che funziona davvero. Le correzioni immediate mi hanno fatto migliorare più in 2 mesi che in 2 anni!",
      name: "James Thompson",
      role: "Imprenditore",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 3,
      text: "Mi trasferisco a Milano per lavoro e avevo bisogno di migliorare velocemente. eSpeak mi ha dato la sicurezza per affrontare colloqui e riunioni in inglese.",
      name: "Sophie Martin",
      role: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 4,
      text: "La cosa migliore è che posso praticare quando voglio, anche solo 10 minuti prima di dormire. Nessuna pressione, solo conversazione naturale.",
      name: "Luca Bianchi",
      role: "Studente",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 5,
      text: "Capivo l'inglese ma non riuscivo a parlare. Con eSpeak ho superato il blocco e ora converso tranquillamente con i miei colleghi.",
      name: "Emma Wilson",
      role: "Designer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 6,
      text: "Finalmente un'app che si adatta a me invece di costringermi a seguire un programma rigido. Ogni conversazione è diversa e interessante.",
      name: "Andrea Rossi",
      role: "Freelancer",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 7,
      text: "Le situazioni reali sono fantastiche! Ho praticato come ordinare al ristorante e fare una telefonata importante. Utile per la vita quotidiana.",
      name: "Sarah Johnson",
      role: "Expat in Italia",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 8,
      text: "Il feedback istantaneo è incredibile. Vedo subito dove sbaglio e perché, e questo mi aiuta a non ripetere gli stessi errori.",
      name: "Marco Ferrari",
      role: "Sviluppatore software",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
