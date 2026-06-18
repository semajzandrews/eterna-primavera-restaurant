const PAN =
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1300&q=80";
// fresh bread / pan dulce — stand-in, swap for real panadería photo before LIVE

export default function Panaderia() {
  return (
    <section id="panaderia" className="relative overflow-hidden bg-[var(--oxblood)] text-[var(--bone)]">
      <div className="huipil-thread weave-in" />
      <div className="grid lg:grid-cols-2">
        {/* Image side */}
        <div className="relative min-h-[42vh] lg:min-h-[60vh]">
          <div
            className="kenburns absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${PAN}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--oxblood)]/85 lg:bg-gradient-to-r" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--oxblood)]/70 to-transparent lg:hidden" />
        </div>

        {/* Copy side */}
        <div className="reveal flex flex-col justify-center px-7 py-16 sm:px-12 lg:py-24">
          <p className="mb-4 text-[0.64rem] uppercase tracking-[0.4em] text-[var(--gold-2)]">
            Nuestra panadería
          </p>
          <h2 className="text-[2.5rem] leading-[1.04] text-[var(--bone)] sm:text-[3.2rem]">
            Pan dulce, horneado{" "}
            <span className="italic text-[var(--gold-2)]">cada mañana.</span>
          </h2>
          <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-[var(--masa)]/90">
            Junto al comedor late nuestra panadería. Conchas, champurradas,
            empanadas de manjar y el pan que acompaña el café desde antes del
            amanecer. Páselo a recoger en su camino al trabajo.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            {["Pan dulce", "Champurradas", "Empanadas", "Café de olla"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--gold-2)]/45 px-4 py-2 text-[0.74rem] uppercase tracking-[0.14em] text-[var(--masa)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
