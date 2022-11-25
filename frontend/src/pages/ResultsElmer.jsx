import Navbar from "../components/layout-components/Navbar/Navbar";
import Footer from "../components/layout-components/Footer/Footer";
import TripjourElmer from "../components/ResultItineraireElmer";

export default function ResultsElmer() {
    return (
        <div className="travel">
            <Navbar />
            <TripjourElmer />
            <Footer />
        </div>
    );
}
