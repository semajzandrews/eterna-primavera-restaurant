const HERO =
  "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1500&q=80";
// spread of Latin/Mexican plates, tortillas & guisos — reads unmistakably as the
// category; stand-in for real dish photo, swap before LIVE

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-[var(--oxblood-3)]">
      {/* Background plate, slow ken-burns drift */}
      <div className="absolute inset-0">
        <div
          className="kenburns absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO}')` }}
        />
        {/* Oxblood editorial wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--oxblood-3)]/82 via-[var(--oxblood-3)]/55 to-[var(--cacao)]/92" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--oxblood-3)]/80 via-transparent to-transparent" />
      </div>

      {/* Heritage frame */}
      <div className="heritage-frame rounded-[2px]" />

      {/* Heat shimmer — signature, restrained */}
      <div className="heat left-[16%]" style={{ animationDelay: "0s" }} />
      <div className="heat left-[22%]" style={{ animationDelay: "1.4s" }} />

      {/* Feature-spread content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-7 pb-16 pt-28 sm:px-12">
        <div className="reveal max-w-3xl">
          <p className="mb-5 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.42em] text-[var(--gold-2)]">
            <span className="inline-block h-px w-10 bg-[var(--gold-2)]/70" />
            City of Orange · New Jersey
          </p>

          <h1
            className="text-[var(--bone)]"
            style={{ fontFamily: "var(--font-display)", lineHeight: 0.92 }}
          >
            <span className="block text-[15vw] font-medium sm:text-[8.2rem]">
              Eterna
            </span>
            <span className="-mt-2 block text-[15vw] italic sm:text-[8.2rem]" style={{ color: "var(--gold-2)", fontWeight: 400 }}>
              Primavera
            </span>
          </h1>

          <p className="reveal reveal-d1 mt-7 max-w-xl text-[1.05rem] leading-relaxed text-[var(--masa)]/90 sm:text-[1.18rem]">
            La cocina de la eterna primavera. Tortillas hechas a mano, chuchitos
            envueltos en tusa, caldos que hierven despacio. Cien por ciento
            guatemalteco, en el corazón de Main Street.
          </p>

          <div className="reveal reveal-d2 mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="rounded-full bg-[var(--gold)] px-7 py-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-[var(--cacao)] transition-transform hover:-translate-y-0.5"
            >
              Ver el Menú
            </a>
            <a
              href="tel:+19732802521"
              className="rounded-full border border-[var(--bone)]/45 px-7 py-3.5 text-[0.82rem] uppercase tracking-[0.14em] text-[var(--bone)] transition-colors hover:bg-[var(--bone)]/10"
            >
              Llamar · Pedir
            </a>
          </div>

          {/* Status / hours strip */}
          <div className="reveal reveal-d3 mt-10 flex flex-wrap items-center gap-x-7 gap-y-2 text-[0.74rem] uppercase tracking-[0.16em] text-[var(--masa)]/80">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--jade-2)]" />
              Abierto los 7 días
            </span>
            <span>5:30 AM – 10:00 PM</span>
            <span className="text-[var(--gold-2)]">357 Main St</span>
          </div>
        </div>
      </div>

      {/* Bottom thread */}
      <div className="huipil-thread absolute bottom-0 left-0 z-10" />
    </section>
  );
}
