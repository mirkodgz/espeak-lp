import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "eSpeak | Impara inglese con AI",
  short_name: "eSpeak",
    description: "Sblocca il tuo potenziale con il tuo tutor personale di AI English.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b3d4d",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}


