import React from 'react';
import Persona from '../assets/img/persona_mas.png';
import { Link } from "react-router-dom";


const Headergestusuarios = () => {
    return (
        <div>
            <div id="headerPpal" className="headerPpal-expanded">
                <img src={Persona} alt="" />
                <span>GESTION DE USUARIOS</span>
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

export default Headergestusuarios