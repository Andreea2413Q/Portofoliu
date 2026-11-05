
"use client";

import Projects from "./projects";

/* ---------------------------------------------------------- */
/*                     CLASE DE UTILITATE                     */
/* ---------------------------------------------------------- */

const container =
  "min-h-screen w-full px-4 sm:px-6 md:px-16 lg:px-24 py-6 md:py-12 flex flex-col gap-4 md:gap-8";

const title =
  "text-base sm:text-lg md:text-2xl font-bold leading-tight text-white";

const gradient =
  "bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent";

const text =
  "text-white text-xs sm:text-sm md:text-lg leading-relaxed";

const listWrapper =
  "grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-xs sm:text-sm md:text-lg";

const listItem =
  "relative list-none pl-4 md:pl-5 before:absolute before:left-0 before:top-0 before:text-yellow-400 before:content-['◆']";

/* ---------------------------------------------------------- */
/*                COMPONENTĂ PENTRU UN BULLET                  */
/* ---------------------------------------------------------- */

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className={listItem}>
      {children}
    </li>
  );
}

/* ---------------------------------------------------------- */
/*                         COMPONENTA                         */
/* ---------------------------------------------------------- */

export default function AboutMe() {
  return (
    <div className={container}>

      <hr className="w-full border-t border-white/20 my-2 md:my-4" />

      {/* TITLU */}

      <h2 className={title}>
        <span className={gradient}>
          Educație (ordine descrescătoare a anilor)
        </span>
      </h2>

      {/* INTRO */}

      <p className={text}>
        Studentă la Universitatea din Oradea, Facultatea de Informatică și Științe – Informatică
      </p>

      {/* 2025 */}

      <section>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white/90 mt-4 md:mt-6 mb-2">
          2025
        </h3>

        <ul className={listWrapper}>

          <BulletItem>
            Medalie de argint pe țară și locul 1 pe județ la Olimpiada de Inovare și Creație Digitală (Infoeducație)
          </BulletItem>

          <BulletItem>
            Medalie de bronz la etapa națională și locul 1 pe județ la Olimpiada de Tehnologia Informației și Comunicații.
          </BulletItem>

          <BulletItem>
            Premiul FMI în cadrul Concursului Facultății de Matematică și Informatică al Universității de Vest din Timișoara
          </BulletItem>

          <BulletItem>
            DELF B1 Franceză – certificat oficial
          </BulletItem>

          <BulletItem>
            Summer School — E-Business Technologies, Universitatea din Belgrad
          </BulletItem>

          <BulletItem>
            Atestat de Competențe Profesionale în IT: C++, Web development, sisteme de operare, baze de date.
          </BulletItem>

        </ul>
      </section>

      {/* 2024 */}

      <section>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white/90 mt-6 md:mt-8 mb-2">
          2024
        </h3>

        <ul className={listWrapper}>

          <BulletItem>
            Premiul III pe județ la Olimpiada de Inovare și Creație Digitală (Infoeducație)
          </BulletItem>

          <BulletItem>
            Premiul II pe județ la Olimpiada de TIC (Tehnologia Informației și Comunicații)
          </BulletItem>

          <BulletItem>
            Erasmus+ Internship – Software Developer Intern, M.E.P. Europrojects, Granada, Spania
          </BulletItem>

          <BulletItem>
            Certificat ECDL
          </BulletItem>

        </ul>
      </section>

    </div>
  );
}
