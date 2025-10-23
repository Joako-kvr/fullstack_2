import React from 'react';
import Button from 'react-bootstrap/Button';


function Hero() {
    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-4" style={{ textAlign: "left" }}>
                    <h1 className="mb-0">Energía para todos y todas</h1>
                    <p>La energía del futuro al alcance de ti y tu familia. Revisa nuestro
                        catálogo y proyecta tu cotización gratis.</p>
                    <row>
                        <Button variant="info">Info</Button>
                        <Button variant="info">Info</Button>
                    </row>
                </div>
                <div className="col-lg-4">
                    <img src="ruta-de-tu-imagen.jpg" className="img-fluid" />
                </div>
            </div>
        </div>

    )

}


export default Hero;