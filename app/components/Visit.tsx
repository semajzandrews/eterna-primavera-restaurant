const DAYS = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const MAPS_SRC =
  "https://www.google.com/maps?q=357+Main+St,+City+of+Orange,+NJ+07050&output=embed";

export default function Visit() {
  return (
    <section id="visita" className="relative bg-[var(--masa)] grain">
      <div className="huipil-thread weave-in" />
      <div className="mx-auto max-w-7xl px-7 py-20 sm:px-12 sm:py-28">
        <header className="reveal mb-12 max-w-2xl">
          <p className="mb-4 text-[0.64rem] uppercase tracking-[0.4em] text-[var(--oxblood)]">
            Visítanos
          </p>
          <h2 className="text-[2.6rem] leading-[1.02] text-[var(--cacao)] sm:text-[3.4rem]">
            En el corazón de Main Street, Orange.
          </h2>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Info */}
          <div className="reveal space-y-9">
            <div>
              <h3 className="mb-3 text-[0.66rem] uppercase tracking-[0.28em] text-[var(--oxblood)]">
                Dirección
              </h3>
              <a
                href="https://www.google.com/maps?q=357+Main+St,+City+of+Orange,+NJ+07050"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.2rem] leading-snug text-[var(--cacao)] underline-offset-4 hover:underline"
                style={{ fontFamily: "var(--font-display)" }}
              >
                357 Main St
                <br />
                City of Orange, NJ 07050
              </a>
            </div>

            <div>
              <h3 className="mb-3 text-[0.66rem] uppercase tracking-[0.28em] text-[var(--oxblood)]">
                Teléfono
              </h3>
              <a
                href="tel:+19732802521"
                className="text-[1.2rem] text-[var(--cacao)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                (973) 280-2521
              </a>
            </div>

            <div>
              <h3 className="mb-3 text-[0.66rem] uppercase tracking-[0.28em] text-[var(--oxblood)]">
                Horario
              </h3>
              <ul className="divide-y divide-[var(--cacao)]/12 border-y border-[var(--cacao)]/12">
                {DAYS.map((d) => (
                  <li
                    key={d}
                    className="flex items-center justify-between py-2.5 text-[0.95rem]"
                  >
                    <span className="text-[var(--cacao-2)]">{d}</span>
                    <span className="tabular-nums text-[var(--cacao)]">
                      5:30 AM – 10:00 PM
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 flex items-center gap-2 text-[0.8rem] uppercase tracking-[0.14em] text-[var(--jade)]">
                <span className="h-2 w-2 rounded-full bg-[var(--jade-2)]" />
                Abierto los 7 días de la semana
              </p>
            </div>

            <a
              href="tel:+19732802521"
              className="inline-block rounded-full bg-[var(--oxblood)] px-7 py-3.5 text-[0.82rem] uppercase tracking-[0.14em] text-[var(--bone)] transition-transform hover:-translate-y-0.5"
            >
              Llamar ahora
            </a>
          </div>

          {/* Map */}
          <div className="reveal reveal-d1">
            <div className="relative h-[360px] overflow-hidden rounded-[2px] ring-1 ring-[var(--oxblood)]/25 sm:h-[460px]">
              <div className="absolute -inset-2 -z-10 rounded-[2px] border border-[var(--oxblood)]/25" />
              <iframe
                title="Mapa de Eterna Primavera, 357 Main St, City of Orange, NJ"
                src={MAPS_SRC}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
