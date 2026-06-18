const BANDS = [
  {
    num: "01",
    es: "Chuchitos",
    tag: "El clásico",
    body:
      "Pequeños tamales de masa envueltos en tusa de maíz, rellenos de recado y carne. La primera cosa que se pide, la última que se olvida.",
    img: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=1100&q=80",
  },
  {
    num: "02",
    es: "Caldo de Res",
    tag: "Cocido despacio",
    body:
      "Res, güisquil, elote y verduras que hierven horas hasta que el caldo se vuelve oro. Se sirve con arroz, aguacate y tortillas calientes.",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=80",
  },
  {
    num: "03",
    es: "Mojarra Frita",
    tag: "Del mar",
    body:
      "Tilapia entera frita y crujiente, con encebollado, limón y tortillas. Mariscos como en la costa, en pleno Main Street.",
    img: "https://images.unsplash.com/photo-1535140728325-a4d3707eee61?auto=format&fit=crop&w=1100&q=80",
  },
];

export default function Spread() {
  return (
    <section id="mesa" className="relative bg-[var(--cacao)] text-[var(--masa)]">
      <div className="huipil-thread weave-in" />
      <div className="mx-auto max-w-7xl px-7 py-20 sm:px-12 sm:py-28">
        <header className="reveal mb-14 max-w-2xl">
          <p className="mb-4 text-[0.64rem] uppercase tracking-[0.4em] text-[var(--gold-2)]">
            La mesa
          </p>
          <h2 className="text-[2.6rem] leading-[1.02] text-[var(--bone)] sm:text-[3.4rem]">
            Tres platos que cuentan toda la historia.
          </h2>
        </header>

        <div className="space-y-20 sm:space-y-28">
          {BANDS.map((b, i) => (
            <article
              key={b.num}
              className={`reveal grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative">
                <span className="feature-num pointer-events-none absolute -left-3 -top-12 z-10 text-[5.5rem] opacity-90 sm:-top-16 sm:text-[8rem]">
                  {b.num}
                </span>
                <div className="relative aspect-[5/4] overflow-hidden rounded-[2px] ring-1 ring-[var(--gold)]/25">
                  <div
                    className="kenburns h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${b.img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--cacao)]/35 to-transparent" />
                </div>
              </div>

              {/* Copy */}
              <div>
                <p className="mb-3 text-[0.62rem] uppercase tracking-[0.32em] text-[var(--clay)]">
                  {b.tag}
                </p>
                <h3 className="text-[2.3rem] leading-none text-[var(--bone)] sm:text-[3rem]">
                  {b.es}
                </h3>
                <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-[var(--masa)]/80">
                  {b.body}
                </p>
                <div className="mt-7 h-px w-24 bg-gradient-to-r from-[var(--gold)] to-transparent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
