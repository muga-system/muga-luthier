import Link from "next/link";

export default function Navegacion() {
  return (
    <nav aria-label="Navegacion principal" className="w-full seamless-grid text-center">
      <ul className="grid grid-cols-3 lg:grid-cols-6">
        <li>
          <Link href="/" className="tile-link p-4 w-full">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/instrumentos" className="tile-link p-4 w-full">
            Instrumentos
          </Link>
        </li>
        <li>
          <Link href="/reparaciones" className="tile-link p-4 w-full">
            Reparaciones
          </Link>
        </li>
        <li>
          <Link href="/acerca-de" className="tile-link p-4 w-full">
            Acerca De
          </Link>
        </li>
        <li>
          <Link href="/taller" className="tile-link p-4 w-full">
            Taller
          </Link>
        </li>
        <li>
          <Link href="#contactos" className="tile-link p-4 w-full">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
