import React from 'react'
import image1 from '../../utils/images/Home/Productos/1.png' /* se importa la imagen productos 1*/
import image2 from '../../utils/images/Home/Productos/2.png' /* se importa la imagen productos 2*/
import image3 from '../../utils/images/Home/Productos/3.png' /* se importa la imagen productos 3*/
import image4 from '../../utils/images/Home/Productos/4.png' /* se importa la imagen productos 4*/
import image5 from '../../utils/images/Home/Productos/5.png' /* se importa la imagen productos 5*/
import image6 from '../../utils/images/Home/Productos/6.png' /* se importa la imagen productos 6*/
import '../../utils/css/Home/StylesHome.css' /* se importa los estilos Home*/

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
          <img src={image1} alt="imagen1"/>
          <img src={image2} alt="imagen2"/>
          <img src={image3} alt="imagen3"/>
          <img src={image4} alt="imagen4"/>
          <img src={image5} alt="imagen5"/>
          <img src={image6} alt="imagen6"/>
      </div>
    </div>
  </div>
  /*cierre contenido productos*/
  /* FIN CONTENEDOR PRODUCTOS---------------------------------------------------------------------------------------*/

    )
}

export default contenedorProductos
