import React from 'react'
import Colaboradoras from '../../utils/images/Colaboradoras/colaboradoras.png' /* SE IMPORTO LA IMAGEN PRINCIPAL DE LA PÁGINA DE COLABORADORAS*/
import '../../utils/css/Colaboradoras/colaboradoras.css' /* SE IMPORTO LOS ESTILOS DE COLABORADORAS*/
 

const ladoderecho = () => {
    return (
    <div className="ladoizquierdo"> {/* INICIO DEL CONTENEDOR LADO IZQUIERDO*/}
        <div className="imagenGrande">
          <img src={Colaboradoras} alt="Imagen colaboradoras" />
        </div>
        <div className="textImagenGrande">
          <p>
            Hola! Somos desarrolladoras Front End, para nosotras es un gusto
            presentarnos puesto que cada una tiene habilidades diferentes pero únicas
            en este mundo tan amplio en la programación. Todo nuestro esfuerzo y
            aprendizaje se visualiza en este proyecto pues nos dimos la oportunidad de
            aplicar todos nuestros conocimientos en un proyecto social como lo fue
            visualizar a algunos campesinos sin ningún animo de lucro.
          </p>
        </div>
    </div> /*FIN DEL CONTENEDOR LADO IZQUIERDO*/

    )
}

export default ladoderecho