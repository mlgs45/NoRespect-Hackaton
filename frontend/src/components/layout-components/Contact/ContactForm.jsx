import { Player } from "@lottiefiles/react-lottie-player";
import { ToastContainer, Zoom, toast } from "react-toastify";
import mail from "../../../assets/lottie/contact.json";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";

function ContactForm() {
  const notif = () => {
    toast.success(
      <div>
        <p>Votre message est bien parti</p>
      </div>,
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      }
    );
  };

  return (
    <div className="container">
      <Player autoplay loop src={mail} className="contactLottie" />
      <form>
        <div>
          <h1>
            NOUS <span id="italic">CONTACTER</span>
          </h1>
        </div>
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
            type="button"
            className="buttonSubmit"
            value="Send"
            onClick={() => {
              notif();
            }}
          >
            Envoyer →
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}

export default ContactForm;
