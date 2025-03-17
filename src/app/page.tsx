import Banner from "@/components/Banner";
import "../styles/globals.css"
import Operation from "@/components/Operation";
import Aboutus from "@/components/Aboutus";
import Contact from "@/components/Contact";
export default function Home() {

  return (
    <>
    <main>   
      <Banner/>
      <Operation/>
      <Aboutus/>
      <Contact/>
    </main>
    </>
  );

}
