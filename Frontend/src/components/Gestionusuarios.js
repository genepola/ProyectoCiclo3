import React, { useEffect, useState } from 'react';
import '../App.css'
import Agregar from '../assets/img/Agregar.png';
import Headergestusuarios from './Headergestusuarios';
import useAuth from '../hooks/useAuth';
import { Link } from "react-router-dom";
import axios from 'axios'

const Gestionusuarios =() =>  {

    const auth = useAuth();

    const [usuarios, setUsuarios] = useState([]);

    const ListarUsuarios = async () => {
        try {
            const { status, data } = await axios({
                method: 'GET',
                url: 'http://localhost:4500/proyecto/auth/listar',
                headers: {
                    'Authorization': `Bearer ${auth.token}`
                }
            });
           if(status===200){
               setUsuarios(data.usuarios);
               console.log(usuarios);
           }else{
               console.log("Error");
           }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        ListarUsuarios();
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
                <th>Cedula</th>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acción</th>
            </tr>
                {
                    usuarios.map((usuarios, index)=>(
                        <tr key={usuarios._id}>
                             <td>{usuarios.cedula}</td>
                            <td>{usuarios.name}</td>
                            <td>{usuarios.roles.name}</td>
                            <td>{usuarios.estado.status}</td>

                        </tr>
                    ))
                }
        </table>
    </div>
        </div>
    )
}

export default Gestionusuarios
