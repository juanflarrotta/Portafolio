import Contact from "@/components/Contact/Contact";
import NavBar from "@/components/Navbar/NavBar";
import Title from "@/components/Title/Title";
import { NAVBAR } from "@/const/navbar.const";
import { TEXTS } from "@/const/title.const";

export default function Home() {
  return (
    <section className="h-screen grid grid-cols-1 grid-rows-3 p-4">
      <NavBar items={NAVBAR} />
      <Title texts={TEXTS} />
      <Contact />
    </section>
  );
}
