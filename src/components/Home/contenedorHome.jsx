import React from 'react'
import Logosinfondo from '../../utils/images/Home/logosinfondo.png'
import Scroll from '../../utils/images/Home/scroll.svg'
import '../../utils/css/Home/StylesHome.css'

const contenedorHome = () => {
    return (
        <div className="ContainerHome">
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
</div>

    )
}

export default contenedorHome
