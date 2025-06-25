import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="hologram-wrapper" data-aos="zoom-in-up">
      <div className="hologram-base"></div>
      <div className="hologram-panel">
        <h2>Fale conosco</h2>
        <form>
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu e-mail" required />
          <textarea rows={4} placeholder="Sua mensagem" required />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
