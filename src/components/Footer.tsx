import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="neon-footer">
      <div className="footer-container">
        <p className="footer-brand">© 2025 NeuraMind. Todos os direitos reservados.</p>
        <ul className="footer-links">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">Contato</a></li>
          <li><a href="#terms">Termos</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
