import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { asset } from "@/lib/asset";
import type { Lang } from "@/lib/i18n";

export default function VenuePage({ lang }: { lang: Lang }) {
  const isEs = lang === "es";

  return (
    <>
      
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 space-y-16">

        {/* Venue */}
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {isEs ? "Sede y viaje" : "Venue & travel"}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {isEs ? "Montevideo, Uruguay" : "Montevideo, Uruguay"}
          </h1>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {/* IPMon */}
            <div className="overflow-hidden rounded-xl border border-border bg-surface">
              <div className="relative h-52 w-full">
                <Image
                  src={asset("/img/venue/ipmon.jpg")}
                  alt="Institut Pasteur de Montevideo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-lg font-semibold text-ink">
                  Institut Pasteur de Montevideo
                </h2>
                <p className="mt-3 text-sm text-muted">
                  {isEs
                    ? "Institución de referencia en ciencias biológicas en Uruguay, afiliada a la Universidad de la República. Sede principal del workshop."
                    : "A leading biological sciences institution in Uruguay, affiliated with Universidad de la República. Main venue of the workshop."}
                </p>
                <a
                  href="https://www.pasteur.edu.uy"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
                >
                  www.pasteur.edu.uy →
                </a>
              </div>
            </div>
            {/* FCIEN */}
            <div className="overflow-hidden rounded-xl border border-border bg-surface">
              <div className="relative h-52 w-full">
                <Image
                  src={asset("/img/venue/fcien.jpg")}
                  alt="Facultad de Ciencias, UdelaR"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-lg font-semibold text-ink">
                  Facultad de Ciencias — UdelaR
                </h2>
                <p className="mt-3 text-sm text-muted">
                  {isEs
                    ? "La Facultad de Ciencias de la Universidad de la República, ubicada a pocos minutos del IPMon, es co-sede del workshop y referente en investigación científica en Uruguay."
                    : "The Faculty of Sciences of Universidad de la República, minutes from IPMon, is co-venue of the workshop and a leading research institution in Uruguay."}
                </p>
                <a
                  href="https://www.fcien.edu.uy"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
                >
                  www.fcien.edu.uy →
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Getting there */}
        <FadeIn delay={0.06}>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            {isEs ? "Cómo llegar" : "Getting there"}
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* Airport */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-semibold text-ink">
                ✈️ {isEs ? "Desde el Aeropuerto (MVD)" : "From the Airport (MVD)"}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {isEs
                  ? "El Aeropuerto Internacional de Carrasco está a ~25 km del IPMon. El trayecto en taxi o Uber dura aprox. 30–40 minutos dependiendo del tráfico (costo estimado: USD 20–30). También hay servicio de transfer/shuttle desde el aeropuerto hasta el centro de Montevideo."
                  : "Carrasco International Airport is ~25 km from IPMon. Taxi or Uber takes approx. 30–40 min depending on traffic (estimated cost: USD 20–30). Shuttle services are also available from the airport to downtown Montevideo."}
              </p>
              <p className="mt-3 text-xs text-subtle">
                {isEs ? "Uber y Cabify disponibles en Montevideo." : "Uber and Cabify are available in Montevideo."}
              </p>
            </div>

            {/* Tres Cruces */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-semibold text-ink">
                🚌 {isEs ? "Desde Terminal Tres Cruces" : "From Tres Cruces Bus Terminal"}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {isEs
                  ? "La Terminal Tres Cruces (terminal de ómnibus interdepartamental) está a ~3–5 km del IPMon. En taxi o Uber el trayecto demora aprox. 10–15 minutos (USD 4–8). También se puede acceder en bus urbano — consultá el planificador de STM (stm.com.uy) para la combinación más directa."
                  : "Tres Cruces bus terminal (intercity coaches) is ~3–5 km from IPMon. Taxi or Uber takes approx. 10–15 min (USD 4–8). Local buses also connect — check the STM route planner (stm.com.uy) for the most direct combination."}
              </p>
              <a
                href="https://www.stm.com.uy"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-xs font-medium text-accent hover:underline"
              >
                stm.com.uy →
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Weather */}
        <FadeIn delay={0.08}>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            {isEs ? "Clima en febrero" : "Weather in February"}
          </h2>
          <div className="mt-6 rounded-xl border border-border bg-surface p-6">
            <p className="text-sm leading-relaxed text-muted">
              {isEs
                ? "Febrero es pleno verano austral en Montevideo. Las temperaturas típicas oscilan entre 22 °C y 30 °C, con días soleados y noches cálidas. La brisa del Río de la Plata y del Atlántico suaviza el calor. Se recomienda ropa ligera, protector solar y llevar una capa liviana para las noches. Puede haber días con olas de calor que superan los 35 °C."
                : "February is midsummer in Montevideo. Typical temperatures range from 22 °C to 30 °C, with sunny days and warm evenings. The breeze from the Río de la Plata and the Atlantic tempers the heat. Light clothing, sunscreen and a thin layer for the evenings are recommended. Heat waves above 35 °C can occur."}
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs">
              {[
                { icon: "🌡️", label: isEs ? "Temp. media" : "Avg. temp.", value: "24–28 °C" },
                { icon: "☀️", label: isEs ? "Horas de sol" : "Daylight", value: isEs ? "~14 h" : "~14 h" },
                { icon: "💧", label: isEs ? "Humedad" : "Humidity", value: "~65 %" },
              ].map((f) => (
                <span key={f.label} className="flex items-center gap-1.5 rounded-lg border border-border bg-bg px-3 py-2 font-medium text-ink">
                  {f.icon} {f.label}: <span className="text-accent">{f.value}</span>
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Tourism */}
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            {isEs ? "Turismo y atracciones" : "Tourism & attractions"}
          </h2>
          <p className="mt-3 text-sm text-muted">
            {isEs
              ? "Montevideo combina cultura, gastronomía y playa. Te dejamos algunas recomendaciones:"
              : "Montevideo blends culture, gastronomy and beaches. Some highlights:"}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {(isEs ? [
              { title: "Rambla de Montevideo", desc: "22 km de paseo costero junto al Río de la Plata. Ideal para caminar, andar en bicicleta o simplemente disfrutar del atardecer.", img: "rambla.jpg" },
              { title: "Ciudad Vieja", desc: "El casco histórico: Plaza Independencia, Palacio Salvo, Mercado del Puerto (para el asado imperdible) y la Plaza Matriz.", img: "ciudad_vieja.jpg" },
              { title: "Pocitos y Playa Ramírez", desc: "Playas urbanas con chiringuitos, deportes acuáticos y ambiente veraniego a pocos minutos del centro.", img: "pocitos.jpg" },
              { title: "Mercado Agrícola", desc: "Mercado renovado con oferta gastronómica variada, ideal para el almuerzo o la merienda.", img: "mercado_agricola.jpg" },
              { title: "Estadio Centenario", desc: "Icónico estadio sede del Mundial de 1930 y Monumento Histórico Nacional. Un lugar de peregrinaje para los amantes del fútbol.", img: "estadio_centenario.jpg" },
              { title: "Parque Rodó y Las Canteras", desc: "El pulmón verde de Montevideo: jardines a orillas de la laguna, parque de diversiones y la pintoresca playa de Las Canteras.", img: "parque_rodo.jpg" },
              { title: "Colonia del Sacramento", desc: "Ciudad patrimonio UNESCO a 1 h en ferry desde Montevideo. Barrio histórico imperdible.", img: "colonia.jpg" },
              { title: "Punta del Este", desc: "El famoso balneario uruguayo, a ~2 h en ómnibus. Playas, gastronomía y la icónica Mano en la Arena.", img: "punta_del_este.jpg" },
            ] : [
              { title: "Rambla de Montevideo", desc: "22 km coastal promenade along the Río de la Plata. Perfect for walking, cycling or watching the sunset.", img: "rambla.jpg" },
              { title: "Ciudad Vieja (Old Town)", desc: "Historic quarter: Plaza Independencia, Palacio Salvo, Mercado del Puerto (for unmissable asado) and Plaza Matriz.", img: "ciudad_vieja.jpg" },
              { title: "Pocitos & Playa Ramírez", desc: "Urban beaches with beach bars, water sports and a summer atmosphere minutes from downtown.", img: "pocitos.jpg" },
              { title: "Mercado Agrícola", desc: "Renovated market hall with diverse food stalls — great for lunch or a snack.", img: "mercado_agricola.jpg" },
              { title: "Estadio Centenario", desc: "Iconic 1930 FIFA World Cup venue and UNESCO World Heritage monument. A pilgrimage site for football lovers.", img: "estadio_centenario.jpg" },
              { title: "Parque Rodó & Las Canteras", desc: "Montevideo's favourite green lung: lakeside gardens, an amusement park, and the rocky Las Canteras beach nearby.", img: "parque_rodo.jpg" },
              { title: "Colonia del Sacramento", desc: "UNESCO World Heritage city, 1 h by ferry from Montevideo. A historic gem.", img: "colonia.jpg" },
              { title: "Punta del Este", desc: "Uruguay's famous beach resort, ~2 h by bus. Beaches, restaurants and the iconic Hand sculpture.", img: "punta_del_este.jpg" },
            ]).map((item) => (
              <div key={item.title} className="overflow-hidden rounded-xl border border-border bg-surface transition hover:border-accent">
                <div className="relative h-44 w-full">
                  <Image
                    src={asset(`/img/venue/${item.img}`)}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://www.descubrimontevideo.uy/que-hacer"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            {isEs ? "Más info en descubrimontevideo.uy →" : "More at descubrimontevideo.uy →"}
          </a>
        </FadeIn>

      </div>
    </>
  );
}
