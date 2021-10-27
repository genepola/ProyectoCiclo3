import React, {  } from 'react'
import '../App.css'
import Headeringresousu from './Headeringresousu';
import axios from "axios";
import notie from 'notie';

    const enviarDatos = async () => {
        //e.preventDefault();
        const options = {
            method: "POST",
            url: 'http://localhost:4500/proyecto/auth/new',
            headers: { "Content-Type": "application/json" },
            data: {
                cedula:document.getElementById('ID').value,
                name: document.getElementById('Nombre').value,
                email: document.getElementById('Email').value,
                roles: document.getElementById('Rol').value,
                estado: document.getElementById('estado').value,
                idToken:''
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
        /* toast.success("Usuario creado con éxito.."); */
    };

    const editarDatos = async (e, listaUsuarios) => {
        e.preventDefault();
        console.log(listaUsuarios);
       const id = listaUsuarios.usuarios._id;
        const options = {
            method: "PUT",
            url: 'http://localhost:4500/proyecto/auth/actualizar/'+id,
            headers: { "Content-Type": "application/json" },
            data: {
                name: document.getElementById('Nombre').value,
                email: document.getElementById('Email').value,
                roles: document.getElementById('Rol').value,
                estado: document.getElementById('estado').value
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
        /* toast.success("Usuario creado con éxito.."); */
    };
    const Ingresousuarios = (props) => {
        var id = props.location.listUsuarios ?props.location.listUsuarios.usuarios.cedula:"";
        var name = props.location.listUsuarios ?props.location.listUsuarios.usuarios.name:"";
        var email = props.location.listUsuarios ?props.location.listUsuarios.usuarios.email:"";
        return (
            <div>
                <Headeringresousu id={props.match.params.id}/>
                <div className="divTabla">
                    <form onSubmit={name 
                    ?e => editarDatos(e, props.location.listUsuarios) 
                        : enviarDatos}>
                        <table id="tablaIngresoDatos">
                            { !id?
                            <tr>
                                <td><h5>Cedula</h5></td>
                                <td className="Izquierda"><input type="text" size="70"  name="ID" id="ID" defaultValue={id} /></td>
                            </tr>
                            :''}
                            <tr>
                                <td><h5>Nombre</h5></td>
                                <td className="Izquierda"><input type="text" size="70" name="Nombre" id="Nombre" defaultValue={name} /></td>
                            </tr>

                            <tr>
                                <td><h5>Email</h5></td>
                                <td className="Izquierda"><input type="text" size="70" name="Email" id="Email" defaultValue={email} /></td>
                            </tr>

                            <tr>
                                <td><h5>Roles de usuario</h5></td>
                                <td className="Izquierda"><select name="SeleccionRol" id="Rol">

                                    <option value="6161e35bfba65a4e8b2b004f">Administrador</option>

                                    <option value="6161e389fba65a4e8b2b0050">Vendedor</option>
                                    
                                </select></td>
                            </tr>

                            <tr>
                                <td><h5>Estado del usuario</h5></td>
                                <td className="Izquierda">
                                    <select id="estado">

                                        <option value="6166ec2caf75b084cdec9996">Pendiente</option>

                                        <option value="6166ec2caf75b084cdec9998">Autorizado</option>

                                        <option value="6166ec2caf75b084cdec9997">No autorizado</option>
                                     
                                    </select>
                                </td>
                            </tr>

                        </table>

                        <div align="center">
                            <h5>
                                <button className="Guardar">
                                    Guardar
                                </button>
                            </h5>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    export default Ingresousuarios
