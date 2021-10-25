import React, { useEffect, useState } from 'react';
import '../App.css';
import useAuth from '../hooks/useAuth';
import Headergestproduct from './Headergestproduct';
import Agregar from '../assets/img/Agregar.png';
import Lapiz from '../assets/img/Lapis.png';
import { Link } from "react-router-dom";
import axios from 'axios'

  
const Gestionproductos =() =>{

    const auth = useAuth();

    const [productos, setProductos] = useState([]);

    const ListarProductos = async () => {
        try {
            const { status, data } = await axios({
                method: 'GET',
                url: 'http://localhost:4500/proyecto/productos/listar',
                headers: {
                    'Authorization': `Bearer ${auth.token}`
                }
            });
           if(status===200){
                setProductos(data.productos);
               console.log(productos);
           }else{
               console.log("Error");
           }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        ListarProductos();
    }, []);

    return (

        <div>
            <Headergestproduct />
        <div class="iconosVentas">
        <ul>
            <li>
            <Link to="Ingresoproductos"><img src={Agregar} alt=""/></Link>
                <span>Nuevo Producto</span>
                {/* <img src="Imagenes/Agregar.png" alt=""> */}
                {/* <div class="title"><span><Link to="Ingresoproductos">Nuevo Producto</Link></span></div> */}
                {/* <img src="Imagenes/Agregar.png" alt=""> */}
                {/* <div class="title"><span><Link to="Ingresoproductos">Nuevo Producto</Link></span></div> */}

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
            {
                    productos.map((productos, index)=>(
                        <tr key={productos._id}>
                            <td>{productos.ID}</td>
                            <td>{productos.Descripcion}</td>
                            <td>{productos.ValorUnitario}</td>
                            <td>{productos.Estado}</td>
                            <td><Link to="Ingresoproductos"> <img src={Lapiz}  alt="" id="img_lapiz" /></Link></td>
                        </tr>
                    ))
                }
        </table>
    </div>
    </div>
    )
}

export default Gestionproductos