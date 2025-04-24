import Image from "next/image";
import { Transition } from "./Transition";

const Avatar2 = () => {
  return (
    <Transition
      position="right"
      className="bottom-0 left-0 hidden xl:inline-block xl:absolute"
    >
      <Image
        src="/Avatar_completo_1.png"
        width="300"
        height="300"
        className="w-[275px] h-full "
        alt="Avatar Matias Negrelli"
      />
    </Transition>
  );
};

export default Avatar2;
