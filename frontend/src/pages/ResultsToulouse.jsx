import Navbar from "../components/layout-components/Navbar/Navbar";
import Footer from "../components/layout-components/Footer/Footer";
import TripjourToulouse from "../components/ResultItineraireToulouse";

export default function ResultsToulouse() {
  return (
    <div className="travel">
      <Navbar />
      <TripjourToulouse />
      <Footer />
    </div>
  );
}
