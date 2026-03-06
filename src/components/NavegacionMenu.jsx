import Image from "next/image";
import Logo from "@/public/dicorato-logo-solo-apellido.svg";

import NavLink from "@/components/NavLink";

export default function NavegacionMenu() {
  return (
    <section className="grid-cols-1 w-full text-center">
      <nav aria-label="Menu principal">
        <div className="modal-menu-brand">
          <Image
            className="mx-auto"
            src={Logo}
            alt="imagen del logo de la empresa"
            width={140}
            height={49}
          />
          <span className="text-[var(--muted)] mono-ui text-xs">. Luthier .</span>
        </div>
        <ul className="seamless-grid mt-6 list-none p-0">
          <li>
            <NavLink
              activeClasses="flex justify-center text-[var(--accent)] px-4 py-2 bg-[var(--panel-strong)] border border-[var(--accent-soft)]"
              text="Inicio"
              href="/"
            />
          </li>
          <li>
            <NavLink
              activeClasses="flex justify-center text-[var(--accent)] px-4 py-2 bg-[var(--panel-strong)] border border-[var(--accent-soft)]"
              text="Galeria"
              href="/galeria"
            />
          </li>
          <li>
            <NavLink
              activeClasses="flex justify-center text-[var(--accent)] px-4 py-2 bg-[var(--panel-strong)] border border-[var(--accent-soft)]"
              text="Instrumentos"
              href="/instrumentos"
            />
          </li>
          <li>
            <NavLink
              activeClasses="flex justify-center text-[var(--accent)] px-4 py-2 bg-[var(--panel-strong)] border border-[var(--accent-soft)]"
              text="Reparaciones"
              href="/reparaciones"
            />
          </li>
          <li>
            <NavLink
              activeClasses="flex justify-center text-[var(--accent)] px-4 py-2 bg-[var(--panel-strong)] border border-[var(--accent-soft)]"
              text="Acerca de"
              href="/acerca-de"
            />
          </li>
          <li>
            <NavLink
              activeClasses="flex justify-center text-[var(--accent)] px-4 py-2 bg-[var(--panel-strong)] border border-[var(--accent-soft)]"
              text="Taller"
              href="/taller"
            />
          </li>
        </ul>
      </nav>
    </section>
  );
}
