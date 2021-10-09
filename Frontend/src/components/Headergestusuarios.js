import React from 'react'
import Persona from '../assets/img/persona_mas.png'


const Headergestusuarios = () => {
    return (
        <div>
            <div id="headerPpal" class="headerPpal-expanded">
                <img src={Persona} alt="" />
                <span>GESTION DE USUARIOS</span>
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

export default Headergestusuarios