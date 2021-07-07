import React from 'react'
import '../../utils/css/Colaboradoras/colaboradoras.css' /* SE IMPORTO LOS ESTILOS DE COLABORADORAS*/
import Sofia from '../../utils/images/Colaboradoras/sofia.png' /* SE IMPORTO LA IMAGEN DE SOFIA*/
import Laura from '../../utils/images/Colaboradoras/laura.png' /* SE IMPORTO LOS ESTILOS DE LAURA*/
import Facebook from '../../utils/images/Colaboradoras/facebook.png' /* SE IMPORTO EL ICONO DE FACEBOOK*/
import Twitter from '../../utils/images/Colaboradoras/twitter.png' /* SE IMPORTO EL ICONO DE TWITTER*/
import Instagram from '../../utils/images/Colaboradoras/instagram_.png' /* SE IMPORTO EL ICONO DE INSTAGRAM*/



const ladoizquierdo = () => {
    return (
        <div className="ladoderecho"> {/* INICIO CONTENEDOR LADO DERECHO*/}
            <div className="colaboradorasTitle">
                <h1>SOBRE NOSOTRAS </h1>
            </div>
            {/* CONTENEDOR QUE CONTIENE LAS CARTAS*/}
            
            <div className="container">
            {/* CARD #1*/}
              <div className="card">
                {/* container imagenes y fondo */}
                <div className="images">
                    <div className="imgBox">
                      <img className="person" src={Sofia} alt="Coalboradora #1" />
                    </div>
                </div>
                {/* contenedor caja 1 */}
                <div class="content">
                    <p>Developer Front End</p> 
                    <h3>Sofia Gonzalez Zubieta</h3>
                    {/*contenedor redes sociales*/}
                    <div className="social">
                      <a href="https://www.facebook.com/sofia.gonzalezzubieta"> <img src={Facebook} alt="icono facebook" />
                      <i />
                      </a>
                      <a href="https://www.instagram.com/sofiaaa_gonzalez_/"> <img src={Instagram} alt="icono Instagram" />
                      <i />
                      </a>
                      <a href="https://mobile.twitter.com/sofiaaaa_gz"> <img src={Twitter} alt="icono Twitter" />
                      <i />
                      </a>
                  </div>
                </div>
              </div>


              {/* CARD #2*/ }
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
                        <a href="https://www.facebook.com/profile.php?id=100010720841197"> <img src={Facebook} alt="icono facebook" />
                          <i />
                        </a>
                        <a href="https://www.instagram.com/_dianacarolina0_/"> <img src={Instagram} alt="icono Instagram" />
                          <i />
                        </a>
                        <a href="https://mobile.twitter.com/pitonxlx"> <img src={Twitter} alt="icono Twitter" />
                          <i />
                        </a>
                  </div>
              </div>
              </div>

            {/* CARD #3*/ }
                <div className="card">
                  {/* container imagenes y fondo */}
                    <div className="images">
                        <div className="imgBox">
                          <img className="person" src={Laura} alt="iamgen colaborador #3" />
                        </div>
                    </div>
            {/* contenedor caja 1 */}
            <div class="content">
                <p>Developer Front End</p> 
                  <h3>Laura Tatiana  <br/>Celis Ballesteros</h3>
                {/*contenedor redes sociales*/}
                <div className="social">
                    <a href="https://www.facebook.com/profile.php?id=100007725649378"> <img src={Facebook} alt="icono facebook" />
                      <i />
                    </a>
                    <a href="https://www.instagram.com/blaauratt/"> <img src={Instagram} alt="icono instagram" />
                      <i />
                    </a>
                    <a href="https://mobile.twitter.com/blaauratt"> <img src={Twitter} alt="icono Twitter" />
                      <i />
                    </a>
              </div>
           </div>
      </div>

      {/* CARD #4*/}
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
                  <a href="https://www.facebook.com/profile.php?id=100014097480970"> <img src={Facebook} alt="icono facebook" />
                    <i />
                  </a>
                  <a href="https://www.instagram.com/mfd_ffx/"> <img src={Instagram} alt="icono Instagram" />
                    <i />
                  </a>
                  <a href="https://mobile.twitter.com/mbx_maria"> <img src={Twitter} alt="icono Twitter" />
                    <i />
                  </a>
              </div>
          </div>
          </div>
    </div>
  </div> /* fin contendedor lado dereceho*/
    )
}

export default ladoizquierdo