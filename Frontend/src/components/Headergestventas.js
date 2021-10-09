import React from 'react'
import Carrito_Mercado from '../assets/img/Carrito_Mercado.png'


const Headergestventas = () => {
    return (
        <div>
            <div id="headerPpal" class="headerPpal-expanded">
                <img src={Carrito_Mercado} alt="" />
                <span>GESTION DE VENTAS</span>
                <button id ="Cerrar" class="Cerrar">
                    Cerrar sesión
                </button>
                <span id="Usuario" class="Usuario" >
                    Nombre de usuario activo (admin123)
                </span>
            </div>
        </div>
        

    )
}

export default Headergestventas