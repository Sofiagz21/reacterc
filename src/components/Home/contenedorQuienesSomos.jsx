import React from 'react'
import Imagen1 from '../../utils/images/Home/Carrusel/1.png'
import Imagen2 from '../../utils/images/Home/Carrusel/2.png'
import Imagen3 from '../../utils/images/Home/Carrusel/3.png'
import Imagen4 from '../../utils/images/Home/Carrusel/4.png'

const contenedorQuienesSomos = () => {
    return (
        /* CONTENEDOR QUIENES SOMOS---------------------------------------------------------------------------------*/
        <div className="Quien" id="QuienesSomos">
            <div id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={Imagen1} className="d-flex w-100" alt="quiénes somos"/>
                </div>

                <div className="carousel-item">
                <img src={Imagen2} className="d-flex w-100" alt="objetivo"/>
                </div>
                <div className="carousel-item">
                <img src={Imagen3} className="d-flex w-100"alt="misión"/>
                </div>
                <div className="carousel-item">
                <img src={Imagen4}className="d-flex w-100" alt="visión"/>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        /*FIN CONTENEDOR QUIENES SOMOS---------------------------------------------------------------------------------*/
    )
}

export default contenedorQuienesSomos
