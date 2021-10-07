import React from 'react'

function gestionventas() {
    return (

        <div >
            <div class="iconosVentas">
                <ul>
                    <li>
                        {/* <img src="Imagenes/Agregar.png" alt=""> */}
                        <span>Nueva Venta</span>
                    </li>
                    <li>
                        {/* <img src="Imagenes/Editar.png" alt=""> */}
                        <span>Editar Venta</span>
                    </li>
                    <li>
                        {/* <img src="Imagenes/Guardar.png" alt=""> */}
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
