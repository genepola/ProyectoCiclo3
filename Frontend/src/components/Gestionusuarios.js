import React from 'react'
import '../App.css'
<<<<<<< HEAD
import Editar from '../assets/img/Editar.png';
import Agregar from '../assets/img/Agregar.png';
import Headergestusuarios from './Headergestusuarios';

=======
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
>>>>>>> f3bd46097f65527f992f13d4da04d0e18a827f10
const Gestionusuarios =() =>  {
    return (
        <div>
              <Headergestusuarios />  
                <div class="iconosVentas">
        <ul>
            <li>
<<<<<<< HEAD
            <img src={Agregar} alt=""/>
                <span>Nuevo Usuario</span>
=======
                {/* <img src="Imagenes/Agregar.png" alt=""> */}
                <div class="title"><span><Link to="Ingresousuarios">Nuevo Usuario</Link></span></div>
>>>>>>> f3bd46097f65527f992f13d4da04d0e18a827f10
            </li>
            <li>
            <img src={Editar} alt=""/> 
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
