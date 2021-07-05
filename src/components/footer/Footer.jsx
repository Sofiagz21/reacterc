import React from 'react'
import Image1 from '../../utils/images/Home/logosinfondo.png'
import Image2 from '../../utils/images/Home/redes/facebook.svg'
import Image3 from '../../utils/images/Home/redes/logotipo-de-instagram.svg'

const footer = () => {
    return (
            <footer>
                <div className="cajitafooter">
                <img src={Image1} alt="imagen1"/>
                <div className="frase">El rincón del campo</div>
                </div>
                <div className="RedesSociales">
                <a target="blank" href="https://www.facebook.com/El-rincón-del-campo-110937981233266">
                    <img src={Image2} alt="imagen2"/>
                </a>
                <a target="blank" href="https://www.instagram.com/el_rincon_del_campo/">
                    <img src={Image3} alt="imagen3" /></a>
                </div>
            </footer>
    )
}

export default footer
