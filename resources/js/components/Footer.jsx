import React from "react";

export default function Footer() {
  return (
    <footer className="text-white mt-5">
    <div className="container py-4">
        <div className="row">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <h5>Mi Sitio Web</h5>
                <p>
                    &copy; 2024 Mi Empresa, Inc. Todos los derechos
                    reservados.
                </p>
            </div>
            <div className="col-md-6 text-center text-md-right">
                <a href="#" className="text-white mr-2">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white mr-2">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white mr-2">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col text-center">
                <a href="#" className="text-light">
                    Política de Privacidad
                </a>{" "}
                |
                <a href="#" className="text-light">
                    Términos y Condiciones
                </a>
            </div>
        </div>
    </div>
</footer>
  );
}
