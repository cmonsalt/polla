import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar-color fixed-top">
     <a className="navbar-brand" href="#">
          PollaLatina.com
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link nav-link-enhanced" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-enhanced" href="#">
                Funcionamiento
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-enhanced" href="#">
                Términos y Condiciones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-enhanced" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
    </nav>
  );
}
