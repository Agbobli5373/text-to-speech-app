import { Header } from "@/components/header";
import GenerateSoundView from "./generateSoundView";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <GenerateSoundView />
    </main>
  );
}
