import Image from "next/image";
import PageIntroHeader from "@/components/PageIntroHeader";
import tallerDos from "/public/taller/tallerdos.webp";
import tallerTres from "/public/taller/tallertres.webp";
import tallerCuatro from "/public/taller/tallercuatro.webp";
import tallerCinco from "/public/taller/tallercinco.webp";
import tallerSeis from "/public/taller/tallerseis.webp";
import tallerSiete from "/public/taller/tallersiete.webp";
import tallerOcho from "/public/taller/tallerocho.webp";

export const metadata = {
  title: "El Taller",
};

export default function Taller() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-6 seamless-grid">
        <h1 className="sr-only">El Taller</h1>
        <PageIntroHeader
          kicker="Seccion"
          title="El Taller"
          description="Mira herramientas, espacio de trabajo y escenas reales del proceso artesanal diario."
        />
        <figure className="animate bg-[var(--panel)] border border-[var(--border)] col-span-4 p-4 lg:p-4">
          <Image
            src={tallerDos}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl "
          />
        </figure>

        <figure className="animate bg-[var(--panel)] border border-[var(--border)] col-span-2 flex justify-center align-middle p-4 lg:p-4">
          <Image
            src={tallerTres}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl object-fit"
          />
        </figure>

        <figure className="animate bg-[var(--panel)] border border-[var(--border)] col-span-2 p-4 lg:p-4">
          <Image
            src={tallerCuatro}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>
        <figure className="animate bg-[var(--panel)] border border-[var(--border)] col-span-2 p-4 lg:p-4">
          <Image
            src={tallerCinco}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>
        <figure className="animate bg-[var(--panel)] border border-[var(--border)] col-span-2 p-4 lg:p-4">
          <Image
            src={tallerSeis}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>
        <figure className="animate bg-[var(--panel)] border border-[var(--border)] col-span-2 lg:flex justify-center align-middle p-4 lg:p-4 hidden">
          <Image
            src={tallerSiete}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>
        <figure className="animate bg-[var(--panel)] border border-[var(--border)] col-span-4 p-4 lg:p-4">
          <Image
            src={tallerOcho}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl "
          />
        </figure>
      </section>
    </>
  );
}
