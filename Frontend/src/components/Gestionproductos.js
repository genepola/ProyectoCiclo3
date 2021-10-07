import React from 'react'
import '../App.css'
const Gestionproductos =() =>{
    return (
        <div>

        <div class="iconosVentas">
        <ul>
            <li>
                {/* <img src="Imagenes/Agregar.png" alt=""> */}
                <span>Nuevo Producto</span>
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
                <td>{/* <img src="Imagenes/Lapis.png" alt="Lapiz"id="img_lapiz"> */}</td>

            </tr>
            <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>{/* <img src="Imagenes/Lapis.png" alt="Lapiz"id="img_lapiz"> */}</td>
                
            </tr>
            <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>{/* <img src="Imagenes/Lapis.png" alt="Lapiz"id="img_lapiz"> */}</td>
            </tr>
        </table>
    </div>
    </div>
    )
}

export default Gestionproductos