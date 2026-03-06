"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import Slider from "@/components/Slider";

const Modal = ({ guitar, onClose }) => {
  const { titulo, galeria } = guitar;

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-lg overscroll-contain"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0"
        aria-label="Cerrar galeria ampliada"
        onClick={onClose}
      />
      <div className="relative z-10 m-8 flex h-[95dvh] w-[100dvh] flex-col justify-center border border-[var(--border)] bg-[var(--panel)] text-center backdrop-filter backdrop-blur-md">
        <h2 id="gallery-modal-title" className="sr-only">
          Galeria de {titulo}
        </h2>
        <Slider images={galeria} modelTitle={titulo} />
        <button
          type="button"
          aria-label={`Cerrar galeria de ${titulo}`}
          className="absolute px-4 py-2 m-2 lg:m-4 right-0 top-0 bg-[var(--panel)] text-center mono-ui hover:bg-[var(--panel-strong)] hover:text-[var(--accent)] cursor-pointer border border-[var(--border)]"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

const GuitarItem = ({ guitar }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const { titulo, foto_de_portada } = guitar;

  return (
    <>
      <section className="relative group bg-[var(--panel)] min-w-0">
        <button
          type="button"
          aria-label={`Abrir galeria de ${titulo}`}
          className="w-full overflow-hidden relative flex items-center hover:text-[var(--accent)] bg-[var(--panel)] hover:bg-[var(--panel-strong)] cursor-pointer"
          onClick={openModal}
        >
          <Image
            className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
            src={foto_de_portada}
            alt={titulo}
            width={96}
            height={96}
            loading="lazy"
          />
          <div className="flex min-w-0 flex-col py-5 pl-24 text-left">
            <strong className="text-lg font-light text-[var(--muted)] group-hover:text-[var(--accent)]">
              {titulo}
            </strong>
          </div>
        </button>
      </section>

      {modalOpen && <Modal guitar={guitar} onClose={closeModal} />}
    </>
  );
};

export default GuitarItem;
