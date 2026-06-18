const SECTIONS = [
  {
    title: "Desayunos",
    en: "Breakfast",
    items: [
      ["Desayuno Chapín", "Frijoles, huevo, plátano frito, crema y tortillas."],
      ["Atol de Elote", "Bebida caliente de maíz tierno, dulce y espesa."],
      ["Café y Pan Dulce", "Café de la casa con pan recién horneado."],
    ],
  },
  {
    title: "Antojitos",
    en: "Guatemalan favorites",
    items: [
      ["Chuchitos", "Tamalitos de masa en tusa, con recado y carne."],
      ["Tostadas", "De frijol, guacamol o salsa, coronadas con queso."],
      ["Empanadas con Manjar", "Dulces, rellenas de manjar de leche."],
    ],
  },
  {
    title: "Caldos & Platos Fuertes",
    en: "Soups & mains",
    items: [
      ["Caldo de Res", "Res y verduras, arroz, aguacate y tortillas."],
      ["Caldo de Mariscos", "Caldo rico de mariscos, servido bien caliente."],
      ["Pollo a la Plancha", "Pechuga a la plancha con arroz y ensalada."],
      ["Carne Asada", "Asada con frijol, guacamol y tortillas."],
    ],
  },
  {
    title: "Del Mar",
    en: "Seafood",
    items: [
      ["Mojarra Frita", "Tilapia entera frita, encebollado y limón."],
      ["Filete de Pescado", "Con arroz, frijol, ensalada y aguacate."],
      ["Ceviche Chapín Mixto", "Mariscos curtidos al estilo guatemalteco."],
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="relative bg-[var(--masa)] grain">
      <div className="huipil-thread weave-in" />
      <div className="mx-auto max-w-7xl px-7 py-20 sm:px-12 sm:py-28">
        <header className="reveal mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-[0.64rem] uppercase tracking-[0.4em] text-[var(--oxblood)]">
              El menú
            </p>
            <h2 className="text-[2.6rem] leading-[1.02] text-[var(--cacao)] sm:text-[3.4rem]">
              De la mañana a la noche, comida de casa.
            </h2>
          </div>
          <a
            href="tel:+19732802521"
            className="shrink-0 rounded-full bg-[var(--oxblood)] px-6 py-3 text-[0.78rem] uppercase tracking-[0.14em] text-[var(--bone)] transition-transform hover:-translate-y-0.5"
          >
            Llamar para pedir
          </a>
        </header>

        <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
          {SECTIONS.map((s, idx) => (
            <div key={s.title} className={`reveal ${idx % 2 ? "reveal-d1" : ""}`}>
              <div className="mb-5 flex items-baseline justify-between border-b border-[var(--oxblood)]/25 pb-3">
                <h3 className="text-[1.7rem] text-[var(--cacao)]">{s.title}</h3>
                <span className="text-[0.6rem] uppercase tracking-[0.24em] text-[var(--cacao-2)]/70">
                  {s.en}
                </span>
              </div>
              <ul className="space-y-5">
                {s.items.map(([name, desc]) => (
                  <li key={name} className="group">
                    <div className="flex items-baseline gap-3">
                      <span
                        className="text-[1.08rem] text-[var(--cacao)]"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                      >
                        {name}
                      </span>
                      <span className="h-px flex-1 translate-y-[-2px] bg-[var(--cacao)]/15" />
                    </div>
                    <p className="mt-1 text-[0.9rem] leading-snug text-[var(--cacao-2)]/85">
                      {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="reveal mt-14 text-[0.78rem] uppercase tracking-[0.18em] text-[var(--cacao-2)]/70">
          Menú de muestra. Pregunte por los especiales del día y los jugos
          naturales, atoles y batidos.
        </p>
      </div>
    </section>
  );
}
