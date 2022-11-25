import Navbar from "../components/layout-components/Navbar/Navbar";
import Footer from "../components/layout-components/Footer/Footer";
import ContactForm from "../components/layout-components/Contact/ContactForm";

import "../components/layout-components/Contact/ContactForm.css";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contactForm">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
