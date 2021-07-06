import React from 'react'
import Lado_derecho from '../components/Colaboradoras/ladoderecho'
import Lado_izquierdo from '../components/Colaboradoras/ladoizquierdo'
import Footer from '../components/footer/Footer'
import '../utils/css/Colaboradoras/colaboradoras.css'

const Colaboradoras = () => {
    return (
        <div>
          <Lado_derecho/> 
          <Lado_izquierdo/>
          <Footer/>
        </div>
    )
}

export default Colaboradoras
