import React from 'react'
import Headergestventas from './Headergestventas';
import Agregar from '../assets/img/Agregar.png';
import Editar from '../assets/img/Editar.png';
import Guardar from '../assets/img/Guardar.png';
import { Link } from "react-router-dom";

function gestionventas() {
    return (

        <div >
            <Headergestventas />
            <div className="iconosVentas">
                <ul>
                    <li>

                    <Link to="Ingresoventas/new"><img src={Agregar} alt=""/></Link>
                        <span>Nueva Venta</span>

                        {/* <img src="Imagenes/Agregar.png" alt=""> */}
                        {/* <div className="title"><span><Link to="Ingresoventas">Nueva venta</Link></span></div> */}

                        {/* <img src="Imagenes/Agregar.png" alt=""> */}
                        {/* <div className="title"><span><Link to="Ingresoventas">Nueva venta</Link></span></div> */}
                    </li>
                    <li>
                    <Link to="Ingresoventas/edit"><img src={Editar} alt=""/></Link>
                        <span>Editar Venta</span>
                    </li>
                    <li>
                    <img src={Guardar} alt=""/> 
                        <span>Guardar Venta</span>
                    </li>
                </ul>

            </div>
            <div className="filtro">
                <span>Filtro</span>
                <select className="redondo">
                    <option value="">ID venta</option>
                    <option value="">ID Cliente</option>
                    <option value="">Nombre Cliente</option>
                </select>
                <input type="text" className="redondo" />
            </div>
            <div className="divTabla">
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
