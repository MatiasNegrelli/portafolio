import BackgroundPage from "@/components/BackgroundPage";
import TransitionPage from "./TransitionPage";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat ">
        <BackgroundPage />
        <Introduction />
      </div>
    </main>
  );
}
