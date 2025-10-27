import React from 'react';



function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-dark mt-5">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
        <div className="small mb-0">© {year} HelioAndes Energía</div>

        <nav className="d-flex align-items-center gap-2 small">
          <a href="#!" className="footer-link">Privacidad</a>
          <span className="opacity-50">·</span>
          <a href="#!" className="footer-link">Términos</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
