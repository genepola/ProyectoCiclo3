import React from 'react';
import '../App.css';
import Headeringresoproduc from './Headeringresoproduc';
import axios from "axios";

const enviarDatos = async (e) => {
    const options = {
        method: "POST",
        url: 'http://localhost:4500/proyecto/productos/new',
        headers: { "Content-Type": "application/json" },
        data: {
            Descripcion:document.getElementById('Nombre').value,
            ValorUnitario: document.getElementById('Valor').value,


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

    };



const Ingresoproductos = () => {
    return (
        <div>
            <Headeringresoproduc/> 
            <div class="divTabla">
                <form onSubmit={enviarDatos}>
                <table id="tablaIngresoDatos">
                    <tr>
                        <td><h5>ID</h5></td>
                        <td class="Izquierda"><h3>000004</h3></td>
                    </tr>

                    <tr>
                        <td><h5>Descripción de producto</h5></td>
                        <td class="Izquierda"><input type="text" size="70" maxlength="60" name="Nombre" id="Nombre" /></td>
                    </tr>

                    <tr>
                        <td><h5>Valor Unitario</h5></td>
                        <td class="Izquierda"><input type="text" size="70" maxlength="60" name="IDVendedor" id="Valor" /></td>
                    </tr>

                    <tr>
                        <td><h5>Estado</h5></td>
                        <td class="Izquierda">
                            <select name="Estado">
                                <option>Disponible</option>
                                <option>No Disponible</option>
                            </select>
                        </td>
                    </tr>
                </table>
                
                <div align="center">
                    <h5>
                        <button class="Guardar">
                            Guardar
                        </button>
                    </h5>
                </div>
                </form>
            </div>
        </div>
        
    )
}

export default Ingresoproductos