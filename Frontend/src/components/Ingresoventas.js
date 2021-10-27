import React from 'react'
import '../App.css'
import Headeringresoventas from './Headeringresoventas';
import Agregar from '../assets/img/Agregar.png';
import Quitar from  '../assets/img/Quitar.png';
import axios from "axios";

const enviarDatos = async (e) => {
    const options = {
        method: "POST",
        url: 'localhost:4500/proyecto/ventas/new',
        headers: { "Content-Type": "application/json" },
        data: {
            Fecha:document.getElementById('Fecha').value,
            Cedula: document.getElementById('cedula').value,
            Cliente: document.getElementById('cliente').value,
            Cantidad: document.getElementById('cantidad').value,
/*              estado: document.getElementById('estado').Writable,
            roles:document.getElementById('rol').Writable */

        },
    };

    await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
    /* toast.success("Usuario creado con éxito.."); */
};

const Ingresoventas = (props) => {
    return (
        <div>
            <Headeringresoventas id={props.match.params.id}/> 
            <div class="divFiltros">
                <ul>
                    <li>Fecha de venta <input type="date" name="fechaVenta" id="Fecha" /></li>
                </ul>
                <ul>
                <li>
                Identificación <input type ="text" name="cliente" id="cedula" class ="txtNit"/>
                Cliente<input type ="text" name="cliente" id="cliente" class ="txtCliente"/>
                </li>
                </ul>
                <ul>
                <li>
                <select>
                <option>Descripcion de producto</option>
                <option>Producto 1</option>
                <option>Producto 2</option>
                </select>
                </li>
                <li>Cantidad <input type ="text" name="cantidad" id="cantidad"/></li>
                <li>
                <img src={Agregar} alt=""/>
                </li>
                </ul>
                </div>

                <div class ="divTablaventas">
                <table>
                <tr>
                <th>Producto ID</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Valor unitario</th>
                <th>Valor total</th>
                <th>Acción</th>
                </tr>
                <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td><img class="quitar" src={Quitar} alt=""/></td>
                </tr>
                <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td><img class="quitar" src={Quitar} alt=""/></td>
                </tr>
                <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td><img class="quitar" src={Quitar} alt=""/></td>
                </tr>
                </table>
                <div class ="labelTotal">
                <label class ="txtCliente">TOTAL VENTAS</label>
                </div>
                <div class ="labelTotal2">
                <button class ="btnGuardarVentas">Guardar
                </button>

                </div>
                
                </div>
                <form/>
            </div>
     )
}

export default Ingresoventas