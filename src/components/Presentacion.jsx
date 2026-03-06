import { BlurFade } from "@/components/ui/blur-fade";

export default function Presentacion() {
  return (
    <>
      <section className="min-w-0 px-6 py-8 lg:px-10 lg:py-12 h-full flex flex-col items-start justify-center text-left">
        <BlurFade inView delay={0.04} offset={12}>
          <h1 className="max-w-[16ch] text-3xl font-light leading-[1.08] text-[var(--text)] text-balance lg:text-5xl">
            Recursos Nativos Y Maderas Recuperadas
          </h1>
        </BlurFade>
        <BlurFade inView delay={0.12} offset={14}>
          <p className="mt-5 max-w-[56ch] break-words text-base leading-relaxed text-[var(--muted)] lg:text-lg">
            Diseñamos cada instrumento con enfoque sustentable, priorizando materiales
            recuperados y procesos de taller responsables con el entorno.
          </p>
        </BlurFade>
      </section>
    </>
  );
}
