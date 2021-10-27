import React from 'react'
import '../App.css'
import Headeringresousu from './Headeringresousu';
import useForms from '../hooks/Useform';
import axios from "axios";


const initialForm = {
    ID: '',
    Nombre: '',
    Email: '',
    SeleccionRol: '',
    SeleccionEstado: ''
};


/*     const { ID, setID } = useState()
    const { nombre, setnombre } = useState()
    /*     const { Email, setEmail } = useState()
        const { SeleccionRol, setSeleccionRol } = useState()
        const { SeleccionRo2, setSeleccionRo2 } = useState() */

    const enviarDatos = async (e) => {
        const options = {
            method: "POST",
            url: 'http://localhost:4500/proyecto/auth/new',
            headers: { "Content-Type": "application/json" },
            data: {
                cedula:document.getElementById('ID').value,
                name: document.getElementById('Nombre').value,
                email: document.getElementById('Email').value,
/*                 estado: document.getElementById('estado').Writable,
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

    const Ingresousuarios = (props) => {

        return (
            <div>
                <Headeringresousu id={props.match.params.id}/>
                <div className="divTabla">
                    <form onSubmit={enviarDatos}>
                        <table id="tablaIngresoDatos">
                            <tr>
                                <td><h5>ID</h5></td>
                                <td className="Izquierda"><input type="text" size="70" maxlength="60" name="ID" id="ID" /></td>
                            </tr>

                            <tr>
                                <td><h5>Nombre</h5></td>
                                <td className="Izquierda"><input type="text" size="70" maxlength="60" name="Nombre" id="Nombre"/></td>
                            </tr>

                            <tr>
                                <td><h5>Email</h5></td>
                                <td className="Izquierda"><input type="text" size="70" maxlength="60" name="Email" id="Email" /></td>
                            </tr>

                            <tr>
                                <td><h5>Roles de usuario</h5></td>
                                <td className="Izquierda"><select name="SeleccionRol" id="Rol">

                                    <option>Administrador</option>

                                    <option>Vendedor</option>
                                    
                                </select></td>
                            </tr>

                            <tr>
                                <td><h5>Estado del usuario</h5></td>
                                <td className="Izquierda">
                                    <select id="estado">

                                        <option value="Ivan">Pendiente</option>

                                        <option value="asdasd">Autorizado</option>

                                        <option>No autorizado</option>
                                     
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
