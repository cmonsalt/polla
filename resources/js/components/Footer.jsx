import React from "react";

export default function Footer({onOpenPoliticaModal}) {
    return (
        <footer className="text-white mt-5">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h5>GolazoSorteos</h5>
                        <p>
                            &copy; 2024 GolazoSorteos, Inc. Todos los derechos reservados.
                        </p>
                        <a href="#" className="text-light mx-2" onClick={onOpenPoliticaModal}>
                            Política de Privacidad
                            
                        </a>
                        {/* <a href="#" className="text-light mx-2">
                            Términos y Condiciones
                        </a> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
