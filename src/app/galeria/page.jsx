import React from "react";
import GuitarItem from "@/components/GuitarItem";
import PageIntroHeader from "@/components/PageIntroHeader";
import data from "@/data/data.json";

export const metadata = {
  title: "Galeria de fotos",
};

export default function Page() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 my-2 seamless-grid seamless-grid-no-top">
        <h1 className="sr-only">Galeria</h1>
        <PageIntroHeader
          kicker="Coleccion"
          title="Galeria De Modelos"
          description="Abre cada ficha y revisa imagenes en detalle de los distintos modelos del taller."
        />
        {data.length === 0 ? (
          <p className="col-span-1 md:col-span-2 bg-[var(--panel)] px-6 py-8 text-[var(--muted)]">
            No hay modelos para mostrar por ahora.
          </p>
        ) : (
          data.map((guitar) => <GuitarItem key={guitar.id} guitar={guitar} />)
        )}
      </section>
    </>
  );
}
