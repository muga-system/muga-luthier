"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Menu from "@/public/menu.svg";
import NavegacionMenu from "@/components/NavegacionMenu.jsx";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";

    const onEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => {
      window.removeEventListener("keydown", onEscape);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isOpen]);

  return (
    <>
      <figure className="flex justify-end col-start-4 col-end-5">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menu de navegacion"
          className="tile-link w-10 h-10"
        >
          <Image
            className="text-center p-2"
            src={Menu}
            alt=""
            aria-hidden="true"
            width={40}
            height={40}
          />
        </button>
      </figure>

      {isOpen && (
        <div
          className="container-modal container-modal-open"
          role="dialog"
          aria-modal="true"
          aria-labelledby="menu-modal-title"
        >
          <button
            type="button"
            aria-label="Cerrar menu de navegacion"
            className="absolute inset-0"
            onClick={() => setIsOpen(false)}
          />
          <div className="content-modal relative z-10">
            <header className="modal-menu-header">
              <h2 id="menu-modal-title" className="mono-ui text-xs text-[var(--muted)]">
                Menu Principal
              </h2>
              <button
                type="button"
                aria-label="Cerrar menu"
                className="mono-ui text-xs text-[var(--muted)] hover:text-[var(--accent)] border border-[var(--border)] px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                Cerrar
              </button>
            </header>
            <NavegacionMenu />
          </div>
        </div>
      )}
    </>
  );
}
