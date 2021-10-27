import React from 'react';
import '../App.css';
import Headeringresoproduc from './Headeringresoproduc';
import axios from "axios";
import notie from 'notie';

const enviarDatos = async (e) => {
    const options = {
        method: "POST",
        url: 'http://localhost:4500/proyecto/productos/new',
        headers: { "Content-Type": "application/json" },
        data: {
                ID: document.getElementById('producto').value,
                Descripcion: document.getElementById('producto').value,
                ValorUnitario: document.getElementById('Valor').value,
                Estado: document.getElementById('idProducto').value
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

    const editarDatos = async (e, listProductos) => {
        e.preventDefault();
        console.log(listProductos);
       const id = listProductos.productos._id;
        const options = {
            method: "PUT",
            url: 'http://localhost:4500/proyecto/productos/actualizar/'+id,
            headers: { "Content-Type": "application/json" },
            data: {
                Descripcion: document.getElementById('producto').value,
                ValorUnitario: document.getElementById('Valor').value,
                Estado: document.getElementById('estado').value
            },
        };

        await axios
            .request(options)
            .then(function (response) {
                if(response.status===200){
                    notie.alert({ text: response.data.msg, type: 'success', time: 10 });
                }
            })
            .catch(function (error) {
                console.error(error);
            });
        }



const Ingresoproductos = (props) => {
    var id = props.location.listProductos ?props.location.listProductos.productos.ID:"";
    var descripcion = props.location.listProductos ?props.location.listProductos.productos.Descripcion:"";
    var valorUnitario = props.location.listProductos ?props.location.listProductos.productos.ValorUnitario:"";
    return (
        <div>
            <Headeringresoproduc id={props.match.params.id}/> 
            <div class="divTabla">
            <form onSubmit={descripcion 
                    ?e => editarDatos(e, props.location.listProductos) 
                        : enviarDatos}>
                <table id="tablaIngresoDatos">
                    <tr>
                        <td><h5>ID</h5></td>
                        {id ? <td class="Izquierda"><h3>{id}</h3></td>:
                        <td class="Izquierda"><input type="text" size="70"  name="idProducto" id="idProducto" defaultValue={id}/></td>
                        }
                       
                    </tr>

                    <tr>
                        <td><h5>Descripción de producto</h5></td>
                        <td class="Izquierda"><input type="text" size="70" name="producto" id="producto" defaultValue={descripcion}/></td>
                    </tr>

                    <tr>
                        <td><h5>Valor Unitario</h5></td>
                        <td class="Izquierda"><input type="text" size="70" name="IDVendedor" id="Valor" defaultValue={valorUnitario} /></td>
                    </tr>

                    <tr>
                        <td><h5>Estado</h5></td>
                        <td class="Izquierda">
                            <select name="Estado" id="estado">
                                <option value="Disponible">Disponible</option>
                                <option value="No Disponible">No Disponible</option>
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