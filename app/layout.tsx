import type { Metadata } from "next";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eterna Primavera — Restaurante 100% Guatemalteco · Orange, NJ",
  description:
    "La cocina de la eterna primavera. Tortillas hechas a mano, chuchitos, caldo de res y mojarra frita en 357 Main St, City of Orange, NJ. Abierto los 7 días, 5:30 AM a 10 PM.",
  openGraph: {
    title: "Eterna Primavera · 100% Guatemalteco · Orange, NJ",
    description:
      "Comida guatemalteca hecha a mano. Tortillas, chuchitos, caldos y mariscos en Main Street, Orange.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className="antialiased">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=bespoke-serif@400,500,700,900,1&f[]=general-sans@400,500,600&f[]=tanker@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-masa text-cacao grain min-h-screen">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
