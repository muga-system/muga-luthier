import Image from "next/image";
import PageIntroHeader from "@/components/PageIntroHeader";
import CroquisvellutoVert from "@/public/croquis/guitarras-numeracion/velluto-vert.svg";
import CroquisvellutoHorz from "@/public/croquis/guitarras-numeracion/velluto-horz.svg";
import BuconeroCuerpo from "@/public/guitarras/velluto.webp";
import Gotoh from "@/public/svgs/marcas/gotoh.svg";
import Hosco from "@/public/svgs/marcas/hosco.svg";
import Diliberto from "@/public/svgs/marcas/diliberto.svg";
import Wilkinson from "@/public/svgs/marcas/wilkinson.svg";

import HeaderInstrumentos from "@/app/instrumentos/components/HeaderInstrumentos";
import ConectorMarcasVelluto from "@/app/instrumentos/components/ConectorMarcasVelluto";

export const metadata = {
  title: "Modelo Velluto",
};

export default function velluto() {
  const lista = [
    {
      descripcion: "Terminacion Tahitian Moral Mate de Twang Factory",
    },
    {
      descripcion: "Cuerpo de Okume.",
    },
    {
      descripcion: "Mango de Jequetiva.",
    },
    {
      descripcion: "Diapason de Guajubira.",
    },
    {
      descripcion: "Trastes Sintoms LTD 2.2 M",
    },
    {
      descripcion: "Clavijas Gotoh Vintage 3+3",
    },
    {
      descripcion: "Tensor doble acción termosellado.",
    },
    {
      descripcion: "Cejuela de grafito",
    },
    {
      descripcion: "Dots de Madreperla",
    },
    {
      descripcion: "Microfonos Diliberto",
    },
    {
      descripcion: "Electrónica Gotoh/Hosco",
    },
    {
      descripcion: "Perillas metalicas con detelle en nacar",
    },
    {
      descripcion: "Puente Tune-o-Matic Gotoh",
    },
  ];

  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-8 seamless-grid">
        <h1 className="sr-only">Modelo Velluto</h1>
        <PageIntroHeader
          title="Modelo Velluto"
          description="Consulta especificaciones, marcas asociadas y vista detallada del modelo."
          kicker="Ficha"
        />
        <figure className="relative bg-[var(--panel)] border border-[var(--border)] col-span-8 p-10 lg:p-10">
          <Image
            src={CroquisvellutoVert}
            alt="croquis velluto numerado"
            className="mx-auto h-[600px] lg:hidden"
          />
          <Image
            src={CroquisvellutoHorz}
            alt="croquis velluto numerado"
            className="hidden lg:block"
          />
        </figure>
        <section className="animate col-span-8">
          <ConectorMarcasVelluto />
        </section>

        <figure className="animate relative bg-[var(--panel)] border border-[var(--border)] col-span-8 lg:col-span-5 p-0">
          <section className="border-b border-[var(--border)] px-10 py-4">
            <p className="mono-ui text-xs text-[var(--muted)]">Especificaciones</p>
          </section>
          <ol className="space-y-3 text-sm lg:text-base px-10 py-8">
            {lista.map((item, index) => (
              <li key={index}>
                <p className="text-[var(--text-light)] leading-relaxed">
                  <span className="text-[var(--accent)] mr-3 mono-ui">{index + 1}.</span>
                  {item.descripcion}
                </p>
              </li>
            ))}
          </ol>
        </figure>

        <figure className="animate relative bg-[var(--panel)] border border-[var(--border)] col-span-8 lg:col-span-3 p-10 lg:p-10">
          <Image
            src={BuconeroCuerpo}
            alt="croquis velluto numerado"
            width={150}
            height={150}
            className="mx-auto h-[400px] w-auto lg:hover:scale-110 duration-200"
          />
        </figure>
      </section>
      <section className="animate">
        <HeaderInstrumentos />
      </section>
    </>
  );
}
