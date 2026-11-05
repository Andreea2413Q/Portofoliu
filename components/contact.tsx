
"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

/* ---------- DATELE REȚELELOR ---------- */

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
  {
    name: "Telefon",
    href: "tel:+40724280323",
    icon: FaPhone,
    hover: "hover:border-green-400 hover:text-green-400",
  },
];

/* ---------- STYLES ---------- */

const container =
  "w-full px-4 sm:px-6 md:px-24 py-10 md:py-20 flex flex-col items-center gap-5 md:gap-10";

const title =
  "text-lg sm:text-3xl md:text-4xl font-bold text-center text-white";

const description =
  "Sunt pasionată de tehnologie, îmi place să învăț lucruri noi și să testez cele mai noi tehnologii. Dacă vrei să discuţi un proiect, să colaborezi sau doar să schimbi idei, contactează-mă prin una dintre rețelele de mai jos.";

const card =
  "flex items-center p-0 m-0 gap-2 md:gap-4 px-3 md:px-6 py-2 md:py-3 border border-white/10 rounded-xl hover:border-cyan-400 transition bg-black/40 text-white text-xs sm:text-sm md:text-base";

/* ---------- COMPONENTA ---------- */

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section className={container}>

      <hr className="w-full border-t border-white/20 my-2 md:my-4" />

      <h2 className={title}>
        Contact
      </h2>

      <p className="text-white/80 text-[12px]
      sm:text-base md:text-xl text-center max-w-2xl leading-relaxed">
        {description}
      </p>

      {/* LISTA DE REȚELE ȘI CONTACT */}

      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {socials.map(({ name, href, icon: Icon, hover }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${card} ${hover}`}
          >
            <Icon className="w-3.5 h-3.5 md:w-6 md:h-6 shrink-0" />

            <span className="font-medium">
              {name === "Telefon" ? "+40 724 280 323" : name}
            </span>
          </a>
        ))}
      </div>

      {/* COPYRIGHT */}

      <div className="mt-4 md:mt-8 pt-4 md:pt-6 border-t border-white/10 w-full text-center text-white/60 text-[10px] sm:text-xs md:text-sm">
        <p>
          © {currentYear} Andreea-Florina Țirban. Toate drepturile rezervate.
        </p>
      </div>

    </section>
  );
}
