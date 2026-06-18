export default function Footer() {
  return (
    <footer className="relative bg-[var(--cacao)] text-[var(--masa)]">
      <div className="huipil-thread" />
      <div className="mx-auto max-w-7xl px-7 py-16 sm:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Wordmark + line */}
          <div>
            <p
              className="text-[2rem] leading-none text-[var(--bone)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Eterna Primavera
            </p>
            <p className="mt-2 text-[0.62rem] uppercase tracking-[0.34em] text-[var(--gold-2)]">
              Restaurante 100% Guatemalteco
            </p>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-[var(--masa)]/75">
              La cocina de la eterna primavera, en Main Street, Orange. Hecho a
              mano, todos los días.
            </p>
          </div>

          {/* Visit */}
          <div className="space-y-1.5 text-[0.95rem] text-[var(--masa)]/85">
            <h3 className="mb-3 text-[0.62rem] uppercase tracking-[0.28em] text-[var(--gold-2)]">
              Encuéntranos
            </h3>
            <p>357 Main St</p>
            <p>City of Orange, NJ 07050</p>
            <p>
              <a href="tel:+19732802521" className="hover:text-[var(--gold-2)]">
                (973) 280-2521
              </a>
            </p>
          </div>

          {/* Hours + CTA */}
          <div className="space-y-1.5 text-[0.95rem] text-[var(--masa)]/85">
            <h3 className="mb-3 text-[0.62rem] uppercase tracking-[0.28em] text-[var(--gold-2)]">
              Horario
            </h3>
            <p>Lunes a Domingo</p>
            <p className="text-[var(--bone)]">5:30 AM – 10:00 PM</p>
            <a
              href="tel:+19732802521"
              className="mt-5 inline-block rounded-full bg-[var(--gold)] px-6 py-3 text-[0.78rem] uppercase tracking-[0.14em] text-[var(--cacao)] transition-transform hover:-translate-y-0.5"
            >
              Llamar · Pedir
            </a>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[var(--masa)]/15 pt-6 sm:flex-row sm:items-center">
          <p className="text-[0.74rem] text-[var(--masa)]/60">
            © {new Date().getFullYear()} Eterna Primavera Restaurante · City of
            Orange, NJ
          </p>
          <a
            href="https://bysemaj.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.2em] text-[var(--masa)]/55 transition-colors hover:text-[var(--gold-2)]"
          >
            <span className="h-px w-6 bg-[var(--gold)]/50 transition-all group-hover:w-9" />
            Built by bysemaj.com
          </a>
        </div>
      </div>
    </footer>
  );
}
