import React from 'react'
<<<<<<< HEAD
import Headergestventas from './Headergestventas';
import Agregar from '../assets/img/Agregar.png';
import Editar from '../assets/img/Editar.png';
import Guardar from '../assets/img/Guardar.png';
=======
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

>>>>>>> f3bd46097f65527f992f13d4da04d0e18a827f10
function gestionventas() {
    return (

        <div >
            <Headergestventas />
            <div class="iconosVentas">
                <ul>
                    <li>
<<<<<<< HEAD
                    <img src={Agregar} alt=""/>
                        <span>Nueva Venta</span>
=======
                        {/* <img src="Imagenes/Agregar.png" alt=""> */}
                        <div class="title"><span><Link to="Ingresoventas">Nueva venta</Link></span></div>
>>>>>>> f3bd46097f65527f992f13d4da04d0e18a827f10
                    </li>
                    <li>
                    <img src={Editar} alt=""/> 
                        <span>Editar Venta</span>
                    </li>
                    <li>
                    <img src={Guardar} alt=""/> 
                        <span>Guardar Venta</span>
                    </li>
                </ul>

            </div>
            <div class="filtro">
                <span>Filtro</span>
                <select class="redondo">
                    <option value="">ID producto</option>
                    <option value="">Descripcion</option>
                </select>
                <input type="text" class="redondo" />
            </div>
            <div class="divTabla">
                <table>
                    <tr>
                        <th>Id Venta</th>
                        <th> Fecha de venta</th>
                        <th>Cliente</th>
                        <th>Total Venta</th>
                        <th>Estado</th>
                    </tr>
                    <tr>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td><select>
                            <option>Estado 1</option>
                            <option>Estado 2</option>
                            <option>Estado 3</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td><select>
                            <option>Estado 1</option>
                            <option>Estado 2</option>
                            <option>Estado 3</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td>Dato</td>
                        <td><select>
                            <option>Estado 1</option>
                            <option>Estado 2</option>
                            <option>Estado 3</option>
                        </select></td>
                    </tr>
                </table>
            </div>
        </div>

    )
}

export default gestionventas
