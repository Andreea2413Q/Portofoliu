"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Home from "./home";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar onMenuOpenChange={setMenuOpen} />
      <Home menuOpen={menuOpen} />
      {/* Restul secțiunilor tale */}
    </main>
  );
}