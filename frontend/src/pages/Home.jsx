import Footer from "../components/layout-components/Footer/Footer";
import Navbar from "../components/layout-components/Navbar/Navbar";
import Tripjour1 from "../components/ResultItineraire";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Tripjour1 />
      <Footer />
    </div>
  );
}
