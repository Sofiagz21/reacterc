import React from 'react'
import Logosinfondo from '../../utils/images/Home/logosinfondo.png' /* se importa la imagen logo*/
import Scroll from '../../utils/images/Home/scroll.svg' /* se importa la imagen scroll*/
import '../../utils/css/Home/StylesHome.css'  /* se importa los estilos del home*/

const contenedorHome = () => {
    return (
        <div className="ContainerHome"> {/*INICIO CONTAINER HOME */}
            <div className="ImagenFondo">
                <div className="Logo">
                    <img src={Logosinfondo} alt="logosinfondo" />
                </div>
                <div className="Scroll">
                <a href="#QuienesSomos">
                    <img src={Scroll} alt="scroll" />
                </a>
                </div>
            </div>
        </div> /* fin contendedor home */

    )
}

export default contenedorHome
