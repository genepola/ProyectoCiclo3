import React from 'react';
import Producto from '../assets/img/Producto.png';
import { Link } from "react-router-dom";


const Headergestproduct = () => {
    return (
        <div>
            <div id="headerPpal" className="headerPpal-expanded">
                <img src={Producto} alt="" />
                <span>GESTION DE PRODUCTOS</span>
                <Link to="Login"><button id ="Cerrar" className="Cerrar">
                    Cerrar sesión                   
                </button> </Link>
                <span id="Usuario" className="Usuario" >
                    Nombre de usuario activo (admin123)
                    
                </span>
            </div>
        </div>

    )
}


export default Headergestproduct