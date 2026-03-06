import Image from "next/image";
import construccion from "@/public/croquis/enconstruccion.svg";

const EnConstruccion = () => {
  return (
    <>
      <section className="w-full " id="sobremi">
        <figure className="flex flex-col align-middle items-center justify-center  m-auto h-screen ">
          <Image
            width={600}
            height={600}
            src={construccion}
            alt="Imagen de una presentación para un sitio en construcción"
            priority={true}
            className="bg-[var(--panel)] p-20 border border-[var(--border)]"
          ></Image>
          <h1 className="text-gray-500 mt-10 font-serif">Próximamente</h1>
        </figure>
      </section>
    </>
  );
};

export default EnConstruccion;
