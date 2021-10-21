import React, { useEffect } from 'react';
import '../App.css'
import Agregar from '../assets/img/Agregar.png';
import Headergestusuarios from './Headergestusuarios';
import Lapiz from '../assets/img/Lapis.png';
import axios from 'axios'

import { Link } from "react-router-dom";

const Gestionusuarios =() =>  {

    const listarUsuario = async (response) => {
        try {
            const { status } = await axios({
                method: 'POST',
                url: 'http://localhost:4500/proyecto/auth/listar',
                headers: {
                    'Authorization': `Bearer ${response.tokenId}`
                }
            });
            console.log('status', status);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarUsuario();
    }, []);
    return (
        <div>
              <Headergestusuarios />  
                <div className="iconosVentas">
        <ul>
            <li>

            <Link to="Ingresousuarios"><img src={Agregar} alt=""/></Link>
                <span>Nuevo Usuario</span>

                {/* <img src="Imagenes/Agregar.png" alt=""> */}
               {/*  <div className="title"><span><Link to="Ingresousuarios">Nuevo Usuario</Link></span></div> */}

                {/* <img src="Imagenes/Agregar.png" alt=""> */}
              {/*   <div className="title"><span><Link to="Ingresousuarios">Nuevo Usuario</Link></span></div> */}
            </li>
            
        </ul>
            
    </div>
    <div className="filtro">
        <span>Buscar</span>
            <input type="text" className="redondo"/>
    </div>
    <div className="divTabla">
        <table>
            <tr>
                <th>Id Usuario</th>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acción</th>
            </tr>
            <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td><Link to="Ingresousuarios"> <img src={Lapiz}  alt="" id="img_lapiz" /></Link></td>
            </tr>
            <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td><Link to="Ingresousuarios"> <img src={Lapiz}  alt="" id="img_lapiz" /></Link></td>
                
            </tr>
            <tr>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td>Dato</td>
                <td><Link to="Ingresousuarios"> <img src={Lapiz}  alt="" id="img_lapiz" /></Link></td>
            </tr>
        </table>
        <button onClick={Gestionusuarios}>HOLA TODOS</button>
    </div>
        </div>
    )
}

export default Gestionusuarios
