
"use client";

import TypingText from "./typing_text";
import RingAnimation from "./ring_animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface HomeProps {
  menuOpen?: boolean;
}

/* ================= STYLES ================= */

const titleStyle =
  "text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-bold leading-none";

const descriptionStyle =
  "max-w-2xl text-yellow-500 text-base sm:text-lg md:text-xl leading-relaxed";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Andreea2413Q",
    icon: FaGithub,
    hover: "hover:border-yellow-400 hover:text-yellow-400",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/andreea-florina-țirban-36b1a62b0?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: FaLinkedin,
    hover: "hover:border-blue-700 hover:text-blue-600",
  },
  {
    name: "Gmail",
    href: "mailto:tirbanflorina@gmail.com",
    icon: FaEnvelope,
    hover: "hover:border-yellow-400 hover:text-yellow-400",
  },
];

const socialBase =
  "px-3 sm:px-4 py-2 bg-black flex items-center gap-2 rounded-full border border-white text-white font-bold transition text-xs sm:text-sm";

/* ================= COMPONENT ================= */

export default function Home({ menuOpen }: HomeProps) {
  return (
    <div
      id="home"
      className={`w-full relative min-h-screen px-5 sm:px-8 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 transition-all duration-300 ${
        menuOpen ? "pt-[250px]" : "pt-[100px]"
      } md:pt-0`}
    >

      {/* STÂNGA - CONȚINUT PRINCIPAL */}

      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full md:w-2/3">

        <TypingText />

        {/* TITLU */}

        <div>
          <h1 className={`${titleStyle} text-white`}>
            Software
          </h1>

          <h1 className={`${titleStyle} md:text-[4rem] lg:text-[5.2rem] text-cyan-400`}>
            Developer
          </h1>
        </div>

        {/* DESCRIERE */}

        <p className={descriptionStyle}>
          "Cunoașterea înseamnă putere"
        </p>

        <p className="text-cyan-400 text-sm sm:text-base md:text-lg">
          Universitatea din Oradea - Informatică
        </p>

        <p className="text-green-400 text-sm sm:text-base md:text-lg leading-relaxed">
          Premiată la nivel național în Dezvoltare Software și Tehnologia Informației și a Comunicațiilor
        </p>

        {/* SOCIALS */}

        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-4">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialBase} ${social.hover}`}
              >
                <Icon />
                {social.name}
              </a>
            );
          })}
        </div>
      </div>

      {/* DREAPTA - RING ANIMATION */}

      <div className="min-h-[350px] md:min-h-screen w-full md:w-1/3 flex items-center justify-center">
        <RingAnimation />
      </div>

    </div>
  );
}
