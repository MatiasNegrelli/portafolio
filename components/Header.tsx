"use client";

import React from "react";
import { Transition } from "./Transition";
import Link from "next/link";
import { socialNetworks } from "@/data";

const Header = () => {
  return (
    <Transition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <Link href="/">
            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
              Matias
              <span className="text-green-500"> Negrelli</span>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-green-500"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </Transition>
  );
};

export default Header;
