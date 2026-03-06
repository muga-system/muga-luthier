import React from "react";
import Image from "next/image";

import Esteban from "/public/croquis/esteban.svg";

const Sobremi = () => {
  return (
    <>
      <section className="w-full grid lg:grid-cols-4 my-2 seamless-grid" id="sobremi">
        <figure className="flex flex-col align-middle items-center justify-center lg:col-start-1 lg:col-end-5 bg-[var(--panel)] border border-[var(--border)] w-full">
          <p className="text-center lg:text-2xl font-extralight text-[#7d8c9d] my-10 mx-10 lg:mx-32">
            A mediados de la década de los 90 me surge la intriga de comenzar la
            construcción de guitarras y bajos, y capacitándome de varias maneras
            logro afianzarme en conocimientos y experiencia. Es así que en el
            año 2010 decido crear Di Corato instrumentos de cuerda pulsada.
          </p>
          <Image
            width={300}
            height={250}
            src={Esteban}
            alt="Logo"
            priority={true}
            className="px-4 pb-10"
          ></Image>
        </figure>
      </section>
    </>
  );
};

export default Sobremi;
