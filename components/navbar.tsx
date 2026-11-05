
"use client";

import { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";



const sections = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "projects" },
  { name: "Awards", id: "awards" },
  { name: "Contact", id: "contact" },
];

export default function Navbar({
  onMenuOpenChange,
}: {
  onMenuOpenChange: (open: boolean) => void;
}) {
  const [active, setActive] = useState("home");
  const [HEIGHT, setHEIGHT] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

 const handleStateChange = (state: { isOpen: boolean }) => {
  setMenuOpen(state.isOpen);
  onMenuOpenChange?.(state.isOpen);
};

  const closeMenu = () => {
    setMenuOpen(false);
    onMenuOpenChange?.(false);
  };

  useEffect(() => {
    const updateHeight = () => {
      setHEIGHT(window.innerHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < HEIGHT * 0.35) {
        setActive("home");
        return;
      }

      const scrollMiddle = window.scrollY + HEIGHT / 2;

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollMiddle >= top && scrollMiddle < bottom) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [HEIGHT]);

  const linkStyle =
    "relative text-white text-sm md:text-base font-medium transition";

  const activeStyle =
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-pink-400 after:via-purple-400 after:to-blue-400";

  const inactiveStyle =
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-400 after:via-purple-400 after:to-blue-400 after:transition-all after:duration-300 hover:after:w-full";

  const burgerStyles = {
    bmBurgerButton: {
      position: "relative",
      width: "24px",
      height: "18px",
      marginTop: "0",
    },

    bmBurgerBars: {
      background: "#ffffff",
      borderRadius: "2px",
    },

    bmBurgerBarsHover: {
      background: "#f472b6",
    },

    bmCrossButton: {
      height: "20px",
      width: "20px",
      top: "15px",
      right: "20px",
    },

    bmCross: {
      background: "#ffffff",
    },

   bmMenuWrap: {
  position: "fixed",
  height: "190px",
  width: "100%",
  top: "0px",
  right: "0px",
  transition: "transform 0.4s ease-in-out",
},

bmMenu: {
  background: "rgba(0, 0, 0, 0.95)",
  backdropFilter: "blur(12px)",
  padding: "4em 1.2em 1.5em",
  fontSize: "0.9em",
},

    bmItemList: {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, auto)",
  gap: "20px 30px",
  padding: "0.5em",
  alignItems: "center",
},

    bmItem: {
      display: "inline-block",
    },

    bmOverlay: {
      background: "rgba(0, 0, 0, 0.6)",
      top: "0",
      left: "0",
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-3 sm:px-5 z-50 bg-grey-600 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 md:py-4 flex items-center justify-between">

        {/* LOGO / NAME */}

        <a
          href="#home"
          onClick={closeMenu}
          className={`tracking-[2px] sm:tracking-[3px] md:tracking-[5px] font-semibold bg-gradient-to-r from-yellow-400 via-blue-200 to-blue-800 bg-clip-text text-transparent transition-all duration-300 ${
            menuOpen
              ? "text-xs sm:text-sm"
              : "text-xs sm:text-sm md:text-base"
          }`}
        >
          Țirban Andreea-Florina
        </a>

        {/* DESKTOP MENU */}

        <div className="hidden md:flex gap-6 lg:gap-8">
          {sections.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${linkStyle} ${
                active === link.id ? activeStyle : inactiveStyle
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* MOBILE MENU */}

       {/* MOBILE MENU */}
<div className="md:hidden flex items-center">
  <Menu
    right
    isOpen={menuOpen}
    onStateChange={handleStateChange}
    styles={burgerStyles}
  >
    {sections.map((link) => (
      <a
        key={link.id}
        href={`#${link.id}`}
        onClick={closeMenu}
        className={`
          relative inline-block w-fit
          text-white text-sm font-medium
          transition-colors duration-300
          ${
            active === link.id
              ? "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-pink-400 after:via-purple-400 after:to-blue-400"
              : "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-400 after:via-purple-400 after:to-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          }
        `}
      >
        {link.name}
      </a>
    ))}
  </Menu>
</div>

      </div>
    </nav>
  );
}
