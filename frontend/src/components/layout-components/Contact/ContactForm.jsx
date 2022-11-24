import { toast } from "react-toastify";
import "./ContactForm.css";

function ContactForm() {
  const notif = () => toast("Votre message est bien parti");

  return (
    <div className="container">
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
