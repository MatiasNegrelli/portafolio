import BackgroundParticles from "@/components/BackgroundParticles";
import TransitionPage from "../../TransitionPage";
import Avatar2 from "@/components/Avatar2";
import SliderServices from "@/components/SliderServices";

const ServicesPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundParticles />
      <div className="relative z-10">
        <TransitionPage />
        <Avatar2 />
        <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
          <div className="max-w-[450px] max-md:max-w-[280px]">
            <h1 className="text-4xl mb-10 leading-tight text-center md:text-left md:text-4xl md:mb-5">
              Servicios como{" "}
              <span className="font-bold text-green-500">
                Ingeniero en Sistemas
              </span>
            </h1>
            <p className="mb-3 text-xl text-gray-300">
              Como estudiante avanzado de Ingeniería en Sistemas, ofrezco
              servicios de desarrollo de software con foco en la construcción de
              soluciones eficientes, escalables y bien estructuradas. Cuento con
              conocimientos en todo el ciclo de vida del desarrollo, desde el
              análisis hasta la implementación.
            </p>
            <a href="https://wa.me/543517726608" target="_blank">
              <button
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-green-900 hover:bg-green-500/65 cursor-pointer"
              >
                Contacta conmigo
              </button>
            </a>
          </div>
          <div className="max-xl:hidden">
            <SliderServices />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
