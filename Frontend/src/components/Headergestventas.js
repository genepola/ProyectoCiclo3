import React from 'react';
import Carrito_Mercado from '../assets/img/Carrito_Mercado.png';
import { Link } from "react-router-dom";


const Headergestventas = () => {
    return (
        <div>
            <div id="headerPpal" className="headerPpal-expanded">
                <img src={Carrito_Mercado} alt="" />
                <span>GESTION DE VENTAS</span>
                <Link to="Login"><button id ="Cerrar" className="Cerrar">
                    Cerrar sesión
                </button></Link>
                <span id="Usuario" className="Usuario" >
                    Nombre de usuario activo (admin123)
                    
                </span>
            </div>
        </div>
        

    )
}

export default Headergestventas