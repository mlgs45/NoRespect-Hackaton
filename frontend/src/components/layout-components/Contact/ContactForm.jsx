import { Player } from "@lottiefiles/react-lottie-player";
import { toast } from "react-toastify";
import "./ContactForm.css";
import mail from "../../../assets/lottie/contact.json";

function ContactForm() {
  const notif = () => toast("Votre message est bien parti");

  return (
    <div className="container">
      <Player autoplay loop src={mail} className="contactLottie" />
      <form>
        <h1>
          NOUS <span id="italic">CONTACTER</span>
        </h1>
        <div>
          <input
            type="text"
            name="firstname"
            placeholder="Votre nom..."
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="lastname"
            placeholder="Votre prénom..."
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="user_email"
            placeholder="exemple@gmail.com"
            required
          />
        </div>
        <div>
          <textarea name="message" placeholder="Message..." />
        </div>
        <div>
          <button
            type="submit"
            className="buttonSubmit"
            value="Send"
            onClick={() => {
              notif();
            }}
          >
            Envoyer →
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
