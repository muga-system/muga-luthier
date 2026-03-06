import Image from "next/image";

import Pua from "@/public/pua.svg";
import Instagram from "@/public/instagram.svg";
import Youtube from "@/public/youtube.svg";
import Email from "@/public/email.svg";

export default function HeaderGuitarras() {
  return (
    <header className="grid mt-2 grid-cols-4 justify-center align-middle bg-[var(--panel)] border border-[var(--border)] p-3">
      <p className="pl-2 mono-ui text-[var(--muted)]">INSTRUMENTOS</p>
      <div className="flex align-middle col-start-4 col-end-5 justify-end gap-4 mr-4">
        <p className="flex text-2xl align-middle rotate-90 text-[var(--accent)]">»</p>
      </div>
    </header>
  );
}
