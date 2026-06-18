import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Heritage from "./components/Heritage";
import Menu from "./components/Menu";
import Spread from "./components/Spread";
import Panaderia from "./components/Panaderia";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Page() {
  return (
    <>
      <Reveal />
      <Nav />
      <main>
        <Hero />
        <Heritage />
        <Spread />
        <Menu />
        <Panaderia />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
