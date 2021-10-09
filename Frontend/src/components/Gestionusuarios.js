import React from 'react'
import '../App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const Gestionusuarios =() =>  {
    return (
        <div>
                
                <div class="iconosVentas">
        <ul>
            <li>
                {/* <img src="Imagenes/Agregar.png" alt=""> */}
                <div class="title"><span><Link to="Ingresousuarios">Nuevo Usuario</Link></span></div>
            </li>
            <li>
                {/* <img src="Imagenes/Editar.png" alt=""> */}
                <span>Editar Usuario</span>
            </li>
        </ul>
            
    </div>
    <div class="filtro">
        <span>Buscar</span>
            <input type="text" class="redondo"/>
    </div>
    <div class="divTabla">
        <table>
            <tr>
                <th>Id Usuario</th>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acción</th>
            </tr>
            <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
            </tr>
            <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                
            </tr>
            <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
            </tr>
        </table>
    </div>
        </div>
    )
}

export default Gestionusuarios
