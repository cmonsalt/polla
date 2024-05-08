import React from "react";

export default function Footer({onOpenPoliticaModal}) {
    return (
        <footer className="text-white mt-5">
           
                        <h5 className="footer-text">GolazoSorteos</h5>
                        <p className="footer-text">
                            &copy; 2024 GolazoSorteos, Inc. Todos los derechos reservados.
                        </p>
                        <a href="#" className="text-light mx-2 footer-text" onClick={onOpenPoliticaModal}>
                            Política de Privacidad
                            
                        </a>
              
        </footer>
    );
}
