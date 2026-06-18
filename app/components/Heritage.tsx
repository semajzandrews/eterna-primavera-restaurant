const IMG =
  "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1100&q=80";
// hands working masa / tortillas — stand-in, swap for real kitchen photo before LIVE

export default function Heritage() {
  return (
    <section id="herencia" className="relative bg-[var(--masa)] grain">
      <div className="huipil-thread weave-in" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-7 py-20 sm:px-12 sm:py-28 lg:grid-cols-2">
        {/* Copy */}
        <div className="reveal order-2 lg:order-1">
          <p className="mb-4 text-[0.64rem] uppercase tracking-[0.4em] text-[var(--oxblood)]">
            La eterna primavera
          </p>
          <h2 className="text-[2.6rem] leading-[1.02] text-[var(--cacao)] sm:text-[3.4rem]">
            Guatemala se llama{" "}
            <span className="italic text-[var(--oxblood)]">la tierra de la eterna primavera.</span>{" "}
            Aquí, también.
          </h2>
          <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-[var(--cacao-2)]">
            <p>
              Llevamos esa primavera a la mesa todos los días. El maíz se muele,
              la masa se palmea a mano, y cada tortilla sale caliente del comal.
              No hay atajos, no hay temporada. Solo la cocina de casa, hecha con
              el tiempo que merece.
            </p>
            <p>
              Desde el desayuno temprano hasta la cena, servimos lo que se come
              en Guatemala de verdad: chuchitos, caldos, mariscos y pan dulce de
              nuestra panadería. Cien por ciento guatemalteco, sin pedir disculpas.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-5 border-t border-[var(--cacao)]/15 pt-7">
            {[
              { n: "100%", l: "Guatemalteco" },
              { n: "329", l: "Reseñas" },
              { n: "7 días", l: "Abierto" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="feature-num text-[2.1rem] sm:text-[2.6rem]">{s.n}</dt>
                <dd className="mt-1 text-[0.66rem] uppercase tracking-[0.2em] text-[var(--cacao-2)]/80">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Framed image */}
        <div className="reveal reveal-d1 order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2px] border border-[var(--oxblood)]/30" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
              <div
                className="kenburns h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${IMG}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--cacao)]/45 to-transparent" />
              <span className="absolute bottom-4 left-5 text-[0.62rem] uppercase tracking-[0.3em] text-[var(--bone)]">
                Hecho a mano · todos los días
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
