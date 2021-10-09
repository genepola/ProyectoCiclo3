import React from 'react'
import '../App.css'
const Ingresoventas = () => {
    return (
        <div>
            <div class="divFiltros">
                <ul>
                    <li>Fecha de venta <input type="date" name="fechaVenta" /></li>
                </ul>
                <ul>
                <li>
                Identificación <input type ="text" name="cliente" id="cliente" class ="txtNit"/>
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
                {/* <{img src="Imagenes/Agregar.png" alt="Agregar"}> */}
                </li>
                </ul>
                </div>

                <div class ="divTabla">
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
                <td>{/* <img class ="quitar" src="Imagenes/Quitar.png" alt=""> */}</td>
                </tr>
                <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>{/* <{img class ="quitar" src="Imagenes/Quitar.png" alt=""}> */}</td>
                </tr>
                <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>{/* <{img class ="quitar" src="Imagenes/Quitar.png" alt=""}> */}</td>
                </tr>
                </table>
                <div class ="labelTotal">
                Totalventa  <input type ="text" name="venta" id="venta" class ="txtCliente"/>
                </div>
                <div class ="labelTotal2">
                <button class ="btnGuardarVentas">Guardar
                </button>
                </div>

                </div>
            </div>
     )
}

export default Ingresoventas