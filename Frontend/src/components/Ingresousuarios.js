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

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                name: 'Rodigro',
                email: 'Meneses',
                cedula: 42344
=======
                name: 'Rodrigo',
                email: 'meneses.rodrigo@hotmail.com'
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
    const Ingresousuarios = () => {

        const [formValues, handleInputChange, reset] = useForms(initialForm);
        const { ID, Nombre, Email, SeleccionRol, SeleccionEstado } = formValues

=======

    const Ingresousuarios = () => {
        const [formValues, handleInputChange, reset] = useForms(initialForm);
        const { ID, Nombre, Email, SeleccionRol, SeleccionEstado } = formValues
>>>>>>> Stashed changes
        return (
            <div>
                <Headeringresousu />
                <div className="divTabla">
                    <form onSubmit={enviarDatos}>
                        <table id="tablaIngresoDatos">
                            <tr>
                                <td><h5>ID</h5></td>
                                <td className="Izquierda"><input type="text" size="70" maxlength="60" name="ID" onChange={handleInputChange} /></td>
                            </tr>

                            <tr>
                                <td><h5>Nombre</h5></td>
                                <td className="Izquierda"><input type="text" size="70" maxlength="60" name="Nombre" onChange={handleInputChange}  /></td>
                            </tr>

                            <tr>
                                <td><h5>Email</h5></td>
                                <td className="Izquierda"><input type="text" size="70" maxlength="60" name="Email" onChange={handleInputChange}  /></td>
                            </tr>

                            <tr>
                                <td><h5>Roles de usuario</h5></td>
                                <td className="Izquierda"><select name="SeleccionRol">

                                    <option>Administrador</option>

                                    <option>Vendedor</option>
                                    onChange={handleInputChange} 
                                </select></td>
                            </tr>

                            <tr>
                                <td><h5>Estado del usuario</h5></td>
                                <td className="Izquierda">
                                    <select name="SeleccionEstado">

                                        <option value="Ivan">Pendiente</option>

                                        <option value="asdasd">Autorizado</option>

                                        <option>No autorizado</option>
                                        onChange={handleInputChange} 
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
