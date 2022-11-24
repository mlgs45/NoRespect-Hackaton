import "./Quiz.css";

export default function Quiz() {
  return (
    <div className="content">
      <section>
        <h1>
          <span className="t-bold">imaginez</span> votre voyage{" "}
          <span className="t-bold">dès maintenant</span>
        </h1>
        <div className="card">
          <div className="card-title mg-b-08">
            Connaissez-vous votre destination ?
          </div>
          <div className="form">
            <button className="button" type="button">
              NON
            </button>
            <input
              className="w-70 mg-left-5"
              type="text"
              name="destination"
              placeholder="Entrez votre destination"
            />
          </div>
        </div>

        <div className="card">
          <div className="form inline space-b">
            <div className="card-title">Quel est votre budget ?</div>
            <div className="form-sign w-30">
              <span className="sign">€</span>
              <input className="price" type="text" name="destination" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-title mg-b-1-4">Combien de voyageurs ?</div>
          <div className="inline space-a">
            <div>
              <div className="card-title mg-b-0-4">Adultes</div>
              <select className="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>
            <div>
              <div className="card-title mg-b-0-4">Enfants</div>
              <select className="select">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-title mg-b-08">
            Quels sont vos centres d'intérêts ?
          </div>
          <div className="button-group">
            <button className="button btn-flex" type="button">
              Culture
            </button>
            <button className="button btn-flex" type="button">
              Sport
            </button>
            <button className="button btn-flex" type="button">
              Nature
            </button>
            <button className="button btn-flex" type="button">
              Shopping
            </button>
          </div>
        </div>

        <div className="voyage-eco">
          ✅ <span className="t-bold">Voyage</span> écoresponsable
        </div>
        <button type="button" className="button generate">
          Générer mon voyage →
        </button>
      </section>
    </div>
  );
}
