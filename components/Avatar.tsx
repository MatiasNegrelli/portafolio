"use client";
import Image from "next/image";
import { Transition } from "./Transition";

const Avatar = () => {
  return (
    <Transition
      position="bottom"
      className="bottom-0 right-15 hidden md:inline-block md:absolute"
    >
      <Image
        src="/Avatar_2.png"
        width={600}
        height={600}
        className="w-full h-full max-lg:w-2/3 max-md:h-2/3  rounded-full transition-all duration-300 mb-32"
        alt="avatar"
      />
    </Transition>
  );
};

export default Avatar;
