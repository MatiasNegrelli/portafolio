import TransitionPage from "../../TransitionPage";
import ContainerPage from "../../../components/ContainerPage";
import Avatar from "@/components/Avatar";
import BackgroundPage from "@/components/BackgroundPage";
import CounterServices from "@/components/CounterServices";
import TimeLine from "@/components/TimeLine";

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <BackgroundPage />
      <ContainerPage>
        <Avatar />
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
          Mi trayectectoria{" "}
          <span className=" font-bold text-green-500">en el mundo IT</span>
        </h1>
        <CounterServices />
        <TimeLine />
      </ContainerPage>
    </>
  );
};

export default PageAboutMe;
