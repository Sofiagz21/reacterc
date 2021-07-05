import React from 'react'
import Inicio from '../components/Home/contenedorHome'
import QuienesSomos from '../components/Home/contenedorQuienesSomos'
import Produtos from '../components/Home/contenedorProductos'
import Footer from '../components/footer/Footer'


const Home = () => {
    return (
        <div>
            <Inicio/>
            <QuienesSomos/>
            <Produtos/>
            <Footer/>
        </div>
    )
}

export default Home
