import Navbar from "../components/layout-components/Navbar/Navbar";
import Footer from "../components/layout-components/Footer/Footer";
import ResultItineraire from "../components/ResultItineraire";

export default function Results() {
  return (
    <div className="travel">
      <Navbar />
      <ResultItineraire />
      <Footer />
    </div>
  );
}
