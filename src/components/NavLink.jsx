"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ href, text, activeClasses }) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <>
      <Link
        className={`${
          isActive
            ? activeClasses
            : "flex justify-center px-4 py-3 my-0 bg-[var(--panel)] border border-[var(--border)] hover:bg-[var(--panel-strong)] hover:text-[var(--accent)]"
        }`}
        href={href}
      >
        {text}
      </Link>
    </>
  );
}
