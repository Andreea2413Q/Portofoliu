"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type NavMenuContextType = {
  /** true → hamburger menu is open (mobile) */
  isMenuOpen: boolean;
  /** toggles the flag */
  setIsMenuOpen: (v: boolean) => void;
};

const NavMenuContext = createContext<NavMenuContextType | undefined>(undefined);

/** Provider – wrap your layout (or _app) with it */
export const NavMenuProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NavMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </NavMenuContext.Provider>
  );
};

/** Hook for easy consumption */
export const useNavMenu = () => {
  const ctx = useContext(NavMenuContext);
  if (!ctx) {
    throw new Error("useNavMenu must be used within NavMenuProvider");
  }
  return ctx;
};