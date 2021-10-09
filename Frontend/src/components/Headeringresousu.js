import React from 'react'
import Agenda from '../assets/img/Agenda.png'


const Headeringresousu = () => {
    return (
        <div>
            <div id="headerPpal" class="headerPpal-expanded">
                <img src={Agenda} alt="" />
                <span>INGRESO/EDICIÓN DE USUARIO</span>
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

export default Headeringresousu