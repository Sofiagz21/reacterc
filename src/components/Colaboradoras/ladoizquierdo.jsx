import React from 'react'
import '../../utils/css/Colaboradoras/colaboradoras.css'
import Sofia from '../../utils/images/Colaboradoras/Sofia.jpeg'
import Facebook from '../../utils/images/Colaboradoras/facebook.png'
import Twitter from '../../utils/images/Colaboradoras/twitter.png'
import Instagram from '../../utils/images/Colaboradoras/instagram_.png'
import Mafe from '../../utils/images/Colaboradoras/Mafe.jpeg'






const ladoizquierdo = () => {
    return (
        <div className="ladoderecho">
  <div className="colaboradorasTitle">
    <h1>SOBRE NOSOTRAS </h1>
  </div>
  <div className="container">
    <div className="card">
      {/* container imagenes y fondo */}
      <div className="images">
        <div className="imgBox">
        <img className="person" src={Sofia} alt />
        </div>
      </div>
      {/* contenedor caja 1 */}
      <div class="content">
                   <p>Developer Front End</p> 
                   <h3>Sofia Gonzalez Zubieta</h3>
                   {/*contenedor redes sociales*/}
                   <div className="social">
          <a href="https://www.facebook.com/sofia.gonzalezzubieta"> <img src={Facebook} alt />
            <i />
          </a>
          <a href="https://www.instagram.com/sofiaaa_gonzalez_/"> <img src={Twitter} alt />
            <i />
          </a>
          <a href="https://mobile.twitter.com/sofiaaaa_gz"> <img src={Instagram} alt />
            <i />
          </a>
        </div>
    </div>
    </div>
    <div className="card">
      {/* container imagenes y fondo */}
      <div className="images">
        <div className="imgBox">
        {/*<img className="person" src={} alt />*/}
        </div>
      </div>
      {/* contenedor caja 1 */}
      <div class="content">
                   <p>Developer Front End</p> 
                   <h3>Diana Carolina Londoño</h3>
                   {/*contenedor redes sociales*/}
                   <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100010720841197"> <img src={Facebook} alt />
            <i />
          </a>
          <a href="https://www.instagram.com/_dianacarolina0_/"> <img src={Twitter} alt />
            <i />
          </a>
          <a href="https://mobile.twitter.com/pitonxlx"> <img src={Instagram} alt />
            <i />
          </a>
        </div>
    </div>
    </div>
    <div className="card">
      {/* container imagenes y fondo */}
      <div className="images">
        <div className="imgBox">
        {/*<img className="person" src={Mafe} alt />*/}
        </div>
      </div>
      {/* contenedor caja 1 */}
      <div class="content">
                   <p>Developer Front End</p> 
                   <h3>Laura Tatiana  <br/>Celis Ballesteros</h3>
                   
                   {/*contenedor redes sociales*/}
                   <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100007725649378"> <img src={Facebook} alt />
            <i />
          </a>
          <a href="https://www.instagram.com/blaauratt/"> <img src={Twitter} alt />
            <i />
          </a>
          <a href="https://mobile.twitter.com/blaauratt"> <img src={Instagram} alt />
            <i />
          </a>
        </div>
    </div>
    
    </div>
    <div className="card">
      {/* container imagenes y fondo */}
      <div className="images">
        <div className="imgBox">
        {/*<img className="person" src={Mafe} alt />*/}
        </div>
      </div>
      {/* contenedor caja 1 */}
      <div class="content">
                   <p>Developer Front End</p> 
                   <h3>Maria Fernanda   <br/>Caro Carvajal</h3>
                   
                   {/*contenedor redes sociales*/}
                   <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100014097480970"> <img src={Facebook} alt />
            <i />
          </a>
          <a href="https://www.instagram.com/mfd_ffx/"> <img src={Twitter} alt />
            <i />
          </a>
          <a href="https://mobile.twitter.com/mbx_maria"> <img src={Instagram} alt />
            <i />
          </a>
        </div>
    </div>
    </div>
   

  </div>
</div>
    )
}

export default ladoizquierdo