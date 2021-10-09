import React from 'react'
import '../App.css'
<<<<<<< HEAD
import Headergestproduct from './Headergestproduct';
import Agregar from '../assets/img/Agregar.png';
import Lapiz from '../assets/img/Lapis.png';


=======
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
>>>>>>> f3bd46097f65527f992f13d4da04d0e18a827f10
const Gestionproductos =() =>{
    return (

        <div>
            <Headergestproduct />
        <div class="iconosVentas">
        <ul>
            <li>
<<<<<<< HEAD
                <img src={Agregar} alt=""/>
                <span>Nuevo Producto</span>
=======
                {/* <img src="Imagenes/Agregar.png" alt=""> */}
                <div class="title"><span><Link to="Ingresoproductos">Nuevo Producto</Link></span></div>
>>>>>>> f3bd46097f65527f992f13d4da04d0e18a827f10
            </li>
        </ul>
            
    </div>
    <div class="filtro">
        <span>Filtro</span>
        <select class="redondo">
            <option value="">ID producto</option>
            <option value="">Descripcion</option>
        </select>
        <input type="text" class="redondo"/>
    </div>
    <div class="divTabla">
        <table>
            <tr>
                <th>Id Producto</th>
                <th>Nombre Producto</th>
                <th>Valor Unitario</th>
                <th>Estado</th>
                <th>Acción</th>
            </tr>
            <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td><img src={Lapiz}  alt="" id="img_lapiz" /></td>

            </tr>
            <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td><img src={Lapiz}  alt="" id="img_lapiz" /></td>
                
            </tr>
            <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td><img src={Lapiz}  alt="" id="img_lapiz" /></td>
            </tr>
        </table>
    </div>
    </div>
    )
}

export default Gestionproductos