import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import HeaderPage from "./headerPage";
import AboutPage from "./aboutPage";
import SkilsPage from "./skilsPage";
import ProjectPage from "./projectPage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeaderPage />
      <AboutPage />
      <SkilsPage />
      <ProjectPage />
      <Footer />
    </main>
  );
}
