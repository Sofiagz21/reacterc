import React from 'react'
import image1 from '../../utils/images/Home/Productos/1.png'
import image2 from '../../utils/images/Home/Productos/2.png'
import image3 from '../../utils/images/Home/Productos/3.png'
import image4 from '../../utils/images/Home/Productos/4.png'
import image5 from '../../utils/images/Home/Productos/5.png'
import image6 from '../../utils/images/Home/Productos/6.png'
import '../../utils/css/Home/StylesHome.css'

const contenedorProductos = () => {
    return (

  /* CONTENEDOR PRODUCTOS---------------------------------------------------------------------------------------*/
  <div className="contenidoProductos">
    <div className="boxProductos">
      <div className="titleBox">
        <div className="titleLleg">
          Llegamos a diferentes ciudades del país.
        </div>
        <div className="textLleg">
          Actualmente tenemos el honor de llegar a la población rural en
          difirentes ciudades y municipios, para que puedan vender sus productos
          sin intermediarios.
        </div>
        <div className="botonLle">
          <button>
            <a href="./src/pages/Productos/productos.html">Ver productos</a>
          </button>
        </div>
      </div>
      <div className="boxFotos">
        <img src={image1} alt />
        <img src={image2} alt />
        <img src={image3} alt />
        <img src={image4} alt />
        <img src={image5} alt />
        <img src={image6} alt />
      </div>
    </div>
  </div>
  /*cierre contenido productos*/
  /* FIN CONTENEDOR PRODUCTOS---------------------------------------------------------------------------------------*/

    )
}

export default contenedorProductos
