import Navbar from "../components/layout-components/Navbar/Navbar";
import Footer from "../components/layout-components/Footer/Footer";
import Quiz from "../components/Quiz/Quiz";

export default function Travel() {
  return (
    <div className="travel">
      <Navbar />
      <Quiz />
      <Footer />
    </div>
  );
}
