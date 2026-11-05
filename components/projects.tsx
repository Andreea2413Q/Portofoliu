"use client";
import React, { useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  description2: string;
  tags: string[];
  status: "live" | "in-progress";
  href?: string;
  link_Suplimentar1?: string;
  link_Suplimentar2?: string;
  images?: {
    src: string;
    alt: string;
  }[];
};

const projects: Project[] = [
  {
    title: "ColView",
    description:
      "Platformă educațională câștigătoare a medaliei de argint la Olimpiada Națională de Software Educațional 2025, prezentată în fața unui juriu al Ministerului Educației.",
    tags: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    status: "live",
    href: "https://community.infoeducatie.ro/t/colview-educational-bihor-lucrari-2025-nationala/6371",
    link_Suplimentar1:
      "https://community.infoeducatie.ro/t/colview-educational-bihor-lucrari-2025-nationala/6371",
    link_Suplimentar2:
      "https://observatorulbihorean.ro/cinci-elevi-din-judetul-bihor-pe-podium-la-olimpiada-nationala-de-inovare-si-creatie-digitala-infoeducatie/",
    description2:
      "Aplicația oferă resurse interactive, facilitând înțelegerea impactului: cultural, social și științific al culorilor în viața noastră.",
    images: [
      {
        src: "/Col_home.png",
        alt: "ColView acasa",
      },
      {
        src: "/Col_teorie.png",
        alt: "ColView teorie",
      },
      {
        src: "/Col_quizz.png",
        alt: "ColView quizz",
      },
      {
        src: "/Col_map.png",
        alt: "ColView map",
      },
      {
        src: "/Col_note.png",
        alt: "ColView note",
      },
      {
        src: "/Col_rgb_game.png",
        alt: "ColView rgb game",
      },
      {
        src: "/Col_circle_game.png",
        alt: "ColView circle game",
      },
    ],
  },
  {
    title: "Tree Lives Matter",
    description:
      "Platformă de monitorizare a mediului, care permite utilizatorilor să raporteze probleme de mediu și să vizualizeze alerte pe hartă.",
    description2:
      "Aplicația oferă autentificare, gestionarea alertelor și o interfață interactivă pentru identificarea problemelor de mediu.",
    tags: ["React", "Next.js", "Flask", "Python", "SQLite", "Tailwind CSS"],
    status: "in-progress",
    images: [
      {
        src: "/TLM_home.png",
        alt: "Tree Lives Matter Homepage",
      },
      {
        src: "/TLM_admin.png",
        alt: "Tree Lives Matter Admin Dashboard",
      },
      {
        src: "/TLM_map.png",
        alt: "Tree Lives Matter Map",
      },
      {
        src: "/TLM_form.png",
        alt: "Tree Lives Matter Form",
      },
    ],
  },
];

// Componenta de Carousel cu butoanele ajustate
function ImageCarousel({ images }: { images: { src: string; alt: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full group">
      {/* Containerul principal al imaginii */}
      <div className="relative w-full overflow-hidden rounded-xl border border-white/15 bg-black/40 shadow-lg aspect-video">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-contain transition-all duration-500"
        />

        {/* Indicatori (Puncte jos) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === idx ? "bg-cyan-400 w-4" : "bg-white/50"
              }`}
              aria-label={`Mergi la imaginea ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Buton Anterior (Îndepărtat în afara imaginii spre stânga și transformat în cerc semitransparent) */}
      <button
        onClick={prevSlide}
        className="absolute -left-6 md:-left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20 backdrop-blur-md z-20 shadow-lg"
        aria-label="Imaginea anterioară"
      >
        ❮
      </button>

      {/* Buton Următor (Îndepărtat în afara imaginii spre dreapta și transformat în cerc semitransparent) */}
      <button
        onClick={nextSlide}
        className="absolute -right-6 md:-right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20 backdrop-blur-md z-20 shadow-lg"
        aria-label="Imaginea următoare"
      >
        ❯
      </button>
    </div>
  );
}

const container = "min-h-screen w-full px-6 md:px-24 py-20 flex flex-col gap-12";
const title = "text-4xl md:text-6xl font-bold leading-tight";
const gradient = "text-white";
const card =
  "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-white/15 rounded-2xl p-6 md:p-10 hover:border-cyan-400 transition bg-purple-950";

export default function Projects() {
  return (
    <div className={container}>
      <h2 className={title}>
        <span className={gradient}>Proiecte</span>
      </h2>

      <div className="flex flex-col gap-12">
        {projects.map((p) => (
          <div key={p.title} className={card}>
            {/* JUMĂTATEA STÂNGĂ: Informații despre proiect */}
            <div className="flex flex-col gap-5 text-left items-start">
              <div className="flex items-center justify-between w-full gap-4">
                <h3 className="text-white text-2xl lg:text-3xl font-bold">{p.title}</h3>
                {p.status === "in-progress" && (
                  <span className="text-xs text-cyan-400 border border-cyan-400/30 rounded-full px-3 py-1">
                    în dezvoltare
                  </span>
                )}
              </div>

              <p className="text-white/80 text-sm lg:text-base leading-relaxed text-left">
                {p.description2}
              </p>
              <p className="text-white/80 text-sm lg:text-base leading-relaxed text-left">
                {p.description}
              </p>

              {(p.link_Suplimentar1 || p.link_Suplimentar2) && (
                <div className="flex flex-col gap-2 w-full text-left">
                  <h4 className="text-white/90 text-sm lg:text-base font-semibold">
                    Linkuri suplimentare:
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {p.link_Suplimentar1 && (
                      <a
                        href={p.link_Suplimentar1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline text-sm lg:text-base"
                      >
                        Infoeducație
                      </a>
                    )}
                    {p.link_Suplimentar2 && (
                      <a
                        href={p.link_Suplimentar2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline text-sm lg:text-base"
                      >
                        Observatorul Bihorean
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs lg:text-sm text-white/60 border border-white/10 rounded-full px-3.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm lg:text-base text-cyan-400 hover:underline pt-2 flex items-center gap-1 font-medium"
                >
                  Vezi proiect →
                </a>
              )}
            </div>

            {/* JUMĂTATEA DREAPTĂ: Carouselul cu butoanele poziționate exterior */}
            <div className="flex items-center justify-center px-4 md:px-6">
              {p.images && p.images.length > 0 ? (
                <ImageCarousel images={p.images} />
              ) : (
                <div className="w-full h-48 lg:h-full border border-dashed border-white/20 rounded-xl flex items-center justify-center text-white/30 text-sm">
                  Fără imagini disponibile
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}