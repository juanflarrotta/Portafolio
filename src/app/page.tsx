import Contact from "@/components/Contact/Contact";
import NavBar from "@/components/Navbar/NavBar";
import Title from "@/components/Title/Title";
import { NAVBAR } from "@/const/navbar.const";
import { TEXTS } from "@/const/title.const";

export default function Home() {
  return (
    <section className="h-dvh grid grid-cols-1 grid-rows-3 p-4">
      <NavBar items={NAVBAR} />
      <img src="/photo.jpeg" className="photo" />
      <Title texts={TEXTS} />
      <Contact />
    </section>
  );
}
