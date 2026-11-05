"use client";

import ColViewCarousel from "./ColViewCarousel";
import TreeLivesMatterCarousel from "./TreeLivesMatterCarousel";

/* ================= TYPES ================= */

type Project = {
  title: string;
  description: string;
  description2: string;
  tags: string[];

  href?: string;
  link_Suplimentar1?: string;
  link_Suplimentar2?: string;

  
};

/* ================= PROJECTS ================= */

const projects: Project[] = [
  {
    title: "ColView",
    description:
      "Platformă educațională câștigătoare a medaliei de argint la Olimpiada Națională de Software Educațional 2025, prezentată în fața unui juriu al Ministerului Educației.",
    description2:
      "Aplicația oferă resurse interactive, facilitând înțelegerea impactului cultural, social și științific al culorilor în viața noastră.",
    tags: ["React", "Next.js", "JavaScript", "Tailwind CSS"],

    href: "https://community.infoeducatie.ro/t/colview-educational-bihor-lucrari-2025-nationala/6371",
    link_Suplimentar1:
      "https://community.infoeducatie.ro/t/colview-educational-bihor-lucrari-2025-nationala/6371",
       link_Suplimentar2: "/Documentatie.pdf",
   
  },
  {
    title: "Tree Lives Matter",
    description:
      "Platformă de monitorizare a mediului, care permite utilizatorilor să raporteze probleme de mediu și să vizualizeze alerte pe hartă.",
    description2:
      "Aplicația oferă autentificare, gestionarea alertelor și o interfață interactivă pentru identificarea problemelor de mediu.",
    tags: [
      "React",
      "Next.js",
      "Flask",
      "Python",
      "SQLite",
      "Tailwind CSS",
    ],
  },
];

/* ================= STYLES ================= */

const container =
  "min-h-screen w-full px-4 sm:px-6 md:px-24 py-14 md:py-20 flex flex-col gap-10 md:gap-12";

const title = "text-4xl md:text-6xl font-bold leading-tight";

const card =
  "grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-8 items-center border border-white/15 rounded-2xl p-4 sm:p-6 md:p-10 hover:border-cyan-400 transition bg-purple-950";

/* ================= PROJECTS ================= */

export default function Projects() {
  return (
    <div className={container} id="projects">
      <h2 className={title}>
        <span className="text-white">Proiecte</span>
      </h2>

      <div className="flex flex-col gap-10 md:gap-12">
        {projects.map((p) => (
          <div key={p.title} className={card}>
            {/* INFORMAȚII PROIECT */}
            <div className="flex flex-col gap-5 text-left items-start">
              <div className="flex items-center justify-between w-full gap-4">
                <h3 className="text-white text-2xl lg:text-3xl font-bold">
                  {p.title}
                </h3>
              </div>

              <p className="text-white/80 text-sm lg:text-base leading-relaxed text-left">
                {p.description2}
              </p>

              <p className="text-white/80 text-sm lg:text-base leading-relaxed text-left">
                {p.description}
              </p>

              {/* LINKURI SUPLIMENTARE */}
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
                        Documentație 
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* TAGS */}
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

              {/* LINK PROIECT */}
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

            {/* CAROUSEL EXTERN */}
            <div className="w-full flex items-center justify-center">
              {p.title === "ColView" ? (
                <ColViewCarousel />
              ) : (
                <TreeLivesMatterCarousel />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}