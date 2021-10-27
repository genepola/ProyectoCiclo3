import React from 'react';
import Agenda from '../assets/img/Agenda.png';
import { Link } from "react-router-dom";


const Headeringresousu = (props) => {
    const id = props.id==="edit"?"EDITAR":"AGREGAR";
    console.log(props.id);
    return (
        <div>
            <div id="headerPpal" className="headerPpal-expanded">
                <img src={Agenda} alt="" />
                <span>{id} USUARIO</span>
                <Link to="Login"> <button id ="Cerrar" className="Cerrar">
                    Cerrar sesión
                </button></Link>
                <span id="Usuario" className="Usuario" >
                    Nombre de usuario activo (admin123)
                    
                </span>
            </div>
        </div>
        

    )
}

export default Headeringresousu