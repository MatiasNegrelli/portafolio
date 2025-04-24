"use client";

import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Transition } from "./Transition";

const Navbar = () => {
  const router = usePathname();

  return (
    <Transition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
    >
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full opacity-75 bg-[#094C30] background-blur-sm">
          {itemsNavbar.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-[#16755E] ${
                router === item.link && "bg-[#16755E]"
              }`}
            >
              <span className="">{item.icon}</span>
            </Link>
          ))}
        </div>
      </nav>
    </Transition>
  );
};

export default Navbar;
