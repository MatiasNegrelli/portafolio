"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image
          src="/homeProfile-1.png"
          priority
          width="800"
          height="800"
          alt="Avatar"
          className="rounded-full mt-5"
        />

        <div className="flex flex-col justify-center max-w-md mt-4">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Analizo con lógica, diseño con propósito, desarrollo con visión{" "}
            <br />
            <TypeAnimation
              sequence={[
                "Systems Engineer",
                1000,
                "Developer",
                1000,
                "Systems Analyst",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-green-500"
            />
          </h1>

          <p className="mx-auto mb-2 text-lg md:text-xl md:mx-0 md:mb-5">
            Estudiante avanzado de ingenieria en sistemas, apasionado por la
            tecnología y el desarrollo de software.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <a
              href="/CV_Matias_Negrelli.pdf"
              download
              className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-md hover:shadow-white/20 hover:scale-105"
            >
              Descargar CV
            </a>
            <a
              href="/MRR_Matias_Negrelli.pdf"
              download
              className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-md hover:shadow-white/20 hover:scale-105"
            >
              Materias Rendidas
            </a>
            <a
              href="https://wa.me/543517726608"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-md hover:shadow-white/20 hover:scale-105"
            >
              Mi Contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
