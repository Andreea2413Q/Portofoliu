
"use client";
import type { ReactNode } from "react";

import { useState } from "react";
import Navbar from "@/components/navbar";

export default function SiteContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar onMenuOpenChange={setMenuOpen} />

      <main
        className={`transition-[margin] duration-300 ease-in-out ${
          menuOpen ? "mt-[100px]" : "mt-0"
        }`}
      >
        {children}
      </main>
    </>
  );
}
