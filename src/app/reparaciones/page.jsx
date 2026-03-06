import Image from "next/image";
import PageIntroHeader from "@/components/PageIntroHeader";

import uno from "@/public/reparaciones/1.webp";
import dos from "@/public/reparaciones/2.webp";
import tres from "@/public/reparaciones/3.webp";
import cuatro from "@/public/reparaciones/4.webp";
import cinco from "@/public/reparaciones/5.webp";
import seis from "@/public/reparaciones/6.webp";
import siete from "@/public/reparaciones/7.webp";
import ocho from "@/public/reparaciones/8.webp";

export const metadata = {
  title: "Reparaciones",
};

export default function Reparaciones() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 lg:grid lg:grid-cols-6 seamless-grid object-contain">
        <h1 className="sr-only">Reparaciones</h1>
        <PageIntroHeader
          kicker="Seccion"
          title="Reparaciones"
          description="Revisa trabajos de mantenimiento, restauracion y puesta a punto realizados en taller."
        />
        <figure className="animate bg-[var(--panel)] border border-[var(--border)] col-span-6 p-4">
          <Image
            src={uno}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
            style={{ width: "100%", height: "100%" }}
          />
        </figure>

        <figure className="animate bg-[var(--panel)] border border-[var(--border)] col-span-6 lg:col-span-2 p-4">
          <Image
            src={dos}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>

        <figure className="animate bg-[var(--panel)] border border-[var(--border)] col-span-6 lg:col-span-2 p-4">
          <Image
            src={tres}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>
        <figure className="animate bg-[var(--panel)] border border-[var(--border)] col-span-6 lg:col-span-2 p-4">
          <Image
            src={cuatro}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>

        <figure className="animate bg-[var(--panel)] border border-[var(--border)] col-span-6 p-4">
          <Image
            src={cinco}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
            style={{ width: "100%", height: "100%" }}
          />
        </figure>

        <figure className="animate bg-[var(--panel)] border border-[var(--border)] col-span-2 p-4">
          <Image
            src={seis}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>
        <figure className="animate bg-[var(--panel)] border border-[var(--border)] col-span-2 lg:flex justify-center align-middle p-4">
          <Image
            src={siete}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>
        <figure className="animate bg-[var(--panel)] border border-[var(--border)] col-span-6 lg:col-span-2 p-4">
          <Image
            src={ocho}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>
      </section>
    </>
  );
}
